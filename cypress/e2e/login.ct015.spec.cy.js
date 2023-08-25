/// <reference types="cypress"/>

describe('Efetuar Login', () => {

  beforeEach(() => {
      cy.visit("/login")
      cy.generateFixture()
  });

  it('validar efetuar login com sucesso', () => {

    //Cadastrar novo usuário com dados faker
    // cy.fixture('usuario.data.json').then(data => {
    // cy.cadastrarUsuario(dadosDoUsuario)
    // cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
    // cy.assertLogado
    // })

      cy.efetuarLogin('inazuma@gmail.com', '123456')
      cy.get('.sc-bcPKhP').should('contain', 'Olá, Fulano')
  })

  

})