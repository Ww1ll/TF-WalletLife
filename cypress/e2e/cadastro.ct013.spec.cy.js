/// <reference types="cypress"/>

describe('botão logo', () => {

    beforeEach(() => {
        cy.visit("/cadastro")
    })

    it('validar botão logo com sucesso', () => {
        cy.get('#root > main > div.header > a').click()
        cy.get('#root > div > div.sc-jrkPcm.biBXhW > div.services-text > h2').contains('Conheça nossos serviços!')
    })
})