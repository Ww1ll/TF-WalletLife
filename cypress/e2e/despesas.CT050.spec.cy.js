describe('Despesas', () => {

    beforeEach(() => {
        cy.visit("/login")        
    });
  
    it('validar botao "Sair" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.usuario[0].email, data.usuario[0].senha)
          })
          cy.get('[href="/despesas"] > span').click();  
          cy.get('.sc-fEyylQ').contains('DESPESAS');        
          cy.get('.sc-idyqAC').should('exist');
          cy.get('.logout > span').click();
          cy.get('.sc-ftLKQv > img').should('exist');
          cy.get('[href="/cadastro"] > .sc-jSwlEQ').contains('Cadastro');
          cy.get('.btns-div > [href="/login"] > .sc-jSwlEQ').contains('Login');      
          
      })
       
})