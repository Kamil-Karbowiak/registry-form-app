<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Admin extends User
{
    public function __construct(
        ?string $id,
        string $firstName,
        string $lastName,
        string $email,
        string $jobPosition,
        ?string $description,
    ) {
        parent::__construct($id, $firstName, $lastName, $email, $jobPosition, $description);
    }
}
