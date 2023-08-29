/// <references types="cypress"/>

describe('Atualização de despesa', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT069 - Validando atualização de nome, email e senha com sucesso', () => {

        cy.fixture('usuario.data.json').then(data => {
            cy.clicarBotaoRegistrar()
            cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.wait(3000)
            cy.efetuarLoginSemMensagem(data.usuario[0].email, data.usuario[0].senha)
            cy.navegarParaTelaMeusDadosEEditar(data.usuario[1].nomeCompleto, data.usuario[1].email, data.usuario[1].senha)
        })

    })

})