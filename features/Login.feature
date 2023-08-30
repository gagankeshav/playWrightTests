Feature: Login

  @invalid_login
  Scenario: Login with invalid credentials
    Given User visits WebApp login page
    And user clicks on Sign In button
    And User enters login username as "<username>"
    And User enters login password as "<password>"
    And Clicks on the Sign in button
    Then User should get error message as "<login_error>"

    Examples:
      | username          | password         | login_error |
      | invalid_username  | invalid_password | Login and/or password are wrong |

  @login
  Scenario: Login with valid credentials
    Given User visits WebApp login page
    And user clicks on Sign In button
    And User enters login username as "username"
    And User enters login password as "password"
    And Clicks on the Sign in button
    Then User should be logged into WebApp