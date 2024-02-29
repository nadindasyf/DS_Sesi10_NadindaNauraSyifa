Feature: Login to SauceDemo

  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I enter valid username and password
    And I click the login button
    Then I should be on the products page
