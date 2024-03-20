<?php

declare(strict_types=1);

namespace App\Query;

use App\Repository\DeveloperRepository;
use App\Repository\ProjectManagerRepository;
use App\Repository\TesterRepository;

final class GetUsers implements Query
{
    public function __construct(
        private readonly DeveloperRepository $developerRepository,
        private readonly TesterRepository $testerRepository,
        private readonly ProjectManagerRepository $projectManagerRepository
    ) {
    }

    public function execute(int $pageNr): iterable
    {
        $developers = $this->developerRepository->findAll();
        $testers = $this->testerRepository->findAll();
        $projectManagers = $this->projectManagerRepository->findAll();

        return [...$developers, ...$testers, ...$projectManagers];
    }
}
