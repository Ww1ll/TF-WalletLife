let campoNome = ':nth-child(2) > .input'
let campoEmail = ':nth-child(3) > .input'
let campoDescricao = '.textarea'
let btnEnviarMensagem = ':nth-child(5) > .sc-jSwlEQ'

Cypress.Commands.add('faleConosco', (nome, email, descricao) => {
    cy.get(campoNome).type(nome)
    cy.get(campoEmail).type(email)
    cy.get(campoDescricao).type(descricao)
    cy.get(btnEnviarMensagem).click()
})

Cypress.Commands.add('faleConoscoSemNome', (email, descricao) => {
  cy.get(campoEmail).type(email)
  cy.get(campoDescricao).type(descricao)
  cy.get(btnEnviarMensagem).click()
})

Cypress.Commands.add('faleConoscoSemEmail', (nome, descricao) => {
  cy.get(campoNome).type(nome)
  cy.get(campoDescricao).type(descricao)
  cy.get(btnEnviarMensagem).click()
})

Cypress.Commands.add('faleConoscoSemDescricao', (nome, email) => {
  cy.get(campoNome).type(nome)
  cy.get(campoEmail).type(email)
  cy.get(btnEnviarMensagem).click()
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