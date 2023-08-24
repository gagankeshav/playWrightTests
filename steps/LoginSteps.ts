import { Given, When, Then } from '@cucumber/cucumber'
import { LoginPage } from '../pages/LoginPage'
import { expect  } from '@playwright/test';

let loginPage = new LoginPage()

Given('User visits WebApp login page', async function () {
    await loginPage.navigate()
})

Given('user clicks on Sign In button', async function () {
    await loginPage.clickSignInButton()
})

When('User enters login username as {string}', async function (username) {
    await loginPage.enterUsername(username)
})

When('User enters login password as {string}', async function (password) {
    await loginPage.enterPassword(password)
})

When('Clicks on the Sign in button', async function () {
    await loginPage.clickSigninButton()
})

Then('User should get error message as {string}', async function (login_error) {
    await expect(loginPage.errorMessage).toContainText(login_error)
})