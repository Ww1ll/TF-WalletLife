Cypress.Commands.add('faleConosco', (nome, email, descricao) => {
    cy.get(':nth-child(2) > .input').type(nome)
    cy.get(':nth-child(3) > .input').type(email)
    cy.get('.textarea').type(descricao)
    cy.get(':nth-child(5) > .sc-jSwlEQ').click()
})

Cypress.Commands.add('faleConoscoSemNome', (email, descricao) => {
  cy.get(':nth-child(3) > .input').type(email)
  cy.get('.textarea').type(descricao)
  cy.get(':nth-child(5) > .sc-jSwlEQ').click()
})

Cypress.Commands.add('faleConoscoSemEmail', (nome, descricao) => {
  cy.get(':nth-child(2) > .input').type(nome)
  cy.get('.textarea').type(descricao)
  cy.get(':nth-child(5) > .sc-jSwlEQ').click()
})

Cypress.Commands.add('faleConoscoSemDescricao', (nome, email) => {
  cy.get(':nth-child(2) > .input').type(nome)
  cy.get(':nth-child(3) > .input').type(email)
  cy.get(':nth-child(5) > .sc-jSwlEQ').click()
})

Cypress.Commands.add('newsletter', (email) => {
  cy.get('.styled-input > .input').type(email)
        cy.get('.styled-input > .sc-jSwlEQ').click()
        cy.get('.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)').should('contain', 'Seu e-mail foi cadastrado!')
})

Cypress.Commands.add('clicarEntrarNaPlataforma1', () => {
  cy.get('.hero-text > a > .sc-jSwlEQ').click()
})

Cypress.Commands.add('clicarEntrarNaPlataforma2', () => {
  cy.get('.div-btn > a > .sc-jSwlEQ').click()
})