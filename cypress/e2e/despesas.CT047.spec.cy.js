
describe('DESPESAS', () => {

    beforeEach(() => {
        cy.visit("/login")
        cy.generateFixture()
    });
  
    it('CT047 - Validar botão "Investimentos" com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.usuario[1].email, data.usuario[1].senha)
            cy.get('[href="/despesas"] > span').click()
            cy.get('[href="/investimentos"] > span').click()
            cy.get('.sc-bcPKhP').contains("INVESTIMENTOS")
        })
    })
  
  })