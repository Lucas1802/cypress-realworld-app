class TransactionsPage {
    selectorList () {
        const selectors = {
            navSelectorPersonal: "[data-test='nav-personal-tab']",
            returnTransactions: "[data-test='new-transaction-return-to-transactions']",
            checkListTransactions: "[data-test='transaction-list']",
            navSelectorContacts: "[data-test='nav-contacts-tab']",
            noTransaction: "[data-test='empty-list-header']",
        }
        return selectors
    }
    
    accessMyStatement () {     
        cy.get(this.selectorList().returnTransactions).click()
        cy.get(this.selectorList().navSelectorPersonal).click()
        cy.get(this.selectorList().checkListTransactions).should('be.visible')
        cy.url().should('include', '/personal')
    }

    accessMyStatementContacts () {
        cy.get(this.selectorList().navSelectorContacts).click()
        cy.url().should('include', '/contacts')
        cy.get(this.selectorList().noTransaction).should('be.visible')
    }
}

export default TransactionsPage