
describe('Receitas', () => {

    beforeEach(() => {
        cy.visit("/login")
        cy.generateFixture()
    });
  
    it('CT044 - Validar botão Logo com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.senha)
            cy.get('.navegacao > [href="/receitas"]').click()
            cy.get('img').click()
            cy.get('.hero-text > .sc-bcPKhP').contains("Suas finanças, nosso compromisso!")
        })
    })
  
  })