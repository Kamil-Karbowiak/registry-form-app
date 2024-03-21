<?php

declare(strict_types=1);

namespace App\CommandHandler;

use App\Command\CreateUser;
use App\Entity\Developer;
use App\Entity\ProjectManager;
use App\Entity\Tester;
use App\Entity\User;
use App\Enum\JobPosition;
use App\Repository\UserRepository;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class CreateUserHandler implements MessageHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository
    ) {
    }

    public function __invoke(CreateUser $command): void
    {
        $user = $this->createUser($command);
        $this->userRepository->save($user);
        // MAILER
    }

    private function createUser(CreateUser $command): User
    {
        return match ($command->jobPosition) {
            JobPosition::Developer->value => new Developer(
                $command->userId,
                $command->firstName,
                $command->lastName,
                $command->email,
                $command->jobPosition,
                $command->description,
                $command->skills['integrated_development_environments'],
                $command->skills['programming_languages'],
                $command->skills['has_mysql_knowledge']
            ),
            JobPosition::Tester->value => new Tester(
                $command->userId,
                $command->firstName,
                $command->lastName,
                $command->email,
                $command->jobPosition,
                $command->description,
                $command->skills['testing_systems'],
                $command->skills['reporting_systems'],
                $command->skills['has_selenium_knowledge']
            ),
            JobPosition::ProjectManager->value => new ProjectManager(
                $command->userId,
                $command->firstName,
                $command->lastName,
                $command->email,
                $command->jobPosition,
                $command->description,
                $command->skills['project_methodologies'],
                $command->skills['reporting_systems'],
                $command->skills['has_scrum_knowledge']
            )
        };
    }
}
