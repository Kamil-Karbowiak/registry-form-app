<?php

declare(strict_types=1);

namespace App\Entity;

use App\Command\CreateUser;
use App\Command\UpdateUser;
use App\Repository\DeveloperRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Ignore;

#[ORM\Entity(repositoryClass: DeveloperRepository::class)]
class Developer extends User
{
    #[Ignore]
    #[ORM\Column(length: 255)]
    protected string $integratedDevelopmentEnvironments;

    #[Ignore]
    #[ORM\Column(length: 255)]
    protected string $programmingLanguages;

    #[Ignore]
    #[ORM\Column]
    protected bool $hasMysqlKnowledge;

    public function __construct(
        ?string $id,
        string $firstName,
        string $lastName,
        string $email,
        string $jobPosition,
        ?string $description,
        string $integratedDevelopmentEnvironments,
        string $programmingLanguages,
        bool $hasMysqlKnowledge
    ) {
        parent::__construct($id, $firstName, $lastName, $email, $jobPosition, $description);
        $this->integratedDevelopmentEnvironments = $integratedDevelopmentEnvironments;
        $this->programmingLanguages = $programmingLanguages;
        $this->hasMysqlKnowledge = $hasMysqlKnowledge;
    }

    #[\Override]
    public function updateFromCommand(UpdateUser $command): void
    {
        ! isset($command->firstName) ?: $this->firstName = $command->firstName;
        ! isset($command->lastName) ?: $this->lastName = $command->lastName;
        ! isset($command->email) ?: $this->email = $command->email;
        ! isset($command->jobPosition) ?: $this->jobPosition = $command->jobPosition;
        ! isset($command->description) ?: $this->description = $command->description;
        ! isset($command->skills['integrated_development_environments']) ?: $this->integratedDevelopmentEnvironments = $command->skills['integrated_development_environments'];
        ! isset($command->skills['programming_languages']) ?: $this->programmingLanguages = $command->skills['programming_languages'];
        ! isset($command->skills['has_mysql_knowledge']) ?: $this->hasMysqlKnowledge = $command->skills['has_mysql_knowledge'];
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
            $command->skills['integrated_development_environments'],
            $command->skills['programming_languages'],
            $command->skills['has_mysql_knowledge']
        );
    }

    public function getSkills(): iterable
    {
        return [
            'integrated_development_environments' => $this->integratedDevelopmentEnvironments,
            'programming_languages' => $this->programmingLanguages,
            'has_mysql_knowledge' => $this->hasMysqlKnowledge,
        ];
    }

    public function getIntegratedDevelopmentEnvironments(): string
    {
        return $this->integratedDevelopmentEnvironments;
    }

    public function getProgrammingLanguages(): string
    {
        return $this->programmingLanguages;
    }

    public function isHasMysqlKnowledge(): bool
    {
        return $this->hasMysqlKnowledge;
    }
}
