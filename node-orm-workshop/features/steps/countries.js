const { Given, When, Then } = require('cucumber');
const assert = require('assert');
var request = require('request');

Given('the url {string}', function (callbacks) {
});

When('I send a GET request to {string} I receive a non empty response', function(callbacks) {
    request('https://restcountries.eu/rest/v2/alpha/col', (err,response, body) => {
    assert.notEqual(body.lenght, 0);
    responseRequest = JSON.parse(body);
    });
});

Then('the response should contain in the {string} propertie the string {string}', function (string, string2) {
    request('https://restcountries.eu/rest/v2/alpha/col', (err,response, body) => {
        assert.equal(JSON.parse(body).name, 'Colombia');
    });
});