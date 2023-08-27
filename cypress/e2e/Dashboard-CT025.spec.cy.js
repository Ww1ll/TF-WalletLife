/// <reference types="cypress"/>

describe('Seus Investimentos', () => {

    beforeEach(() => {
        cy.visit("/login")
    
    });

    it('Validar Seus Investimentos', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('[href="/investimentos"] > .card-option').click()
            cy.get('.sc-bcPKhP').should('contain', 'INVESTIMENTOS')
        })

    })
})

