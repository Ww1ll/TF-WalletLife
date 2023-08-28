/// <references types="cypress"/>

describe('Dashboard - Meus Dados', () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
    })

    it('CT048 - Validar botão "Meus dados" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('#root > main > form > button').click();
            cy.get('#root > div > section > h1').contains('Olá, ');  
            cy.get('#root > div > header > div.navegacao > span').click();  
            cy.get('#root > div > header > div.sc-ksJisA.dlBcrG > div > div > span:nth-child(1)').click();            
        })
    })
})