
describe('despesas', () => {

    beforeEach(() => {
        cy.visit("/login")
        cy.generateFixture()
    });
  
    it('CT046 - Validar botão Logo com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.senha)
            cy.get('[href="/receitas"] > span').click()
            cy.get('[href="/despesas"] > span').click()
            cy.get('.sc-bcPKhP').contains("DESPESAS")
        })
    })
  
  })