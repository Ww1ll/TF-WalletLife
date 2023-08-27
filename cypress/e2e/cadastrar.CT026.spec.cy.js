
describe('CADASTRAR', () => {

    beforeEach(() => {
        cy.visit("/login")
        //cy.generateFixture()
    });
  
    it('CT026 - Validar botão Logo com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.senha)
            cy.get('.sc-eLSjS > :nth-child(1) > img').click()
            cy.get('.hero-text > .sc-bcPKhP').contains("Suas finanças, nosso compromisso!")
        })
    })
  
  })