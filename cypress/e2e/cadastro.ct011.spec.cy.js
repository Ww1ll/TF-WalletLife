/// <reference types="cypress"/>

describe('Validar botão "faça login" com sucesso', () => {

    beforeEach(() => {
        cy.visit("/")
    });
  
    it('Validar botão "faça login" com sucesso', () => {
      cy.get('#root > div > header > div > a:nth-child(1) > button').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/cadastro')
      cy.get('#root > main > form > span > strong > a').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/login')
    })
  
  })