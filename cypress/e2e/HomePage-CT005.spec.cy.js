/// <reference types="cypress"/>

describe('Fale Conosco', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('Validar Fale Conosco', () => {
        cy.fixture(usuario.data.json).then(data => {
            cy.faleConosco(data.nome, data.email, data.descricao)
        })

    })
})

