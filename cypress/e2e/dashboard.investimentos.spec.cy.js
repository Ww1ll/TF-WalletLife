/// <references types="cypress"/>

describe('Dashboard - Investimentos', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT036 - Validar adicionar investimento com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('[href="/investimentos"] > span').click()
            cy.get('.sc-bBbNsw').click()
        })

        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarInvestimento(data.investimento[0].tipo, data.investimento[0].valor, data.investimento[0].descricao, data.investimento[0].corretora, data.investimento[0].data)
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Investimento adicionado com sucesso!')
        })
    })

    it('CT037 - Validar campo buscar um investimento com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click()            
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.get('.sc-cwKisF').type(data.investimento[0].corretora)
            cy.get('.sc-lltjXc').click()
            cy.get('.sc-ezGUZh').should('contain', data.investimento[0].descricao)
        })
    })

    it('CT039 - Validar excluir um investimento com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/investimentos"]').click()
            cy.get('.sc-bBbNsw').click()          
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.excluirInvestimento(data.investimento[1].tipo, data.investimento[1].valor, data.investimento[1].descricao, data.investimento[1].corretora, data.investimento[1].data)
            cy.get('#\\32  > .Toastify__toast-body > :nth-child(2)').should('contain', 'Transação excluída com sucesso!')
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

    it('CT054 - Validar botão "Meus dados" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('#root > div > header > div.navegacao > a:nth-child(4) > span').click()
            cy.get('#root > div > header > div.navegacao > span').click()
            cy.get('#root > div > header > div.sc-ksJisA.dlBcrG > div > div > h3').contains("VISUALIZAR DADOS")
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