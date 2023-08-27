/// <references types="cypress"/>

describe('Botão "+"', () => {
    
    beforeEach(() => {
        cy.visit("/login")
    })

    it('validar botão "+" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
// 
// 
// 
            cy.efetuarLogin("larissa@teste.com", "123321")
            cy.get('.navegacao > [href="/receitas"]').click()
            cy.get('#root > div > section > div.sc-bjEwCx.gxMsbI > div > button').click()
            cy.get('#root > div > div > div > div > h3').contains('ADICIONAR TRANSAÇÃO')
        })
    })
})