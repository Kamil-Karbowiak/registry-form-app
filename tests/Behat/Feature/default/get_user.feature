Feature: Get users

  Background:
    Given there are developers:
    | id                                   | firstName | lastName | email        | integratedDevelopmentEnvironments | programmingLanguages | hasMySQLknowledge | description    |
    | 018e55dc-afec-78d1-811f-26ef573a8987 | Dev1      | Testowy1 | test@test.pl | ide1, ide2, ide3                  | PHP, Java            | 1                 | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55dc-ca59-7876-a2fd-b7a0430d861f | Dev2      | Testowy2 | test@test.pl | ide1                              | PHP, JS, Python      | 0                 | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55de-5635-76d3-88f0-4ccd52a752fc | Dev3      | Testowy3 | test@test.pl | ide1, ide2                        | PHP                  | 1                 |                                                                                                                                                                                                                                                                                                                                                                                |

    And there are testers:
    | id                                   | firstName | lastName | email        | testingSystems                                 | reportingSystems                                     | hasSeleniumKnowledge | description |
    | 018e55db-e90d-7ea3-b599-47b9fcf1dd4d | Test1     | Testowy4 | test@test.pl | testingSystem1, testingSystem2, testingSystem3 | reportingSystem1, reportingSystem2                   | 0                    | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55dc-0f6d-71d7-870d-3113590ea872 | Test2     | Testowy5 | test@test.pl | testingSystem1                                 | reportingSystem1, reportingSystem2, reportingSystem3 | 1                    |                                                                                                                                                                                                                                                                                                                                                                                |
    | 018e55dc-2a23-75d5-9b7d-2549cf5d62f6 | Test3     | Testowy6 | test@test.pl | testingSystem1, testingSystem2                 | reportingSystem1                                     | 1                    |                                                                                                                                                                                                                                                                                                                                                                                |

    And there are projectManagers:
    | id                                   | firstName | lastName | email        | projectMethodologies                     | reportingSystems | hasScrumKnowledge | description |
    | 018e55dc-5305-7fd1-9c7b-5dc91133cd59 | Pm1       | Testowy7 | test@test.pl | projectMethodology1, projectMethodology2 | reportingSystem1 | 1                 | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. |
    | 018e55dc-6e0a-75a9-adcc-565789a20f6f | Pm2       | Testowy8 | test@test.pl | projectMethodology1, projectMethodology2 | reportingSystem1 | 1                 |                                                                                                                                                                                                                                                                                                                                                                                |
    | 018e55dc-8891-78f4-b684-e1f98ad3fc8b | Pm3       | Testowy9 | test@test.pl | projectMethodology1, projectMethodology2 | reportingSystem1 | 0                 |                                                                                                                                                                                                                                                                                                                                                                                |

  Scenario: Happy path
    When I send a GET request to "/users"
    Then the response code is 200
    And the response content is:
    """
    [
      {
        "integratedDevelopmentEnvironments": "ide1, ide2, ide3",
        "programmingLanguages": "PHP, Java",
        "mySQLknowledge": true,
        "id": "018e55dc-afec-78d1-811f-26ef573a8987",
        "firstName": "Dev1",
        "lastName": "Testowy1",
        "email": "test@test.pl",
        "jobPosition": "developer",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
          "integratedDevelopmentEnvironments": "ide1",
          "programmingLanguages": "PHP, JS, Python",
          "mySQLknowledge": false,
          "id": "018e55dc-ca59-7876-a2fd-b7a0430d861f",
          "firstName": "Dev2",
          "lastName": "Testowy2",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
          "integratedDevelopmentEnvironments": "ide1, ide2",
          "programmingLanguages": "PHP",
          "mySQLknowledge": true,
          "id": "018e55de-5635-76d3-88f0-4ccd52a752fc",
          "firstName": "Dev3",
          "lastName": "Testowy3",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": ""
      },
      {
          "testingSystems": "testingSystem1, testingSystem2, testingSystem3",
          "reportingSystems": "reportingSystem1, reportingSystem2",
          "hasSeleniumKnowledge": false,
          "id": "018e55db-e90d-7ea3-b599-47b9fcf1dd4d",
          "firstName": "Test1",
          "lastName": "Testowy4",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
          "testingSystems": "testingSystem1",
          "reportingSystems": "reportingSystem1, reportingSystem2, reportingSystem3",
          "hasSeleniumKnowledge": true,
          "id": "018e55dc-0f6d-71d7-870d-3113590ea872",
          "firstName": "Test2",
          "lastName": "Testowy5",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": ""
      },
      {
          "testingSystems": "testingSystem1, testingSystem2",
          "reportingSystems": "reportingSystem1",
          "hasSeleniumKnowledge": true,
          "id": "018e55dc-2a23-75d5-9b7d-2549cf5d62f6",
          "firstName": "Test3",
          "lastName": "Testowy6",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": ""
      },
      {
          "projectMethodologies": "projectMethodology1, projectMethodology2",
          "reportingSystems": "reportingSystem1",
          "hasScrumKnowledge": true,
          "id": "018e55dc-5305-7fd1-9c7b-5dc91133cd59",
          "firstName": "Pm1",
          "lastName": "Testowy7",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
          "projectMethodologies": "projectMethodology1, projectMethodology2",
          "reportingSystems": "reportingSystem1",
          "hasScrumKnowledge": true,
          "id": "018e55dc-6e0a-75a9-adcc-565789a20f6f",
          "firstName": "Pm2",
          "lastName": "Testowy8",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": ""
      },
      {
          "projectMethodologies": "projectMethodology1, projectMethodology2",
          "reportingSystems": "reportingSystem1",
          "hasScrumKnowledge": false,
          "id": "018e55dc-8891-78f4-b684-e1f98ad3fc8b",
          "firstName": "Pm3",
          "lastName": "Testowy9",
          "email": "test@test.pl",
          "jobPosition": "developer",
          "description": ""
      }
    ]
    """