<?php

declare(strict_types=1);

namespace App\Notification;

use App\Entity\User;

interface NotificationInterface
{
    public function sendNotification(User $user): void;
}