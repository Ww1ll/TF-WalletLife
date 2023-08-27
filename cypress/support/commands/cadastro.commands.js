Cypress.Commands.add('cadastrarUsuario', (nomeCompleto, email, dataNascimento, cpf, senha) => {
    cy.get('#name').type(nomeCompleto)
    cy.get('#email').type(email)
    cy.get('#dateBith').type(dataNascimento)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})