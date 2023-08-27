describe('Despesas', () => {

    beforeEach(() => {
        cy.visit("/login")        
    });
  
    it('validar botao "seus investimento" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
          })
          cy.get('[href="/despesas"] > span').click();  
          cy.get('.sc-fEyylQ').contains('DESPESAS');        
          cy.get('.sc-idyqAC').should('exist');
          cy.get('[href="/sua-carteira"] > span').click();
          cy.get('.title-card-saldo').should('exist');
          cy.get('#root > div > section > h1').contains('Olá, ');          
          
      })
       
})