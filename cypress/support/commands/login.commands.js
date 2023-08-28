let campoEmail = '#email'
let campoSenha = '#password'
let btnLogar = '.sc-jSwlEQ'
let textTela = '.sc-bcPKhP'

Cypress.Commands.add('efetuarLogin', (email, senha, msg) => {
    cy.visit("/login")
    cy.get(campoEmail).clear()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
    cy.get(textTela).should('contain', msg)
})
Cypress.Commands.add('loginSemEmail', (senha) => {
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
})
Cypress.Commands.add('loginSemSenha', (email) => {
    cy.get(campoEmail).type(email)
    cy.get(btnLogar).click()
})
