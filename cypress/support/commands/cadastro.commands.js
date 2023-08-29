let campoNome = '#name'
let campoEmail = '#email'
let campoDataNascimento = '#dateBith'
let campoCpf = '#cpf'
let campoSenha = '#password'
let btnCadastrar = '.sc-jSwlEQ'

Cypress.Commands.add('cadastrarUsuario', (nome,email,dataNascimento,cpf,senha) => {    
    cy.get(campoNome).type(nome)
    cy.get(campoEmail).type(email)
    cy.get(campoDataNascimento).type(dataNascimento)
    cy.get(campoCpf).type(cpf)
    cy.get(campoSenha).type(senha)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarUsuarioSemNome', (email,dataNascimento,cpf,senha) => {    
    cy.get(campoEmail).type(email)
    cy.get(campoDataNascimento).type(dataNascimento)
    cy.get(campoCpf).type(cpf)
    cy.get(campoSenha).type(senha)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarUsuarioSemEmail', (nome, dataNascimento, cpf, senha) => {    
    cy.get(campoNome).type(nome)
    cy.get(campoDataNascimento).type(dataNascimento)
    cy.get(campoCpf).type(cpf)
    cy.get(campoSenha).type(senha)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarUsuarioSemDataNascimento', (nome,email,cpf,senha) => {    
    cy.get(campoNome).type(nome)
    cy.get(campoEmail).type(email)
    cy.get(campoCpf).type(cpf)
    cy.get(campoSenha).type(senha)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarUsuarioSemCpf', (nome,email,dataNascimento,senha) => {    
    cy.get(campoNome).type(nome)
    cy.get(campoEmail).type(email)
    cy.get(campoDataNascimento).type(dataNascimento)
    cy.get(campoSenha).type(senha)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarUsuarioSemSenha', (nome,email,dataNascimento,cpf) => {    
    cy.get(campoNome).type(nome)
    cy.get(campoEmail).type(email)
    cy.get(campoDataNascimento).type(dataNascimento)
    cy.get(campoCpf).type(cpf)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('clicarBotaoLoginTelaCadastro', () => {
    cy.get('#root > main > form > span > strong > a').click()
})

Cypress.Commands.add('clicarBotaoLogoTelaCadastro', () => {
    cy.get('#root > main > div.header > a').click()
})

Cypress.Commands.add('clicarBotaoRegistrar', () => {
    cy.get('#header > div > a:nth-child(1) > button').click()
})