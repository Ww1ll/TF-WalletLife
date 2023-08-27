/// <references types="cypress"/>

describe('Dashboard Despesas', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT032 - Validar botão "+" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click()
            cy.get('.sc-fLBbxL').click()
            cy.get('#root > div > div > div > div > h3').contains('ADICIONAR TRANSAÇÃO')
        })
    })

    
    it('CT045 - Validar botão "Início" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click();  
            cy.get('.sc-bcPKhP').contains('DESPESAS');        
            cy.get('[href="/sua-carteira"] > span').click();
            cy.get('#root > div > section > h1').contains('Olá, ');    
        })
    })

    it('CT046 - Validar botão "Receitas" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click();  
            cy.get('.sc-bcPKhP').contains('DESPESAS');        
            cy.get('[href="/receitas"] > span').click();
            cy.get('.sc-bcPKhP').contains('RECEITAS');    
        })
    })

    it('CT047 - Validar botão "Investimentos" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click();  
            cy.get('.sc-bcPKhP').contains('DESPESAS');        
            cy.get('[href="/investimentos"] > span').click();
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');    
        })
    })

    it('CT049 - Validar botão Logo na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click();  
            cy.get('.sc-bcPKhP').contains('DESPESAS');        
            cy.get('a > img').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    

    it('CT050 - Validar botão "Sair" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click();  
            cy.get('.sc-bcPKhP').contains('DESPESAS');        
            cy.get('.logout > span').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    
})