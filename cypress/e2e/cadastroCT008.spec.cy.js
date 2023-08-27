/// <reference types="cypress"/>

describe('Efetuar Cadastro', () => {

  beforeEach(() => {
      cy.visit("/cadastro")
      cy.generateFixture()
  });

  it('CT008 - Validar cadastrar usuário com sucesso', () => {
    cy.fixture('usuario.data.json').then(data => {
      const dataUsuario = data.usuario[0];
      cy.cadastrarUsuario(dataUsuario.nomeCompleto, dataUsuario.email, dataUsuario.dataNascimento, dataUsuario.cpf, dataUsuario.senha)
    })
  })
})