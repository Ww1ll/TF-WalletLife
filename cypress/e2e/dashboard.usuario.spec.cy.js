/// <reference types="cypress"/>

let btnMeusDados = '#root > div > header > div.navegacao > span'
let telaMeusDados = "#root > div > header > div.sc-ksJisA.dlBcrG > div > form > div > button:nth-child(1)"
let btnSuasReceitas = '[href="/receitas"] > .card-option'
let btnSuasDespesas = '[href="/despesas"] > .card-option'
let btnSeusInvestimentos = '[href="/investimentos"] > .card-option'
let btnLogo = 'a > img'
let btnSair = '.logout > span'

describe('Dashboard Usuário', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    });
  
    it('CT018 - Validar botão início com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.navegarParaTelaDeReceita()
        cy.navegarParaTelaInicial()
      })
    })

    it('CT019 - Validar botão receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
        cy.navegarParaTelaDeReceita()
      })
    })

    it('CT020 - Validar botão despesas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
        cy.navegarParaTelaDeDespesa()
      })
    })

    it('CT021 - Validar botão investimentos com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
        cy.navegarParaTelaDeInvestimento()
      })
    })

    it('CT022 - Validar Meus Dados com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
        cy.get(btnMeusDados).click();
        cy.get(telaMeusDados).should("exist");
      })
    })

    it('CT023 - Validar botão suas receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
      })
      cy.get(btnSuasReceitas).click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/receitas')
    })

    it('CT024 - Validar botão suas despesas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
      })
      cy.get(btnSuasDespesas).click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/despesas')
    })

    it('CT025 - Validar botão seus investimentos com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
      })
      cy.get(btnSeusInvestimentos).click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/investimentos')
    })

    it('CT026 - Validar botão Logo com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
      })
      cy.get(btnLogo).click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/')
    })

    it('CT027 - Validar botão sair com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, 'Olá, ' + data.usuario[0].nomeCompleto)
      })
      cy.get(btnSair).click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/')
    })
})