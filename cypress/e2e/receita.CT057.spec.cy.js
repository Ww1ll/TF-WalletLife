/// <reference types="cypress"/>

describe('Botão "Meus dados"', () => {

    beforeEach(() => {
        cy.visit("/login")
    })

    it('Validar botão "Meus dados" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin("larissa@teste.com", "123321")
            cy.get('#root > div > header > div.navegacao > a:nth-child(3)').click()
            cy.get('#root > div > header > div.navegacao > span').click()
            cy.get('#root > div > header > div.sc-ksJisA.dlBcrG > div > div > h3').contains("VISUALIZAR DADOS")
        })
    })
})