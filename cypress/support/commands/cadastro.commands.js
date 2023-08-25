Cypress.Commands.add('cadastrarUsuario', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})