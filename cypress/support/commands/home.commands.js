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

let campoEmailNewsletter = '.styled-input > .input'
let btnNewsletter = '.styled-input > .sc-jSwlEQ'

Cypress.Commands.add('newsletter', (email) => {
  cy.get(campoEmailNewsletter).type(email)
  cy.get(btnNewsletter).click()
})