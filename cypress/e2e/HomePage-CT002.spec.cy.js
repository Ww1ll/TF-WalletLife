/// <reference types="cypress"/>

describe('Faça Login', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('Validar botão Login', () =>{
        cy.get('.btns-div > [href="/login"] > .sc-jSwlEQ').click()
        cy.get('.sc-bcPKhP').should('contain', 'LOGIN')
        
    })
})