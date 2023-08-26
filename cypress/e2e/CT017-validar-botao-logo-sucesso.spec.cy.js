/// <reference types="cypress"/>

describe('Validar botão da logo com sucesso', () => {

    beforeEach(() => {
        cy.visit("/")
    });
  
    it('validar botão da logo com sucesso', () => {
      cy.get('#root > div > header > div > a:nth-child(2) > button').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/login')
      cy.get('#root > main > div.header > a > img').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/')
    })
  
  })