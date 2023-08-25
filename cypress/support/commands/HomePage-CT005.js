Cypress.Commands.add('faleConosco', (nome, email, descricao) => {
    ccy.get(':nth-child(2) > .input').type(nome)
    cy.get(':nth-child(3) > .input').type(email)
    cy.get('.textarea').type(descricao)
    cy.get(':nth-child(5) > .sc-jSwlEQ').click
})