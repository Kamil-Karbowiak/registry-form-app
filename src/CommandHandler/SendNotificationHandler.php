<?php

declare(strict_types=1);

namespace App\CommandHandler;

use App\Command\SendNotification;
use App\Entity\User;
use App\Notification\NotificationInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class SendNotificationHandler implements MessageHandlerInterface
{
    public function __construct(
        private readonly NotificationInterface $notification,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function __invoke(SendNotification $command): void
    {
        $user = $this->entityManager->getReference(User::class, $command->userId);
        $this->notification->sendNotification($user);
    }
}
