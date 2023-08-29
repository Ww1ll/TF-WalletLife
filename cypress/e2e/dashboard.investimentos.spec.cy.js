/// <references types="cypress"/>

let btnAdicionarInvestimento = '.sc-bBbNsw'
let textConfirmacaoCadastroInvestimento = '.Toastify__toast-body > :nth-child(2)'
let campoPesquisarInvestimento = '.sc-cwKisF'
let btnPesquisarInvestimento = '.sc-lltjXc'
let textDescricaoInvestimento = '.sc-ezGUZh'
let textConfirmacaoExclusaoInvestimento = '#\\32  > .Toastify__toast-body > :nth-child(2)'
let btnInicio = '[href="/sua-carteira"] > span'
let textInicio = '#root > div > section > h1'
let btnReceitas = '[href="/receitas"] > span'
let textTela = '.sc-bcPKhP'
let btnDespesas = '[href="/despesas"] > span'
let btnMeusDados = '#root > div > header > div.navegacao > span'
let textTelaMeusDados = '#root > div > header > div.sc-ksJisA.dlBcrG > div > div > h3'
let btnSair = '.logout > span'
let btnLogo = 'a > img'

describe('Dashboard - Investimentos', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT036 - Validar adicionar investimento com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()
            cy.get(btnAdicionarInvestimento).click()
        })

        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarInvestimento(data.investimento[0].tipo, data.investimento[0].valor, data.investimento[0].descricao, data.investimento[0].corretora, data.investimento[0].data)
            cy.get(textConfirmacaoCadastroInvestimento).should('contain', 'Investimento adicionado com sucesso!')
        })
    })

    it('CT037 - Validar campo buscar um investimento com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.get(campoPesquisarInvestimento).type(data.investimento[0].corretora)
            cy.get(btnPesquisarInvestimento).click()
            cy.get(textDescricaoInvestimento).should('contain', data.investimento[0].descricao)
        })
    })

    it('CT039 - Validar excluir um investimento com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()
            cy.get(btnAdicionarInvestimento).click()          
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.excluirInvestimento(data.investimento[1].tipo, data.investimento[1].valor, data.investimento[1].descricao, data.investimento[1].corretora, data.investimento[1].data)
            cy.get(textConfirmacaoExclusaoInvestimento).should('contain', 'Transação excluída com sucesso!')
        })
    })

    it('CT040 - Validar botão "Início" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()
            cy.get(btnInicio).click();
            cy.get(textInicio).contains('Olá, ');    
        })
    })

    it('CT052 - Validar botão "Receitas" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento() 
            cy.get(btnReceitas).click();
            cy.get(textTela).contains('RECEITAS');    
        })
    })

    it('CT053 - Validar botão "Despesas" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()  
            cy.get(btnDespesas).click();
            cy.get(textTela).contains('DESPESAS');    
        })
    })

    it('CT054 - Validar botão "Meus dados" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()  
            cy.get(btnMeusDados).click()
            cy.get(textTelaMeusDados).contains("VISUALIZAR DADOS")
        })
    })

    it('CT055 - Validar botão "Sair" na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()      
            cy.get(btnSair).click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT056 - Validar botão Logo na tela Investimentos com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()        
            cy.get(btnLogo).click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT078 - cenário negativo de atualização de investimento', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeInvestimento()      
            cy.get('#root > div > section > div.itens-paginacao > ul > li:nth-child(1) > div > button.sc-bYUneI.kqWAb').click();
            cy.get('#valor').clear().type('-1')
            cy.get('#root > div.sc-ciJnBw.fhBEBW > div.sc-jdkVqZ.bANMmo > form > button').click();
            cy.get("#root > div.sc-bjEwCx.euqxmz > section > div.Toastify > div").should('exist')
        })
    })
})