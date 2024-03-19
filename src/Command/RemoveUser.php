<?php

declare(strict_types=1);

namespace App\Command;

final readonly class RemoveUser implements Command
{
    public function __construct(
        public string $id
    ) {
    }
}
