/// <reference types="cypress"/>

describe('Validar botão despesas com sucesso', () => {

    beforeEach(() => {
        cy.visit("/")
    });
  
    it('validar botão despesas com sucesso', () => {
      cy.get('#root > div > header > div > a:nth-child(2) > button').click()
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.email, data.senha)
      })
      cy.url().should('eq', 'https://wallet-life.vercel.app/sua-carteira')
      cy.get('#root > div > header > div > a:nth-child(3)').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/despesas')
    })
  
  })