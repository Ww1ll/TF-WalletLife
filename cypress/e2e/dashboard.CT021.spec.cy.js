
describe('CADASTRAR', () => {

    beforeEach(() => {
        cy.visit("/login")
        //cy.generateFixture()
    });
  
    it('CT021 - Validar botão "Investimentos" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.senha)
            cy.get('.navegacao > [href="/investimentos"]').click()
            cy.get('.sc-bcPKhP').contains("INVESTIMENTOS")
        })
    })
  
  })