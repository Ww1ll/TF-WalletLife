describe('Investimentos', () => {

    beforeEach(() => {
        cy.visit("/login")        
    });
  
    it('validar botao "seus investimento" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.efetuarLogin(data.email, data.password)
          })
          cy.get('.navegacao > [href="/investimentos"]').click();
          cy.get('.navegacao > [href="/"]').click()
          cy.get('.sc-ftLKQv > img').should('exist');
          cy.get('[href="/cadastro"] > .sc-jSwlEQ').contains('Cadastro');
          cy.get('.btns-div > [href="/login"] > .sc-jSwlEQ').contains('Login');
      })
       
})