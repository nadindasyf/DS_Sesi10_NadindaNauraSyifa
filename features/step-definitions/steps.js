import { Given, When, Then } from '@wdio/cucumber-framework';

import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

const { Given, When, Then } = require('cucumber');

Given('I am on the SauceDemo login page', () => {
    browser.url('https://www.saucedemo.com/');
});

When('I enter valid username and password', () => {
    $('#user-name').setValue('standard_user');
    $('#password').setValue('secret_sauce');
});

When('I click the login button', () => {
    $('#login-button').click();
});

Then('I should be on the products page', () => {
    expect(browser.getUrl()).to.include('/inventory.html');
    expect($('.title')).toHaveTextContaining('Products');
});


