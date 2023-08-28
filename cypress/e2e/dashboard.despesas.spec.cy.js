/// <references types="cypress"/>

describe('Dashboard Despesas', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it.only('CT032 - Validar adicionar despesa com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click()
            cy.get('.sc-bBbNsw').click()
        })

        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarDespesa(data.despesa[0].tipo, data.despesa[0].valor, data.despesa[0].descricao, data.despesa[0].data)
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Despesa adicionada com sucesso!')

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

    it('CT048 - Validar botão "Meus dados" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/despesas"]').click();  
            cy.get('.sc-bcPKhP').contains('DESPESAS');        
            cy.get('#root > div > header > div.navegacao > span').click();
            cy.get("#root > div > header > div.sc-ksJisA.dlBcrG > div > form > div > button:nth-child(1)").should("exist");
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