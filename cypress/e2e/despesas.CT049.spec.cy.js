
describe('despesas', () => {

    beforeEach(() => {
        cy.visit("/login")
        //cy.generateFixture()
    });
  
    it('CT046 - Validar botão Logo com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.senha)
            cy.get('[href="/despesas"] > span').click()
            cy.get('img').click()
            cy.get('.hero-text > .sc-bcPKhP').contains("Suas finanças, nosso compromisso!")
        })
    })
  
  })