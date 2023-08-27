/// <reference types="cypress"/>

describe('Faça seu cadastro', () => {

    beforeEach(() => {
        cy.visit("/login")
    });

    it('Validar botão Faça seu cadastro', () =>{
        cy.get('strong > a').click()
        cy.get('.sc-bcPKhP').should('contain', 'CADASTRO')
        
    })
})