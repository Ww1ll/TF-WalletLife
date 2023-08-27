Cypress.Commands.add('efetuarLogin', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})
Cypress.Commands.add('loginSemEmail', (senha) => {
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})
Cypress.Commands.add('loginSemSenha', (email) => {
    cy.get('#email').type(email)
    cy.get('.sc-jSwlEQ').click()
})
