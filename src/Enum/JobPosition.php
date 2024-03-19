<?php

declare(strict_types=1);

namespace App\Enum;

enum JobPosition: string
{
    case Tester = 'tester';
    case Developer = 'developer';
    case ProjectManager = 'project-manager';

    public static function getValues(): array
    {
        return [self::Tester->value, self::Developer->value, self::ProjectManager->value];
    }
}
