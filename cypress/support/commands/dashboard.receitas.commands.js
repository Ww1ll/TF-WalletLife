Cypress.Commands.add('clicarBotaoInicioTelaReceitas', () => {    
    cy.get('#root > div > header > div > a:nth-child(2)').click()
    cy.url().should('eq', 'https://wallet-life.vercel.app/receitas')
    cy.get('[href="/sua-carteira"] > span').click()
})
