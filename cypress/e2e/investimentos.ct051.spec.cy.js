describe('Investimentos', () => {

    beforeEach(() => {
        cy.visit("/login")        
    });
  
    it('validar botao "seus investimento" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.password)
          })
          cy.get('.navegacao > [href="/investimentos"]').click();  
          cy.get('#root > div > section > div.sc-fEyylQ.btjKnk > h2').contains('INVESTIMENTOS');        
          cy.get('.sc-idyqAC').should('exist');
          cy.get('[href="/sua-carteira"] > span').click();
          cy.get('.title-card-saldo').should('exist');
          cy.get('#root > div > section > h1').contains('Olá, ');          
          
      })
       
})