/// <references types="cypress"/>

describe('Botão sair', () => {

    beforeEach(() => {
        cy.visit("/login")
    })

    it('validar botão sair com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('#root > div > header > div > a:nth-child(2)').click()
            cy.get('#root > div > header > div > a.navlink.ativo.active').click()
            cy.get('#root > div > header > div > a.navlink.logout').click()
            cy.get('#header > div > a:nth-child(2) > button').click()
            cy.get('#root > main > form > button').contains('logar')
        })
    })
})