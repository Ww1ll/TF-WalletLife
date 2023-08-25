/// <reference types="cypress"/>

describe('Botão receitas', () => {

    beforeEach(() => {
        cy.visit("/login")
        cy.generateFixture()
    });
  
    it('validar botão receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.email, data.senha)
        cy.get('#root > div > header > div > a:nth-child(2)').click()
        cy.get('#root > div > section > div.sc-fEyylQ.fWZaOP > h2').contains('RECEITAS')
      })
    })
  
  })