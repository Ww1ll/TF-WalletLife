/// <reference types="cypress"/>

describe('Efetuar Login', () => {

  beforeEach(() => {
      cy.visit("/login")
  });

  it('validar cadastrar com dados validos e saldo inicial', () => {
    cy.fixture('login.data.json').then(data => {
      cy.efetuarLogin(data.email, data.senha)
      cy.get('#modalText').should('contain', 'criada com sucesso')
      cy.get('#btnCloseModal').click()
      console.log(cy.get('#textBalance > span'))
      cy.get('#textBalance > span').contains('R$ 1.000,00')
    })
  })

})