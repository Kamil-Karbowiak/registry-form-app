<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    #[Route('/', name: 'default_main')]
    public function index(): Response
    {
        return $this->render('default/main.html.twig');
    }

    #[Route('/admin', name: 'default_admin')]
    public function admin(): Response
    {
        return $this->render('default/admin.html.twig');
    }
}
