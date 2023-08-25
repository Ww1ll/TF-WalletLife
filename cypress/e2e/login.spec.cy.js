/// <reference types="cypress"/>

describe('Efetuar Login', () => {

  beforeEach(() => {
      cy.visit("/login")
      cy.generateFixture()
  });

  it('validar efetuar login com sucesso', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.email, data.senha)
    })
  })

})