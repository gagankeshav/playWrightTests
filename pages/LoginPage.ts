import { pageFixture } from '../hooks/pageFixture';

export class LoginPage {

    get usernameField(){
        return pageFixture.page.locator('#user_login')
    }

    get passwordField(){
        return pageFixture.page.locator('#user_password')
    }

    get signInBtn(){
        return pageFixture.page.locator('#signin_button')
    }

    get signinBtn(){
        return pageFixture.page.getByText('Sign in')
    }

    get rememberMeButton(){
        return pageFixture.page.locator('#user_remember_me')
    }

    get errorMessage(){
        return pageFixture.page.locator('#login_form')
    }

    async navigate() {
        await pageFixture.page.goto('http://zero.webappsecurity.com/index.html')
    }

    async clickSigninButton(){
        await this.signinBtn.click()
    }

    async enterUsername(username: string) {
        await this.usernameField.type(username)
    }

    async enterPassword(password: string) {
        await this.passwordField.type(password)
    }

    async clickSignInButton() {
        await this.signInBtn.click()
    }

    async checkRememberMeButton() {
        await this.rememberMeButton.click()
    }

}