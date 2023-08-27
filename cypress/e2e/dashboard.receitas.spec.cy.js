/// <references types="cypress"/>

describe('Dashboard Receitas', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT028 - Validar botão "+" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('.navegacao > [href="/receitas"]').click()
            cy.get('#root > div > section > div.sc-bjEwCx.gxMsbI > div > button').click()
            cy.get('#root > div > div > div > div > h3').contains('ADICIONAR TRANSAÇÃO')
        })
    })
})