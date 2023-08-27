Cypress.Commands.add('clicarEntrarNaPlataforma1', () => {
    cy.get('.hero-text > a > .sc-jSwlEQ').click()
})

Cypress.Commands.add('clicarEntrarNaPlataforma2', () => {
    cy.get('.div-btn > a > .sc-jSwlEQ').click()
})