/// <references="cypress"/>

describe('Atualização de Investimento', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT077 - cenário positivo de atualização de investimento', () => {

        cy.fixture('usuario.data.json').then(data => {
            cy.clicarBotaoRegistrar()
            cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.wait(3000)
            cy.efetuarLoginSemMensagem(data.usuario[0].email, data.usuario[0].senha)
        })

        cy.fixture('transacao.data.json').then(data =>{
            let tipo = ["Renda variável", "Renda fixa"]
            let tipoRandom = Math.floor(Math.random() * 2)

            cy.navegarParaTelaDeInvestimento()
            cy.cadastrarInvestimento(tipo[tipoRandom], data.investimento[0].valor, data.investimento[0].descricao, data.investimento[0].corretora, data.investimento[0].data)
            cy.get('#root > div > div > div.sc-iUeHef.SrCsm > div > span').click()

            cy.editarInvestimento(tipo[tipoRandom], data.investimento[1].valor, data.investimento[1].descricao, data.investimento[1].corretora, data.investimento[1].data)
        })
    })
})