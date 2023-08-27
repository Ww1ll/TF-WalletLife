describe('Pagina Home', () => {

    beforeEach(() => {
        cy.visit("/cadastro")        
    });
  
    it('validar botao "calendario" com sucesso', () => {   
        cy.get('#dateBith').should('exist').click();
        //cy.get('.calendario-icon').should('be.visible');         
    })           
})