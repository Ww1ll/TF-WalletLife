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

    it('CT071 - Validar excluir conta de usuário com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
        cy.get("#root > div > header > div.navegacao > span").click()
        cy.get("#root > div > header > div.sc-ksJisA.dlBcrG > div.sc-hBpgZr.iORPSN > form > div > button.delete").click()
        cy.get('#root > div > header > div.sc-ksJisA.dlBcrG > div.sc-fnOeiS.kuXGUC > div > div > button.sc-jSwlEQ.dNgWca.btn-delete').click()
        cy.url().should('eq', 'https://wallet-life.vercel.app/')
      })
  })
})