describe('Pagina Home', () => {

    beforeEach(() => {
        cy.visit("https://wallet-life.vercel.app/")        
    });
  
    it('validar botao "Login" no rodape com sucesso', () => {   

        cy.get('#root > div > footer > div.left-section > a.login').click()           
            cy.get('.sc-bcPKhP').contains('LOGIN').scrollIntoView().should('be.visible');
    })           
})