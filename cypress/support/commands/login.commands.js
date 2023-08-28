let campoEmail = '#email'
let campoSenha = '#password'
let btnLogar = '.sc-jSwlEQ'

Cypress.Commands.add('efetuarLogin', (email, senha) => {
    cy.visit("/login")
    cy.get(campoEmail).clear()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
})
Cypress.Commands.add('loginSemEmail', (senha) => {
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
})
Cypress.Commands.add('loginSemSenha', (email) => {
    cy.get(campoEmail).type(email)
    cy.get(btnLogar).click()
})
