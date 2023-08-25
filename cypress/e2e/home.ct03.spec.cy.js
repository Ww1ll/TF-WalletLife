describe('Efetuar Login', () => {

    beforeEach(() => {
        cy.visit("https://wallet-life.vercel.app/")        
    });
  
    it('validar botao "Entrar na plataforma!" com sucesso', () => {     
        cy.get('#root > div > div.sc-pqitP.bSzvfc > div.hero-text > a > button').click()           
            cy.get('.sc-bcPKhP').contains('LOGIN')
    })      
   
  
})