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
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Attribute\Ignore;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\InheritanceType('JOINED')]
#[ORM\DiscriminatorColumn(name: 'jobPosition', type: 'string')]
#[ORM\DiscriminatorMap([
    'developer' => Developer::class,
    'project-manager' => ProjectManager::class,
    'tester' => Tester::class,
    'admin' => Admin::class,
])]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
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

    #[Ignore]
    #[ORM\Column]
    private array $roles = [];

    #[Ignore]
    #[ORM\Column(nullable: true)]
    private ?string $password = null;

    #[Ignore]
    #[ORM\Column(length: 100, nullable: true)]
    private string $token;

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

    #[Ignore]
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getJobPosition(): string
    {
        return $this->jobPosition;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }
}
