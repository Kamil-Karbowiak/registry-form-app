<?php

declare(strict_types=1);

namespace App\Entity;

use App\Command\UpdateUser;
use App\Repository\DeveloperRepository;
use Doctrine\ORM\Mapping as ORM;
use Override;

#[ORM\Entity(repositoryClass: DeveloperRepository::class)]
class Developer extends User
{
    #[ORM\Column(length: 255)]
    protected string $integratedDevelopmentEnvironments;

    #[ORM\Column(length: 255)]
    protected string $programmingLanguages;

    #[ORM\Column]
    protected bool $hasMySQLknowledge;

    public function __construct(
        ?string $id,
        string $firstName,
        string $lastName,
        string $email,
        string $jobPosition,
        ?string $description,
        string $integratedDevelopmentEnvironments,
        string $programmingLanguages,
        bool $hasMySQLknowledge
    ) {
        parent::__construct($id, $firstName, $lastName, $email, $jobPosition, $description);
        $this->integratedDevelopmentEnvironments = $integratedDevelopmentEnvironments;
        $this->programmingLanguages = $programmingLanguages;
        $this->hasMySQLknowledge = $hasMySQLknowledge;
    }

    #[Override]
    public function updateFromCommand(UpdateUser $command): void
    {
        ! isset($command->firstName) ?: $this->firstName = $command->firstName;
        ! isset($command->lastName) ?: $this->lastName = $command->lastName;
        ! isset($command->email) ?: $this->email = $command->email;
        ! isset($command->jobPosition) ?: $this->jobPosition = $command->jobPosition;
        ! isset($command->description) ?: $this->description = $command->description;
        ! isset($command->skills['integrated_development_environments']) ?: $this->integratedDevelopmentEnvironments = $command->skills['integrated_development_environments'];
        ! isset($command->skills['programming_languages']) ?: $this->programmingLanguages = $command->skills['programming_languages'];
        ! isset($command->skills['has_mysql_knowledge']) ?: $this->hasMySQLknowledge = $command->skills['has_mysql_knowledge'];
    }

    public function getIntegratedDevelopmentEnvironments(): string
    {
        return $this->integratedDevelopmentEnvironments;
    }

    public function getProgrammingLanguages(): string
    {
        return $this->programmingLanguages;
    }

    public function hasMySQLknowledge(): bool
    {
        return $this->hasMySQLknowledge;
    }
}
