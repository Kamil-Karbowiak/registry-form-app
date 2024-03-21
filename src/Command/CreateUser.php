<?php

declare(strict_types=1);

namespace App\Command;

final readonly class CreateUser implements Command
{
    public function __construct(
        public string $userId,
        public string $firstName,
        public string $lastName,
        public string $email,
        public string $jobPosition,
        public array $skills,
        public ?string $description
    ) {
    }
}
