<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240321200302 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `admin` (id CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE developer (id CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', integrated_development_environments VARCHAR(255) NOT NULL, programming_languages VARCHAR(255) NOT NULL, has_mysql_knowledge TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_manager (id CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', project_methodologies VARCHAR(255) NOT NULL, reporting_systems VARCHAR(255) NOT NULL, has_scrum_knowledge TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tester (id CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', testing_systems VARCHAR(255) NOT NULL, reporting_systems VARCHAR(255) NOT NULL, has_selenium_knowledge TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', first_name VARCHAR(50) NOT NULL, last_name VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL, job_position VARCHAR(20) NOT NULL, description LONGTEXT DEFAULT NULL, roles JSON NOT NULL, password VARCHAR(255) DEFAULT NULL, token VARCHAR(100) DEFAULT NULL, jobPosition VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `admin` ADD CONSTRAINT FK_880E0D76BF396750 FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE developer ADD CONSTRAINT FK_65FB8B9ABF396750 FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_manager ADD CONSTRAINT FK_6C3A29DCBF396750 FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tester ADD CONSTRAINT FK_FC505645BF396750 FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `admin` DROP FOREIGN KEY FK_880E0D76BF396750');
        $this->addSql('ALTER TABLE developer DROP FOREIGN KEY FK_65FB8B9ABF396750');
        $this->addSql('ALTER TABLE project_manager DROP FOREIGN KEY FK_6C3A29DCBF396750');
        $this->addSql('ALTER TABLE tester DROP FOREIGN KEY FK_FC505645BF396750');
        $this->addSql('DROP TABLE `admin`');
        $this->addSql('DROP TABLE developer');
        $this->addSql('DROP TABLE project_manager');
        $this->addSql('DROP TABLE tester');
        $this->addSql('DROP TABLE user');
    }
}
