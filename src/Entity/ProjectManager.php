<?php

declare(strict_types=1);

namespace App\Entity;

use App\Command\UpdateUser;
use App\Repository\ProjectManagerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectManagerRepository::class)]
class ProjectManager extends User
{
    #[ORM\Column(length: 255)]
    protected string $projectMethodologies;

    #[ORM\Column(length: 255)]
    protected string $reportingSystems;

    #[ORM\Column]
    protected bool $hasScrumKnowledge;

    public function __construct(
        ?string $id,
        string $firstName,
        string $lastName,
        string $email,
        string $jobPosition,
        ?string $description,
        string $projectMethodologies,
        string $reportingSystems,
        bool $hasScrumKnowledge
    ) {
        parent::__construct($id, $firstName, $lastName, $email, $jobPosition, $description);
        $this->projectMethodologies = $projectMethodologies;
        $this->reportingSystems = $reportingSystems;
        $this->hasScrumKnowledge = $hasScrumKnowledge;
    }

    public function updateFromCommand(UpdateUser $command): void
    {
        ! isset($command->firstName) ?: $this->firstName = $command->firstName;
        ! isset($command->lastName) ?: $this->lastName = $command->lastName;
        ! isset($command->email) ?: $this->email = $command->email;
        ! isset($command->jobPosition) ?: $this->jobPosition = $command->jobPosition;
        ! isset($command->description) ?: $this->description = $command->description;
        ! isset($command->skills['project_methodologies']) ?: $this->projectMethodologies = $command->skills['project_methodologies'];
        ! isset($command->skills['reporting_systems']) ?: $this->reportingSystems = $command->skills['reporting_systems'];
        ! isset($command->skills['has_scrum_knowledge']) ?: $this->hasScrumKnowledge = $command->skills['has_scrum_knowledge'];
    }

    public function getProjectMethodologies(): string
    {
        return $this->projectMethodologies;
    }

    public function getReportingSystems(): string
    {
        return $this->reportingSystems;
    }

    public function isHasScrumKnowledge(): bool
    {
        return $this->hasScrumKnowledge;
    }
}
