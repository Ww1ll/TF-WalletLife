let btnNavegarTelaInicial = '[href="/sua-carteira"] > span'
let textTelaInicial = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaInicial', () => {    
    cy.get(btnNavegarTelaInicial).click();  
    cy.get(textTelaInicial).contains('Olá, ');  
})

let btnNavegarTelaDespesa = '.navegacao > [href="/despesas"]'
let textTelaDespesa = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaDeDespesa', () => {    
    cy.get(btnNavegarTelaDespesa).click();  
    cy.get(textTelaDespesa).contains('DESPESAS');  
})

let btnNavegarTelaReceita = '.navegacao > [href="/receitas"]'
let textTelaReceita = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaDeReceita', () => {    
    cy.get(btnNavegarTelaReceita).click();  
    cy.get(textTelaReceita).contains('RECEITAS');  
})

let btnNavegarTelaInvestimento = '.navegacao > [href="/investimentos"]'
let textTelaInvestimento = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaDeInvestimento', () => {    
    cy.get(btnNavegarTelaInvestimento).click();  
    cy.get(textTelaInvestimento).contains('INVESTIMENTOS');  
})

let btnNavegarMeusDados = '[data-testid="meus-dados"]'
let textTelaMeusDados = ':nth-child(1) > .sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaMeusDados', () => {    
    cy.get(btnNavegarMeusDados).click();  
    cy.get(textTelaMeusDados).contains('VISUALIZAR DADOS');  
})