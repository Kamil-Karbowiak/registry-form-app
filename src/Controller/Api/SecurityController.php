<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\String\ByteString;

class SecurityController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function index(#[CurrentUser] ?User $user): Response
    {
        if ($user === null) {
            return $this->json([
                'message' => 'missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        // dla celów mikro projektu
        $token = ByteString::fromRandom(20);

        $user->setToken($token);
        $this->entityManager->flush();

        return new JsonResponse([
            'user' => $user->getUserIdentifier(),
            'token' => $token,
        ]);
    }
}
