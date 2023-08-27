/// <reference types="cypress"/>

describe('Fale Conosco', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFaleConoscoFixture();
    });

    it('Validar Fale Conosco', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConosco(data.faleConosco[0].nome,  data.faleConosco[0].email, data.faleConosco[0].descricao)
            cy.get('.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)').should('contain', 'Sua dúvida foi enviada!')
        })


    })
})

