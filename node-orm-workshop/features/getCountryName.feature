Feature: Get the name of a country through an API
Scenario: Get Colombia information and verify that the name is correct
Given the url "https://restcountries.eu/rest/v2/alpha/col"
When I send a GET request to "https://restcountries.eu/rest/v2/alpha/col" I receive a non empty response
Then the response should contain in the "name" propertie the string "Colombia"