
describe('CADASTRAR', () => {

    beforeEach(() => {
        cy.visit("/cadastro")
        //cy.generateFixture()
    });
  
    it('CT026 - Validar botão Logo com sucesso', () => {
        cy.get('img').click()
        cy.get('.hero-text > .sc-bcPKhP').contains("Suas finanças, nosso compromisso!")
    })
  
  })