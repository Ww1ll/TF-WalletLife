/// <reference types="cypress"/>

describe('Efetuar Login', () => {

  beforeEach(() => {
      cy.visit("/cadastro")
  });

  it('validar cadastrar usuário com sucesso', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.email, data.senha)
    })
  })

})