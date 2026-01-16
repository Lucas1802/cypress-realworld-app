class SendMoneyPage {

    selectorList () {
        const selectors = {
            buttonNewTrasaction: "[data-test='nav-top-new-transaction']",
            selectorTransaction: "[data-test^='user-list-item']",
            selectAmount: "[data-test='transaction-create-amount-input']",
            transactionTitle: "[data-test='transaction-create-description-input']",
            createTransaction: "[data-test='transaction-create-submit-payment']",
            alertSuccess: "[role='alert']",
        }
        return selectors
    }
    accessNewTransaction() {
        cy.get(this.selectorList().buttonNewTrasaction).click()
        cy.url().should('include', '/transaction/new')
    }

    newTransaction (amount, title) {
        cy.get(this.selectorList().selectorTransaction).first().click()
        cy.get(this.selectorList().selectAmount).type(amount)
        cy.get(this.selectorList().transactionTitle).type(title)
        cy.get(this.selectorList().createTransaction).click()
        cy.get(this.selectorList().alertSuccess).should('be.visible').and('contain.text', 'Transaction')
    }
}

export default SendMoneyPage



        