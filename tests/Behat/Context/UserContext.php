<?php

declare(strict_types=1);

namespace App\Tests\Behat\Context;

use App\Entity\Developer;
use App\Entity\ProjectManager;
use App\Entity\Tester;
use App\Enum\JobPosition;
use App\Repository\UserRepository;
use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\TableNode;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Doctrine\ORM\EntityManagerInterface;

final class UserContext implements Context
{
    public const TABLES = ['tester'];

    private array $workingDays = [];

    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserRepository $userRepository
    ) {
    }

    /**
     * @BeforeScenario
     */
    public function clearData()
    {
        $purger = new ORMPurger($this->entityManager);
        $purger->purge();
    }

    /**
     * @Given /^there are developers:$/
     */
    public function thereAreDevelopers(TableNode $table)
    {
        foreach ($table->getColumnsHash() as $row) {
            $dev = new Developer(
                $row['id'],
                $row['firstName'],
                $row['lastName'],
                $row['email'],
                JobPosition::Developer->value,
                $row['description'],
                $row['integratedDevelopmentEnvironments'],
                $row['programmingLanguages'],
                (bool) $row['hasMySQLknowledge']
            );

            $this->entityManager->persist($dev);
        }

        $this->entityManager->flush();
    }

    /**
     * @Given /^there are testers:$/
     */
    public function thereAreTesters(TableNode $table)
    {
        foreach ($table->getColumnsHash() as $row) {
            $dev = new Tester(
                $row['id'],
                $row['firstName'],
                $row['lastName'],
                $row['email'],
                JobPosition::Tester->value,
                $row['description'],
                $row['testingSystems'],
                $row['reportingSystems'],
                (bool) $row['hasSeleniumKnowledge']
            );

            $this->entityManager->persist($dev);
        }

        $this->entityManager->flush();
    }

    /**
     * @Given /^there are projectManagers:$/
     */
    public function thereAreProjectManagers(TableNode $table)
    {
        foreach ($table->getColumnsHash() as $row) {
            $dev = new ProjectManager(
                $row['id'],
                $row['firstName'],
                $row['lastName'],
                $row['email'],
                JobPosition::ProjectManager->value,
                $row['description'],
                $row['projectMethodologies'],
                $row['reportingSystems'],
                (bool) $row['hasScrumKnowledge']
            );

            $this->entityManager->persist($dev);
        }

        $this->entityManager->flush();
    }

    /**
     * @Given there are working days:
     */
    public function thereAreWorkingDays(TableNode $table): void
    {
        foreach ($table->getColumnsHash() as $row) {
            $this->workingDays[$row['id']] = $row;
        }
    }

    /**
     * @Given the working day :id has working hours:
     */
    public function theWorkingDayHasWorkingHours(string $id, TableNode $table): void
    {
        foreach ($table->getColumnsHash() as $row) {
            $this->workingDays[$id]['workingHours'][] = $row;
        }
    }

    /**
     * @Given the working day :id has bookings:
     */
    public function theWorkingDayHasBookings(string $id, TableNode $table): void
    {
        foreach ($table->getColumnsHash() as $row) {
            $this->commandBus->dispatch(
                new BookAppointment(
                    $id,
                    $row['time'],
                    $row['serviceType'],
                    $row['bookerFirstName'],
                    $row['bookerLastName'],
                    $row['bookerEmail']
                )
            );
        }
    }

    /**
     * @Given the working days have been saved
     */
    public function theWorkingDaysHaveBeenSaved(): void
    {
        foreach ($this->workingDays as $workingDayData) {
            $workingHours = [];
            foreach ($workingDayData['workingHours'] ?? [] as $durationData) {
                $workingHours[] = Duration::create(Time::fromString($durationData['from']), Time::fromString($durationData['to']));
            }

            $workingDay = WorkingDay::create(
                new WorkingDayId($workingDayData['id']),
                new StafferId($workingDayData['stafferId']),
                Date::fromString($workingDayData['date']),
                $workingHours
            );

            $this->workingDayRepository->save($workingDay);
            $this->dispatcher->dispatch(...$workingDay->pullEvents());
        }

        $this->entityManager->flush();

        $this->workingDays = [];
    }
}
