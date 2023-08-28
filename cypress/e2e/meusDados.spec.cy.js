/// <reference types="cypress"/>

describe('Tela Meus dados', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    });

    it.only('CT042 - Validar botão Editar em meus dados com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.get('[data-testid="meus-dados"]').click()
        cy.get(':nth-child(1) > .sc-bcPKhP').should('contain', 'VISUALIZAR DADOS')
        cy.get('.sc-hBpgZr > :nth-child(1) > :nth-child(1)').click()
        cy.get('#nome').should('not.be.disabled')
      })
    })

    it('CT060 - Validar botão meus dados com sucesso', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.visit("/login")
        cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
      })
      cy.get('[data-testid="meus-dados"]').click()
      cy.get(':nth-child(1) > .sc-bcPKhP').contains('DADOS')
    })
})