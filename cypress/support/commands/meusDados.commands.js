let btnNavegarMeusDados = '[data-testid="meus-dados"]'
let textTelaMeusDados = ':nth-child(1) > .sc-bcPKhP'
let botaoEditarDados = "#root > div > header > div.sc-ksJisA.dlBcrG > div.sc-hBpgZr.iORPSN > div > span:nth-child(1)"
let inputNome = "#nome"
let inputEmail = "#email"
let inputSenha = "#senha"
let btnConcluir = "#root > div > header > div.sc-ksJisA.dlBcrG > div.sc-hBpgZr.iORPSN > form > div > button:nth-child(1)"
let avisoDeEditado = "#\\31 "

Cypress.Commands.add('navegarParaTelaMeusDados', () => {    
    cy.get(btnNavegarMeusDados).click();  
    cy.get(textTelaMeusDados).contains('VISUALIZAR DADOS');  
})
Cypress.Commands.add('navegarParaTelaMeusDadosEEditar', (nome, email, senha) => {    
    cy.get(btnNavegarMeusDados).click();  
    cy.get(botaoEditarDados).click()
    cy.fixture('usuario.data.json').then(data => {
        cy.get(inputNome).clear()
        cy.get(inputNome).type(nome)
        cy.get(inputEmail).clear()
        cy.get(inputEmail).type(email)
        cy.get(inputSenha).type(senha)
        cy.get(btnConcluir).click()
        cy.get(avisoDeEditado).contains("Dados atualizados com sucesso!")
    })
})