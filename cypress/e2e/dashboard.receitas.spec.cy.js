/// <reference types="cypress"/>

describe('Dashboard Receitas', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    });
  
    it('CT018 - Validar botão início com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.clicarBotaoInicioTelaReceitas()
        cy.url().should('eq', 'https://wallet-life.vercel.app/sua-carteira')
      })
    })

    it('CT019 - Validar botão receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
        cy.get('#root > div > header > div > a:nth-child(2)').click()
        cy.get('#root > div > section > div.sc-fEyylQ.fWZaOP > h2').contains('RECEITAS')
      })
    })
})