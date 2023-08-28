/// <reference types="cypress"/>

let btnEditar = '.sc-hBpgZr > :nth-child(1) > :nth-child(1)'
let campoNome = '#nome'

describe('Tela Meus dados', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    });

    it('CT042 - Validar botão Editar em meus dados com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.navegarParaTelaMeusDados()
        cy.get(btnEditar).click()
        cy.get(campoNome).should('not.be.disabled')
      })
    })

    it('CT060 - Validar botão meus dados com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
      })
      cy.navegarParaTelaMeusDados()
    })
})