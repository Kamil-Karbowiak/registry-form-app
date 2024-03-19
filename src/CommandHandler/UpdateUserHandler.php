<?php

declare(strict_types=1);

namespace App\CommandHandler;

use App\Command\UpdateUser;
use App\Entity\User;
use App\Exception\NotFoundException;
use App\Repository\UserRepository;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class UpdateUserHandler implements MessageHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository
    ) {
    }

    public function __invoke(UpdateUser $command): void
    {
        /** @var User $user */
        $user = $this->userRepository->findOneById($command->id);

        if (empty($user)) {
            throw new NotFoundException();
        }

        $user->updateFromCommand($command);
        $this->userRepository->save($user);
    }
}
