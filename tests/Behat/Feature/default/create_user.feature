Feature: Create user

  Scenario: Happy path
    When I send a POST request to "/users" with body:
    """
      {
          "first_name": "Tester",
          "last_name": "Testowy",
          "email": "test@wp.pl",
          "job_position": "developer",
          "skills": {
              "integrated_development_environments": "PhpStorm",
              "programming_languages": "PHP",
              "has_mysql_knowledge": true
          }
      }
    """
    Then the response code is 204

  Scenario: Validation - schema
    When I send a POST request to "/users" with body:
    """
      {
          "first_name": "Tester",
          "email": "test@wppl",
          "job_position": "invalid-job-position"
      }
    """
    Then the response code is 400
    And the response content is:
    """
      {
          "message": "form_contains_errors",
          "errors": {
              "last_name": [
                  "This value should not be blank."
              ],
              "email": [
                  "This value is not a valid email address."
              ],
              "job_position": [
                  "The selected choice is invalid."
              ]
          }
      }
    """