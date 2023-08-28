/// <reference types="cypress"/>

describe('Tela Meus dados', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    });
  
    it('CT018 - Validar botão início com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.get('[href="/receitas"] > span').click()
        cy.url().should('eq', 'https://wallet-life.vercel.app/receitas')
        cy.get('[href="/sua-carteira"] > span').click()
        cy.url().should('eq', 'https://wallet-life.vercel.app/sua-carteira')
      })
    })

    it('CT019 - Validar botão receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
        cy.get('[href="/receitas"] > span').click()
        cy.get('.sc-bcPKhP').contains('RECEITAS')
      })
    })

    it('CT020 - Validar botão despesas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
        cy.get('[href="/despesas"] > span').click()
        cy.url().should('eq', 'https://wallet-life.vercel.app/despesas')
      })
    })

    it('CT021 - Validar botão investimentos com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
        cy.get('[href="/investimentos"] > span').click()
        cy.url().should('eq', 'https://wallet-life.vercel.app/investimentos')
      })
    })

    it('CT023 - Validar botão suas receitas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      })
      cy.get('[href="/receitas"] > .card-option').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/receitas')
    })

    it('CT024 - Validar botão suas despesas com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      })
      cy.get('[href="/despesas"] > .card-option').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/despesas')
    })

    it('CT025 - Validar botão seus investimentos com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      })
      cy.get('[href="/investimentos"] > .card-option').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/investimentos')
    })

    it('CT026 - Validar botão Logo com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      })
      cy.get('img').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/')
    })

    it('CT027 - Validar botão sair com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      })
      cy.get('.logout > span').click()
      cy.url().should('eq', 'https://wallet-life.vercel.app/')
    })
})