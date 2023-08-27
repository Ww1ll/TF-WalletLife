Cypress.Commands.add('cadastrarUsuario', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})

Cypress.Commands.add('cadastrarUsuarioSemSenha', (nome, email, dataNascimento, cpf) => {
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#dateBith').type(dataNascimento)
    cy.get('#cpf').type(cpf)
    cy.get('.sc-jSwlEQ').click()
})