<?php

declare(strict_types=1);

namespace App\Notification;

use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class EmailNotification implements NotificationInterface
{
    public function __construct(
        protected MailerInterface $mailer,
        protected string $fromEmail,
        protected string $subject
    ) {
    }

    public function sendNotification(User $user, string $plainPassword): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address($this->fromEmail))
            ->to(new Address($user->getEmail()))
            ->subject('Potwierdzenie rejestracji')
            ->htmlTemplate('email/notification.html.twig')
            ->context([
                'user' => $user,
                'plainPassword' => $plainPassword,
            ]);

        $this->mailer->send($email);
    }
}
