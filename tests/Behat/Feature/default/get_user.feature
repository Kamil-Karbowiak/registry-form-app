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
            "id": "018e55dc-afec-78d1-811f-26ef573a8987",
            "first_name": "Dev1",
            "last_name": "Testowy1",
            "email": "test@test.pl",
            "job_position": "developer",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "skills": {
                "integrated_development_environments": "ide1, ide2, ide3",
                "programming_languages": "PHP, Java",
                "has_mysql_knowledge": true
            }
        },
        {
            "id": "018e55dc-ca59-7876-a2fd-b7a0430d861f",
            "first_name": "Dev2",
            "last_name": "Testowy2",
            "email": "test@test.pl",
            "job_position": "developer",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "skills": {
                "integrated_development_environments": "ide1",
                "programming_languages": "PHP, JS, Python",
                "has_mysql_knowledge": false
            }
        },
        {
            "id": "018e55de-5635-76d3-88f0-4ccd52a752fc",
            "first_name": "Dev3",
            "last_name": "Testowy3",
            "email": "test@test.pl",
            "job_position": "developer",
            "description": "",
            "skills": {
                "integrated_development_environments": "ide1, ide2",
                "programming_languages": "PHP",
                "has_mysql_knowledge": true
            }
        },
        {
            "id": "018e55db-e90d-7ea3-b599-47b9fcf1dd4d",
            "first_name": "Test1",
            "last_name": "Testowy4",
            "email": "test@test.pl",
            "job_position": "tester",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "skills": {
                "testing_systems": "testingSystem1, testingSystem2, testingSystem3",
                "reporting_systems": "reportingSystem1, reportingSystem2",
                "has_selenium_knowledge": false
            }
        },
        {
            "id": "018e55dc-0f6d-71d7-870d-3113590ea872",
            "first_name": "Test2",
            "last_name": "Testowy5",
            "email": "test@test.pl",
            "job_position": "tester",
            "description": "",
            "skills": {
                "testing_systems": "testingSystem1",
                "reporting_systems": "reportingSystem1, reportingSystem2, reportingSystem3",
                "has_selenium_knowledge": true
            }
        },
        {
            "id": "018e55dc-2a23-75d5-9b7d-2549cf5d62f6",
            "first_name": "Test3",
            "last_name": "Testowy6",
            "email": "test@test.pl",
            "job_position": "tester",
            "description": "",
            "skills": {
                "testing_systems": "testingSystem1, testingSystem2",
                "reporting_systems": "reportingSystem1",
                "has_selenium_knowledge": true
            }
        },
        {
            "id": "018e55dc-5305-7fd1-9c7b-5dc91133cd59",
            "first_name": "Pm1",
            "last_name": "Testowy7",
            "email": "test@test.pl",
            "job_position": "project-manager",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "skills": {
                "project_methodologies": "projectMethodology1, projectMethodology2",
                "reporting_systems": "reportingSystem1",
                "has_scrum_knowledge": true
            }
        },
        {
            "id": "018e55dc-6e0a-75a9-adcc-565789a20f6f",
            "first_name": "Pm2",
            "last_name": "Testowy8",
            "email": "test@test.pl",
            "job_position": "project-manager",
            "description": "",
            "skills": {
                "project_methodologies": "projectMethodology1, projectMethodology2",
                "reporting_systems": "reportingSystem1",
                "has_scrum_knowledge": true
            }
        },
        {
            "id": "018e55dc-8891-78f4-b684-e1f98ad3fc8b",
            "first_name": "Pm3",
            "last_name": "Testowy9",
            "email": "test@test.pl",
            "job_position": "project-manager",
            "description": "",
            "skills": {
                "project_methodologies": "projectMethodology1, projectMethodology2",
                "reporting_systems": "reportingSystem1",
                "has_scrum_knowledge": false
            }
        }
    ]
    """