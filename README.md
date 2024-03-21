### Installation
By default, NGINX and MYSQL are set to ports 80 and 3306, respectively. If necessary, you can change them in the .env file.

Run containers: ```docker-compose up -d --build```.

Install dependencies: ```docker-compose exec php composer install```.

Run database migrations:
```
docker-compose exec php bin/console doctrine:database:drop --if-exists --force
docker-compose exec php bin/console doctrine:database:create --if-not-exists
docker-compose exec php bin/console doctrine:migration:migrate --no-interaction
```

You can check email sending in Mailhog, which is running in Docker: http://localhost:8025/

App links:
- http://localhost/
- http://localhost/admin

### Testing
- BEHAT:
```
docker-compose exec php bin/console --env=test doctrine:database:drop --if-exists --force
docker-compose exec php bin/console --env=test doctrine:database:create --if-not-exists
docker-compose exec php bin/console --env=test doctrine:migration:migrate --no-interaction
docker-compose exec php ./vendor/bin/behat -c behat.yml -f progress
```

