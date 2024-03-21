<?php

declare(strict_types=1);

namespace App\CommandHandler;

use App\Command\CreateUser;
use App\Entity\Developer;
use App\Entity\ProjectManager;
use App\Entity\Tester;
use App\Entity\User;
use App\Enum\JobPosition;
use App\Exception\EmailAlreadyTakenException;
use App\Repository\UserRepository;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class CreateUserHandler implements MessageHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly UserPasswordHasherInterface $passwordHasher
    ) {
    }

    public function __invoke(CreateUser $command): void
    {
        $isEmailAlreadyTaken = ! empty($this->userRepository->findByEmail($command->email));

        if ($isEmailAlreadyTaken) {
            throw new EmailAlreadyTakenException('Adres email jest już zajęty');
        }

        $user = $this->createUser($command);
        $hashedPassword = $this->passwordHasher->hashPassword(
            $user,
            $command->plainPassword
        );

        $user->setPassword($hashedPassword);
        $this->userRepository->save($user);
    }

    private function createUser(CreateUser $command): User
    {
        return match ($command->jobPosition) {
            JobPosition::Developer->value => Developer::createFromCommand($command),
            JobPosition::Tester->value => Tester::createFromCommand($command),
            JobPosition::ProjectManager->value => ProjectManager::createFromCommand($command)
        };
    }
}
