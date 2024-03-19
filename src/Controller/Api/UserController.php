<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Command\CreateUser;
use App\Command\RemoveUser;
use App\Command\UpdateUser;
use App\Controller\Traits\FormErrorsTrait;
use App\Exception\NotFoundException;
use App\Form\Handler\InvalidFormException;
use App\Form\UserType;
use App\Query\GetUsers;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\{Exception\BadRequestException, JsonResponse, Request, Response};
use Symfony\Component\Messenger\HandleTrait;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class UserController extends AbstractController
{
    use HandleTrait;
    use FormErrorsTrait;

    public function __construct(
        private readonly SerializerInterface $serializer,
        private readonly TranslatorInterface $translator,
        MessageBusInterface $messageBus,
    ) {
        $this->messageBus = $messageBus;
    }

    #[Route('/users', name: 'user_index', methods: ['GET'])]
    public function index(Request $request, GetUsers $query): Response
    {
        try {
            $page = $request->query->getInt('page', 1);

            if ($page < 1) {
                throw new BadRequestException('`page` parameter must be greater than 0');
            }

            $users = $query->execute($page);
            $serializedUsers = $this->serializer->serialize($users, 'json');

            $response = new JsonResponse();
            $response->setContent($serializedUsers);

            return $response;
        } catch (BadRequestException $exception) {
            return new JsonResponse([
                'message' => $exception->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/users', name: 'user_create', methods: ['POST'])]
    public function create(Request $request): Response
    {
        try {
            $form = $this->createForm(UserType::class);
            $requestData = json_decode($request->getContent(), true);

            $form->submit($requestData);

            if (! $form->isValid()) {
                throw new InvalidFormException($form);
            }

            $formData = $form->getData();

            $this->handle(new CreateUser(
                $formData['first_name'],
                $formData['last_name'],
                $formData['email'],
                $formData['job_position'],
                $formData['skills'],
                $formData['description'] ?? null
            ));

            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        } catch (InvalidFormException $e) {
            return new JsonResponse([
                'message' => $this->translator->trans('form_contains_errors', [], 'validators'),
                'errors' => $this->getErrorsFromForm($e->getForm()),
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/users/{uuid}', name: 'user_update', methods: ['PATCH'])]
    public function update(string $uuid, Request $request): Response
    {
        try {
            $form = $this->createForm(UserType::class);
            $requestData = json_decode($request->getContent(), true);

            $form->submit($requestData, false);

            if (! $form->isValid()) {
                throw new InvalidFormException($form);
            }

            $formData = $form->getData();

            $this->handle(new UpdateUser(
                $uuid,
                $formData['first_name'] ?? null,
                $formData['last_name'] ?? null,
                $formData['email'] ?? null,
                $formData['job_position'] ?? null,
                $formData['skills'] ?? null,
                $formData['description'] ?? null
            ));

            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        } catch (InvalidFormException $e) {
            return new JsonResponse([
                'message' => $this->translator->trans('form_contains_errors', [], 'validators'),
                'errors' => $this->getErrorsFromForm($e->getForm()),
            ], Response::HTTP_BAD_REQUEST);
        } catch (NotFoundException $exception) {
            return new JsonResponse([
                'error' => 'User not found',
            ], Response::HTTP_NOT_FOUND);
        }
    }

    #[Route('/users/{uuid}', name: 'user_delete', methods: ['DELETE'])]
    public function delete(string $uuid): Response
    {
        try {
            $this->handle(new RemoveUser($uuid));

            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        } catch (NotFoundException $exception) {
            return new JsonResponse([
                'error' => 'User not found',
            ], Response::HTTP_NOT_FOUND);
        }
    }
}
