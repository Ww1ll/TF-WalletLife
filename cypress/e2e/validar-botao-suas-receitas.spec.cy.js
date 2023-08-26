/// <reference types="cypress"/>

describe('Validar botão suas receitas com sucesso', () => {

    beforeEach(() => {
        cy.visit("/")
    });
  
    it('validar botão suas receitas com sucesso', () => {
      cy.get('#root > div > header > div > a:nth-child(2) > button').click()
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.email, data.senha)
      })
      cy.url().should('eq', 'https://wallet-life.vercel.app/sua-carteira', { timeout: 10000 })
      cy.get('#root > div > header > div > a:nth-child(2)').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/receitas', { timeout: 10000 })
      cy.get('#root > div > section > div.section-dois > a:nth-child(1) > div > span').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/receitas', { timeout: 10000 })
    })
})