/// <reference types="cypress"/>

describe('Validar botão Suas dispesas com sucesso', () => {

    beforeEach(() => {
        cy.visit("/")
    });
  
    it('validar botão suas despesas com sucesso', () => {
      cy.get('#root > div > header > div > a:nth-child(2) > button').click()
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.email, data.senha)
      })
      cy.url().should('eq', 'https://wallet-life.vercel.app/sua-carteira', { timeout: 10000 })
      cy.get('#root > div > header > div > a:nth-child(3)').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/despesas', { timeout: 10000 })
    })
  
  })