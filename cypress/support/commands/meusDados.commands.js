let btnNavegarMeusDados = '[data-testid="meus-dados"]'
let textTelaMeusDados = ':nth-child(1) > .sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaMeusDados', () => {    
    cy.get(btnNavegarMeusDados).click();  
    cy.get(textTelaMeusDados).contains('VISUALIZAR DADOS');  
})
