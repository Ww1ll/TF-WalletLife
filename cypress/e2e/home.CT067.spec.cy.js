/// <reference types="cypress"/>

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture()
    });
  
    it('CT067 - Validar mudança do botão "Login" para "Sua área" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.visit("/login")
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
            cy.get('[data-testid="logo-link-home"]').click()
            cy.get('.btns-div > [href="/login"] > .sc-jSwlEQ').should('contain', 'Sua área')
        })
    })
  
  })