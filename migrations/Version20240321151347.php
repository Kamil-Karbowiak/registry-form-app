<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240321151347 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD roles JSON NOT NULL, ADD password VARCHAR(255) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL ON user (email)');
        $this->addSql('INSERT INTO user (id, first_name, last_name, email, job_position, description, roles, password, jobPosition) VALUES ("dea3c540-4ba2-4036-8866-038a3091dc2c", "Tester", "Testowy", "admin", "tester", null, \'["ADMIN"]\', "$2y$13$jx.Mkg1E1Rtq9emisFKydOFzC1TkMqrsNJVSRv08Fc56RWvlcXo/e", "tester")');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX UNIQ_IDENTIFIER_EMAIL ON user');
        $this->addSql('ALTER TABLE user DROP roles, DROP password');
    }
}
