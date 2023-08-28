/// <reference types="cypress"/>

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit("/")
        //cy.generateFixture()
    });
  
    it('CT001 - Validar botão "cadastro" com sucesso', () => {
        cy.get('[href="/cadastro"] > .sc-jSwlEQ').click()
        cy.get('.sc-bcPKhP').contains("CADASTRO")
    })
  
  })