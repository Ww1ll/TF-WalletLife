/// <reference types="cypress"/>

let textTela = '.sc-bcPKhP'
let textMensagemAoUsuario = '.Toastify__toast-body > :nth-child(2)'
let telaFormulario = '#root > main > form'
let campoEmail = '#email'
let btnFacaSeuCadastro = 'strong > a'
let btnLogo = '#root > main > div.header > a > img'

describe('Efetuar Login', () => {

  beforeEach(() => {
      cy.visit("/login")
      cy.generateFixture()
  });

  it('CT014 - Validar efetuar login com sucesso', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
      cy.get(textTela).should('contain', 'Olá, ' + data.usuario[0].nomeCompleto)
    })
  })

  it('CT015.1 - Validar efetuar login com usuário não cadastrado no sistema', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[1].email, data.usuario[1].senha, 'LOGIN')
      cy.get(textMensagemAoUsuario).should('contain', 'Usuário e/ou senha incorretos')
    })
  })

  it('CT015.2 - Validar efetuar login sem e-mail', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.loginSemEmail(data.usuario[0].senha)
      cy.get(textMensagemAoUsuario).should('contain', 'É necessário preencher todos os campos')
    })
  })

  it('CT015.3 - Validar efetuar login sem senha', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.loginSemSenha(data.usuario[0].email)
      cy.get(textMensagemAoUsuario).should('contain', 'É necessário preencher todos os campos')
    })
  })

  it('CT015.4 - Validar efetuar login com e-mail em formato inválido', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[0].nomeCompleto, data.usuario[0].senha, 'LOGIN')
      cy.get(telaFormulario).within(() => {
        cy.get(campoEmail).then($el => $el[0].checkValidity()).should('be.false')
      })
    })
  })

  it('CT015.5 - Validar efetuar login com senha menor que 5 dígitos', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[0].email, '123', 'LOGIN')
      cy.get(textMensagemAoUsuario).should('contain', 'Usuário e/ou senha incorretos')
    })
  })

  it('CT015.6 - Validar efetuar login com senha incorreta', () => {
    cy.fixture('usuario.data.json').then(data => {
      cy.efetuarLogin(data.usuario[0].email, data.usuario[1].senha, 'LOGIN')
      cy.get(textMensagemAoUsuario).should('contain', 'Usuário e/ou senha incorretos')
    })
  })

  it('CT016 - Validar botão Faça seu cadastro', () =>{
    cy.get(btnFacaSeuCadastro).click()
    cy.get(textTela).should('contain', 'CADASTRO')
    
  })

  it('CT017 - Validar botão da logo com sucesso', () => {
    cy.get(btnLogo).click()
    cy.url().should('eq', 'https://wallet-life.vercel.app/')
  })
})