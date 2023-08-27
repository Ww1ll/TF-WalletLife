/// <references types="cypress"/>

describe('Dashboard - Investimentos', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT036 - Validar botão "+" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('#root > div > header > div.navegacao > a:nth-child(4)').click()
            cy.get('.sc-fLBbxL').click()
            cy.get('#root > div > div > div > div > h3').contains('ADICIONAR TRANSAÇÃO')
        })
    })

    it('CT040 - Validar botão "Início" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click();  
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');        
            cy.get('[href="/sua-carteira"] > span').click();
            cy.get('#root > div > section > h1').contains('Olá, ');    
        })
    })

    it('CT052 - Validar botão "Receitas" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click();  
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');        
            cy.get('[href="/receitas"] > span').click();
            cy.get('.sc-bcPKhP').contains('RECEITAS');    
        })
    })

    it('CT053 - Validar botão "Despesas" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click();  
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');        
            cy.get('[href="/despesas"] > span').click();
            cy.get('.sc-bcPKhP').contains('DESPESAS');    
        })
    })

    it('CT055 - Validar botão "Sair" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click();  
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');        
            cy.get('.logout > span').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT056 - Validar botão Logo na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click();  
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');        
            cy.get('a > img').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })
})