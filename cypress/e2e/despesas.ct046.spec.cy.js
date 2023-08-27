/// <reference types="cypress"/>

describe('Botão receitas', () => {

  beforeEach(() => {
      cy.visit("/login")
      cy.generateFixture()
  });

  it('validar botão receitas na página de despesas', () => {
      cy.efetuarLogin('inazuma@gmail.com', '123456')
      cy.get('[href="/despesas"] > span').click()
      cy.get('.sc-bcPKhP').should('contain', 'DESPESAS')
      cy.get('[href="/receitas"] > span').click()
      cy.get('.sc-bcPKhP').should('contain', 'RECEITAS')
  })

})