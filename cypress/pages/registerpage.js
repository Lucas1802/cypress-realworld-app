class RegisterPage {

    selectorList () {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameRegisterField: "[name='username']",
            passwordRegisterField: "[name='password']",
            passwordConfirmField: "[name='confirmPassword']",
            buttonRegisterField: "[type='submit']",
        }
        return selectors
    }

    accessRegisterPage() {
        cy.visit('http://localhost:3000/signup')
    }

    registerUser(firstName, lastName, usernameRegister, passwordRegister,passwordConfirm) {
        cy.get(this.selectorList().firstNameField).type(firstName)
        cy.get(this.selectorList().lastNameField).type(lastName)
        cy.get(this.selectorList().usernameRegisterField).type(usernameRegister) //O sistema permite realizar cadastro utilizando um nome de usuário já existente.
        cy.get(this.selectorList().passwordRegisterField).type(passwordRegister)
        cy.get(this.selectorList().passwordConfirmField).type(passwordConfirm)
        cy.get(this.selectorList().buttonRegisterField).click()
    }

    checkRegisterSucess() {
        cy.url().should('include', '/signin')
        cy.get('[name="username"]').should('be.visible')
    }

    checkRegisterInvalid() {
        cy.get(this.selectorList().buttonRegisterField).click()
        cy.url().should('include', '/signup')
        cy.get(this.selectorList().firstNameField).should('have.attr', 'aria-invalid', 'true')
    }
}

export default RegisterPage