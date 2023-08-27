/// <reference types="cypress"/>

describe.only('Botão receitas', () => {

    beforeEach(() => {
        cy.visit("/login")
    });
  
    it('validar botão receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
        cy.get('#root > div > header > div > a:nth-child(2)').click()
        cy.get('#root > div > section > div.sc-fEyylQ.fWZaOP > h2').contains('RECEITAS')
      })
    })
  
  })