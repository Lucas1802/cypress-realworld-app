class LoginPage{
    selectorList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            buttonField: "[type='submit']",
            checkUserNameField: "[data-test='sidenav-username']",
            alertError: "[role='alert']"
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginUser (username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().buttonField).click()
    }

    checkUsernameHome (checkUsername) {
        cy.get(this.selectorList().checkUserNameField).should('contain.text', checkUsername)
        cy.url().should('eq','http://localhost:3000/')
    }

    checkCredentialInvalid() {
        cy.get(this.selectorList().alertError).should('be.visible')
        cy.url().should('include', '/signin')
    }
}

export default LoginPage