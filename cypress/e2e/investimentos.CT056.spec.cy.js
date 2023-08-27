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
            cy.get('#root > div > header > div.navegacao > a:nth-child(4)').click()
            cy.get('#root > div > header > div.logo > a').click()
            cy.get('#header > div > a:nth-child(2) > button').contains('Sua área')
        })
    })
})