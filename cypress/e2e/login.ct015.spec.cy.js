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

  it('validar efetuar login com usuário não cadastrado no sistema', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Usuário e/ou senha incorretos')
    })
  })

  it('validar efetuar login sem e-mail', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.loginSemEmail(data.usuario[0].senha)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos')
    })
  })

  it('validar efetuar login sem senha', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.loginSemSenha(data.usuario[0].email)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos')
    })
  })

  it('validar efetuar login com e-mail em formato inválido', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[0].nome, data.usuario[0].senha)
      cy.get('#root > main > form').within(() => {
        cy.get('#email').then($el => $el[0].checkValidity()).should('be.false')
      })
    })
  })

  it.only('validar efetuar login com senha menor que 5 dígitos', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[0].email, '123')
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Usuário e/ou senha incorretos')
    })
  })

})