/// <references="cypress"/>

describe('Atualização de Despesa', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture()
    })

    it('CT075 - validando atualização de despesa com tipo, valor, descrição e datas válidas', () => {

        cy.fixture('usuario.data.json').then(data => {
            cy.clicarBotaoRegistrar()
            cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
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
})