/// <reference types="cypress"/>

describe('Cadastrar sem sucesso', () => {

  beforeEach(() => {
      cy.visit("/cadastro")
      cy.generateFixture()
  });

  it('validar cadastrar usuário sem nome', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.cadastrarUsuarioSemNome(data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
    })
  })

  it('validar cadastrar usuário sem e-mail', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.cadastrarUsuarioSemEmail(data.usuario[0].nome, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
    })
  })

  it('validar cadastrar usuário sem data de nascimento', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.cadastrarUsuarioSemDataNascimento(data.usuario[0].nome, data.usuario[0].email, data.usuario[0].cpf, data.usuario[0].senha)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
    })
  })

  it('validar cadastrar usuário sem cpf', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.cadastrarUsuarioSemCpf(data.usuario[0].nome, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].senha)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
    })
  })

  it('validar cadastrar usuário sem senha', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.cadastrarUsuarioSemSenha(data.usuario[0].nome, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf)
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
    })
  })
})