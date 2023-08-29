/// <references="cypress"/>

describe('Meus dados', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT072 - Validar botão cancelar de deletar conta', () => {


        cy.fixture('usuario.data.json').then(data => {
            cy.clicarBotaoRegistrar()
            cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.wait(3000)
            cy.efetuarLoginSemMensagem(data.usuario[0].email, data.usuario[0].senha)

            cy.navegarParaTelaMeusDados()
            cy.navegarParaDeletarContaECancelar()
        })


    })
})