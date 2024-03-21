<?php

declare(strict_types=1);

namespace App\Command;

final readonly class SendNotification implements Command
{
    public function __construct(
        public string $userId
    ) {
    }
}
