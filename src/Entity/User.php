<?php

declare(strict_types=1);

namespace App\Entity;

use App\Command\UpdateUser;
use App\Repository\UserRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Id;
use Ramsey\Uuid\Uuid;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\InheritanceType('JOINED')]
#[ORM\DiscriminatorColumn(name: 'jobPosition', type: 'string')]
#[ORM\DiscriminatorMap([
    'developer' => Developer::class,
    'project-manager' => ProjectManager::class,
    'tester' => Tester::class,
])]
class User
{
    #[Id]
    #[Column(type: Types::GUID)]
    protected string $id;

    #[ORM\Column(length: 50)]
    protected string $firstName;

    #[ORM\Column(length: 100)]
    protected string $lastName;

    #[ORM\Column(length: 100)]
    protected string $email;

    #[ORM\Column(length: 20)]
    protected string $jobPosition;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $description = null;

    public function __construct(
        ?string $id,
        string $firstName,
        string $lastName,
        string $email,
        string $jobPosition,
        ?string $description
    ) {
        $this->id = $id ?? Uuid::uuid7()->toString();
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->jobPosition = $jobPosition;
        $this->description = $description;
    }

    public function updateFromCommand(UpdateUser $command): void
    {
        ! isset($command->firstName) ?: $this->firstName = $command->firstName;
        ! isset($command->lastName) ?: $this->lastName = $command->lastName;
        ! isset($command->email) ?: $this->email = $command->email;
        ! isset($command->jobPosition) ?: $this->jobPosition = $command->jobPosition;
        ! isset($command->description) ?: $this->description = $command->description;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getJobPosition(): string
    {
        return $this->jobPosition;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }
}
