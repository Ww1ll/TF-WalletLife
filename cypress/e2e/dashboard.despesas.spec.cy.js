/// <references types="cypress"/>

let btnAdicionarDespesa = '.sc-bBbNsw'
let btnFecharTelaAdicionarDespesa = '.sc-grXZZQ'
let textDescricaoDespesa = '.sc-ezGUZh'
let campoPesquisarDespesa = '.sc-cwKisF'
let btnPesquisarDespesa = '.sc-lltjXc'
let textConfirmacaoExclusao = '#\\32  > .Toastify__toast-body > :nth-child(2)'
let textConfirmacaoExclusao2 = '.Toastify__toast-body > :nth-child(2)'
let btnInicio = '[href="/sua-carteira"] > span'
let textInicio = '#root > div > section > h1'
let btnReceitas = '[href="/receitas"] > span'
let textTela = '.sc-bcPKhP'
let btnInvestimentos = '[href="/investimentos"] > span'
let btnMeusDados = '#root > div > header > div.navegacao > span'
let telaMeusDados = "#root > div > header > div.sc-ksJisA.dlBcrG > div > form > div > button:nth-child(1)"
let btnLogo = 'a > img'
let btnSair = '.logout > span'

describe('Dashboard Despesas', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT032 - Validar adicionar despesa com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.navegarParaTelaDeDespesa()
            cy.get(btnAdicionarDespesa).click()
        })

        cy.fixture('transacao.data.json').then(data => {
            cy.cadastrarDespesa(data.despesa[0].tipo, data.despesa[0].valor, data.despesa[0].descricao, data.despesa[0].data)
            cy.get(btnFecharTelaAdicionarDespesa).click()
            cy.get(textDescricaoDespesa).should('contain', data.despesa[0].descricao)
        })
    })

    it('CT033 - Validar campo buscar uma despesa com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()         
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.get(campoPesquisarDespesa).type(data.despesa[0].valor - 1)
            cy.get(btnPesquisarDespesa).click()
            cy.get(textDescricaoDespesa).should('contain', data.despesa[0].descricao)
        })
    })

    it('CT035 - Validar excluir uma despesa com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()
            cy.get(btnAdicionarDespesa).click()          
        })
        cy.fixture('transacao.data.json').then(data => {
            cy.excluirDespesa(data.despesa[1].tipo, data.despesa[1].valor, data.despesa[1].descricao, data.despesa[1].data)
            cy.get(textConfirmacaoExclusao2).should('contain', 'Transação excluída com sucesso!')
        })
    })

    it('CT045 - Validar botão "Início" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()      
            cy.get(btnInicio).click();
            cy.get(textInicio).contains('Olá, ');    
        })
    })

    it('CT046 - Validar botão "Receitas" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()      
            cy.get(btnReceitas).click();
            cy.get(textTela).contains('RECEITAS');    
        })
    })

    it('CT047 - Validar botão "Investimentos" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()        
            cy.get(btnInvestimentos).click();
            cy.get(textTela).contains('INVESTIMENTOS');    
        })
    })

    it('CT048 - Validar botão "Meus dados" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()      
            cy.get(btnMeusDados).click();
            cy.get(telaMeusDados).should("exist");
        })
    })

    it('CT049 - Validar botão Logo na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()      
            cy.get(btnLogo).click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT050 - Validar botão "Sair" na tela Despesas com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha, "Olá, " + data.usuario[0].nomeCompleto)
            cy.navegarParaTelaDeDespesa()      
            cy.get(btnSair).click();
            cy.url().should('eq', 'https://wallet-life.vercel.app/')
        })
    })

    it('CT075 - validando atualização de despesa com tipo, valor, descrição e datas válidas', () => {

        cy.fixture('usuario.data.json').then(data => {
            cy.clicarBotaoRegistrar()
            cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.wait(3000)
            cy.efetuarLoginSemMensagem(data.usuario[0].email, data.usuario[0].senha)
        })

        cy.fixture('transacao.data.json').then(data =>{
            let tipo = ["Recorrente", "Única"]
            let tipoRandom = Math.floor(Math.random() * 2)

            cy.navegarParaTelaDeDespesa()
            cy.cadastrarDespesa(tipo[tipoRandom], data.despesa[0].valor, data.despesa[0].descricao, data.despesa[0].data)
            cy.get('#root > div > div.sc-gXCJSa.WkYuL > div > div > span').click()

            cy.editarDespesa(tipo[tipoRandom], data.despesa[1].valor, data.despesa[1].descricao, data.despesa[1].data)
        })
    })

    it('CT076 - Validando a atualização de despesa com valor negativo', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaDeDespesa()      
            cy.get('#root > div > section > div.itens-paginacao > ul > li > div > button.sc-bYUneI.kqWAb').click();
            cy.get('#root > div.sc-gXCJSa.WkYuL > div > form > input[type=number]:nth-child(2)').clear().type('-1')
            cy.get('#root > div.sc-gXCJSa.WkYuL > div > form > button').click();
            cy.get("#root > div.sc-bjEwCx.euqxmz > section > div.Toastify > div").should('exist')
        })
    })
})