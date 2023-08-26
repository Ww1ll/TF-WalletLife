/// <reference types="cypress"/>

describe('Fale Conosco', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFaleConoscoFixture();
    });

    it('Validar Fale Conosco', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConosco(data.nome, data.email, data.descricao)
        })

    })
})

