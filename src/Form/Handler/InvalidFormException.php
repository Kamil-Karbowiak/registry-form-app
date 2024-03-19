<?php

declare(strict_types=1);

namespace App\Form\Handler;

use Symfony\Component\Form\FormInterface;

class InvalidFormException extends \Exception
{
    private FormInterface $form;

    public function __construct(FormInterface $form)
    {
        parent::__construct('Form Error', 0);

        $this->form = $form;
    }

    public function getForm(): FormInterface
    {
        return $this->form;
    }
}
