describe('Dashboard', () => {

    beforeEach(() => {
        cy.visit("/login")        
    });
  
    it('validar botao "seus investimento" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.password)
          })
          cy.get('.navegacao > [href="/investimentos"]').click();
          cy.get('.sc-bcPKhP').should('exist');
          cy.get('.sc-hHvkSs').should($element => {
            const textoElemento = $element.text();
            expect(textoElemento).to.not.be.empty;
      })
    })   
})