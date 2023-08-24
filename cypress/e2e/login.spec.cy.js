/// <reference types="cypress"/>

describe('Efetuar Login', () => {

  beforeEach(() => {
      cy.visit("/login")
  });

  it('validar efetuar login com sucesso', () => {
    cy.fixture('login.data.json').then(data => {
      cy.efetuarLogin(data.email, data.senha)
    })
  })

})