<?php

declare(strict_types=1);

namespace App\CommandHandler;

use App\Command\RemoveUser;
use App\Entity\User;
use App\Exception\NotFoundException;
use App\Repository\UserRepository;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class RemoveUserHandler implements MessageHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository
    ) {
    }

    public function __invoke(RemoveUser $command): void
    {
        /** @var User $user */
        $user = $this->userRepository->findOneById($command->id);

        if (empty($user)) {
            throw new NotFoundException();
        }

        $this->userRepository->remove($user);
    }
}
