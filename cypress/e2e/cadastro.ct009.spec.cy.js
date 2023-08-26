describe('Pagina Home', () => {

    beforeEach(() => {
        cy.visit("/cadastro")        
    });
  
    it('validar cadastrar com sucesso', () => {
        cy.generateFixtureCadastro();
        cy.fixture('cadastro.dataGenerator.json').then(data => {
            console.log(data.usuario.name);
          cy.cadastrarUsuario(data.usuario.name,data.usuario.email,data.usuario.dateBith,data.usuario.cpf,data.usuario.password)
        })
      })    
})