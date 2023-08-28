/// <references types="cypress"/>

describe('cadastrar receita', () => {

    beforeEach(() => {
        cy.visit("/login")
    })

    it('Cadastrar despesa com valor negativo', () => {

        cy.efetuarLogin("larissa@teste.com", "123321")
        cy.get('#root > div > header > div.navegacao > a:nth-child(2)').click()
        cy.get('#root > div > section > div.sc-hHvkSs.fEVpYY > div > button').click()
        cy.cadastrarReceita(-10, "qualquer", "Qualquer uma", "Tio patinhas")
        cy.get('#\\31 9 > div.Toastify__toast-body > div:nth-child(2)').contains('Receita inválida!')
        
    })
})