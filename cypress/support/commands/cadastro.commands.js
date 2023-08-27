Cypress.Commands.add('cadastrarUsuario', (nome, email, dataNascimento, cpf, senha) => {
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#dateBith').type(dataNascimento)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})

Cypress.Commands.add('cadastrarUsuarioSemNome', (email, dataNascimento, cpf, senha) => {
    cy.get('#email').type(email)
    cy.get('#dateBith').type(dataNascimento)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})

Cypress.Commands.add('cadastrarUsuarioSemEmail', (nome, dataNascimento, cpf, senha) => {
    cy.get('#name').type(nome)
    cy.get('#dateBith').type(dataNascimento)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})

Cypress.Commands.add('cadastrarUsuarioSemDataNascimento', (nome, email, cpf, senha) => {
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(senha)
    cy.get('.sc-jSwlEQ').click()
})

Cypress.Commands.add('cadastrarUsuarioSemCpf', (nome, email, dataNascimento, senha) => {
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#dateBith').type(dataNascimento)
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