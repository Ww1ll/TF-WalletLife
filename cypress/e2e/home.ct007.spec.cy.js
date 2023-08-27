/// <reference types="cypress"/>

describe('Botão cadastrar', () => {

  beforeEach(() => {
      cy.visit("/")
  });

  it('validar botão cadastrar', () => {
    cy.get('[href="/cadastro"] > .sc-jSwlEQ').click()
    cy.get('.sc-bcPKhP').should('contain', 'CADASTRO')
  })
})