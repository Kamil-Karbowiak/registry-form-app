<?php

declare(strict_types=1);

namespace App\Entity;

use App\Command\CreateUser;
use App\Command\UpdateUser;
use App\Repository\TesterRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Ignore;

#[ORM\Entity(repositoryClass: TesterRepository::class)]
class Tester extends User
{
    #[Ignore]
    #[ORM\Column(length: 255)]
    protected string $testingSystems;

    #[Ignore]
    #[ORM\Column(length: 255)]
    protected string $reportingSystems;

    #[Ignore]
    #[ORM\Column]
    protected bool $hasSeleniumKnowledge;

    public function __construct(
        ?string $id,
        string $firstName,
        string $lastName,
        string $email,
        string $jobPosition,
        ?string $description,
        string $testingSystems,
        string $reportingSystems,
        bool $hasSeleniumKnowledge
    ) {
        parent::__construct($id, $firstName, $lastName, $email, $jobPosition, $description);
        $this->testingSystems = $testingSystems;
        $this->reportingSystems = $reportingSystems;
        $this->hasSeleniumKnowledge = $hasSeleniumKnowledge;
    }

    #[\Override]
    public function updateFromCommand(UpdateUser $command): void
    {
        ! isset($command->firstName) ?: $this->firstName = $command->firstName;
        ! isset($command->lastName) ?: $this->lastName = $command->lastName;
        ! isset($command->email) ?: $this->email = $command->email;
        ! isset($command->jobPosition) ?: $this->jobPosition = $command->jobPosition;
        ! isset($command->description) ?: $this->description = $command->description;
        ! isset($command->skills['testing_systems']) ?: $this->testingSystems = $command->skills['testing_systems'];
        ! isset($command->skills['reporting_systems']) ?: $this->reportingSystems = $command->skills['reporting_systems'];
        ! isset($command->skills['has_selenium_knowledge']) ?: $this->hasSeleniumKnowledge = $command->skills['has_selenium_knowledge'];
    }

    public static function createFromCommand(CreateUser $command): self
    {
        return new self(
            $command->userId,
            $command->firstName,
            $command->lastName,
            $command->email,
            $command->jobPosition,
            $command->description,
            $command->skills['testing_systems'],
            $command->skills['reporting_systems'],
            $command->skills['has_selenium_knowledge']
        );
    }

    public function getSkills(): iterable
    {
        return [
            'testing_systems' => $this->testingSystems,
            'reporting_systems' => $this->reportingSystems,
            'has_selenium_knowledge' => $this->hasSeleniumKnowledge,
        ];
    }

    public function getTestingSystems(): string
    {
        return $this->testingSystems;
    }

    public function getReportingSystems(): string
    {
        return $this->reportingSystems;
    }

    public function isHasSeleniumKnowledge(): bool
    {
        return $this->hasSeleniumKnowledge;
    }
}
