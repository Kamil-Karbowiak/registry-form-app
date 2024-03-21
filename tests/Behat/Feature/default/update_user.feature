Feature: Update user

  Background:
    Given there are admin

    Given there are developers:
    | id                                   | firstName | lastName | email        | integratedDevelopmentEnvironments | programmingLanguages | hasMySQLknowledge | description    |
    | 018e55dc-afec-78d1-811f-26ef573a8987 | Dev1      | Testowy1 | test1@test.pl | ide1, ide2, ide3                  | PHP, Java            | 1                 | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55dc-ca59-7876-a2fd-b7a0430d861f | Dev2      | Testowy2 | test2@test.pl | ide1                              | PHP, JS, Python      | 0                 | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55de-5635-76d3-88f0-4ccd52a752fc | Dev3      | Testowy3 | test3@test.pl | ide1, ide2                        | PHP                  | 1                 |                                                                                                                                                                                                                                                                                                                                                                                |

    And there are testers:
    | id                                   | firstName | lastName | email        | testingSystems                                 | reportingSystems                                     | hasSeleniumKnowledge | description |
    | 018e55db-e90d-7ea3-b599-47b9fcf1dd4d | Test1     | Testowy4 | test4@test.pl | testingSystem1, testingSystem2, testingSystem3 | reportingSystem1, reportingSystem2                   | 0                    | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55dc-0f6d-71d7-870d-3113590ea872 | Test2     | Testowy5 | test5@test.pl | testingSystem1                                 | reportingSystem1, reportingSystem2, reportingSystem3 | 1                    |                                                                                                                                                                                                                                                                                                                                                                                |
    | 018e55dc-2a23-75d5-9b7d-2549cf5d62f6 | Test3     | Testowy6 | test6@test.pl | testingSystem1, testingSystem2                 | reportingSystem1                                     | 1                    |                                                                                                                                                                                                                                                                                                                                                                                |

    And there are projectManagers:
    | id                                   | firstName | lastName | email        | projectMethodologies                     | reportingSystems | hasScrumKnowledge | description |
    | 018e55dc-5305-7fd1-9c7b-5dc91133cd59 | Pm1       | Testowy7 | test7@test.pl | projectMethodology1, projectMethodology2 | reportingSystem1 | 1                 | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55dc-6e0a-75a9-adcc-565789a20f6f | Pm2       | Testowy8 | test8@test.pl | projectMethodology1, projectMethodology2 | reportingSystem1 | 1                 |                                                                                                                                                                                                                                                                                                                                                                                |
    | 018e55dc-8891-78f4-b684-e1f98ad3fc8b | Pm3       | Testowy9 | test9@test.pl | projectMethodology1, projectMethodology2 | reportingSystem1 | 0                 |                                                                                                                                                                                                                                                                                                                                                                                |

  Scenario: Happy path
    When I add "authorization" header equal to "Bearer 4nnFDkRKckomrMCq951d"
    And I send a PATCH request to "/api/users/018e55dc-5305-7fd1-9c7b-5dc91133cd59" with body:
    """
      {
          "first_name": "Tester",
          "last_name": "Testowy",
          "email": "test10@wp.pl"
      }
    """
    Then the response code is 204

  Scenario: Validation - schema
    When I send a PATCH request to "/api/users/018e55dc-5305-7fd1-9c7b-5dc91133cd59" with body:
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
              "email": [
                  "This value is not a valid email address."
              ],
              "job_position": [
                  "The selected choice is invalid."
              ]
          }
      }
    """

  Scenario: 404 - not found
    When I send a PATCH request to "/api/users/018e55dc-5305-7fd1-9c7b-0000000000"
    Then the response code is 404
    And the response content is:
    """
      {
          "error": "User not found"
      }
    """