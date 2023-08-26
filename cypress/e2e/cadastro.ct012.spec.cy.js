describe('Pagina Home', () => {

    beforeEach(() => {
        cy.visit("/cadastro")        
    });
  
    it('validar botao "calendario" com sucesso', () => {   
        cy.get('#dateBith').click()
        //cy.contains('Hoje').should('be.visible');           
        //cy.get('').should('be.visible'); 
    })           
})