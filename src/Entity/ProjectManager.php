<?php

declare(strict_types=1);

namespace App\Entity;

use App\Command\UpdateUser;
use App\Repository\ProjectManagerRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Ignore;

#[ORM\Entity(repositoryClass: ProjectManagerRepository::class)]
class ProjectManager extends User
{
    #[Ignore]
    #[ORM\Column(length: 255)]
    protected string $projectMethodologies;

    #[Ignore]
    #[ORM\Column(length: 255)]
    protected string $reportingSystems;

    #[Ignore]
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

    #[\Override]
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

    public function getSkills(): iterable
    {
        return [
            'project_methodologies' => $this->projectMethodologies,
            'reporting_systems' => $this->reportingSystems,
            'has_scrum_knowledge' => $this->hasScrumKnowledge
        ];
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
