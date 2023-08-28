/// <references types="cypress"/>

describe('Dashboard Receitas', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT028 - Validar adicionar receita com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click()
            cy.get('.sc-bBbNsw').click()
        })

        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarReceita(data.receita[0].valor, data.receita[0].descricao, data.receita[0].empresa, data.receita[0].banco)
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Receita adicionada com sucesso!')
        })
    })

    it('CT029 - Validar campo buscar uma receita com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click()            
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.get('.sc-cwKisF').type(data.receita[0].valor - 1)
            cy.get('.sc-lltjXc').click()
            cy.get('.sc-ezGUZh').should('contain', data.receita[0].descricao)
        })
    })
    
    it('CT031 - Validar excluir uma receita com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click()
            cy.get('.sc-bBbNsw').click()          
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.excluirReceita(data.receita[1].valor, data.receita[1].descricao, data.receita[1].empresa, data.receita[1].banco)
            cy.get('#\\33  > .Toastify__toast-body > :nth-child(2)').should('contain', 'Transação excluída com sucesso!')
        })
    })

    it('CT041.1 - Validar botão "Início" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('[href="/sua-carteira"] > span').click();
            cy.get('#root > div > section > h1').contains('Olá, ');    
        })
    })

    it('CT041.2 - Validar botão "Investimentos" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');
            cy.get('[href="/investimentos"] > span').click();
            cy.get('.sc-bcPKhP').contains('INVESTIMENTOS');    
        })
    })

    it('CT044 - Validar botão Logo na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('a > img').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT057 - Validar botão "Meus dados" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('#root > div > header > div.navegacao > a:nth-child(3)').click()
            cy.get('#root > div > header > div.navegacao > span').click()
            cy.get('#root > div > header > div.sc-ksJisA.dlBcrG > div > div > h3').contains("VISUALIZAR DADOS")
        })
    })

    it('CT058 - Validar botão "Sair" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('.logout > span').click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT059 - Validar botão "Despesas" na tela Receitas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click();  
            cy.get('.sc-bcPKhP').contains('RECEITAS');        
            cy.get('[href="/despesas"] > span').click();
            cy.get('.sc-bcPKhP').contains('DESPESAS');    
        })
    })   

    it('CT066 - Validar cadastrar nova Receita com campo valor zerado', () => {

        const numeroZerado = {
            'valor': 0
        }

        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click() 
            cy.get('.sc-bBbNsw').click() 
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarReceita(numeroZerado.valor, data.receita[0].descricao, data.receita[0].empresa, data.receita[0].banco)
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Receita inválida!')
        })
    })

    it('CT068 - Validar Cadastrar despesa com valor negativo', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click() 
            cy.get('.sc-bBbNsw').click() 
        })

        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarReceita(-10, data.receita[0].descricao, data.receita[0].empresa, data.receita[0].banco)
            cy.get('.sc-hhWzdI > div > .sc-bcPKhP').should('contain', 'ADICIONAR TRANSAÇÃO')
            cy.get('#\\31  > div.Toastify__toast-body > div:nth-child(2)').contains('Receita inválida!')
        })
    })
})