/// <references types="cypress"/>

describe('Dashboard Receitas', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT028 - Validar botão "+" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click()
            cy.get('.sc-fLBbxL').click()
            cy.get('#root > div > div > div > div > h3').contains('ADICIONAR TRANSAÇÃO')
        })
    })

    
    it('CT041.1 - Validar botão "Início" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('[href="/sua-carteira"] > span').click();
            cy.get('#root > div > section > h1').contains('Olá, ');    
        })
    })

    it('CT041.2 - Validar botão "Investimentos" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('[href="/investimentos"] > span').click();
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');    
        })
    })

    it('CT044 - Validar botão Logo na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('a > img').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT058 - Validar botão "Sair" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('.logout > span').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT059 - Validar botão "Despesas" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('[href="/despesas"] > span').click();
            cy.get('.sc-bcPKhP').contains('DESPESAS');    
        })
    })  
})