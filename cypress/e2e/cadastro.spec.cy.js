let toastify = '.Toastify__toast-body > :nth-child(2)'

describe('Pagina Cadastrar usuário', () => {

    beforeEach(() => {
        cy.visit("/cadastro")        
        cy.generateFixture();
    });
  
    it('CT009 - Validar cadastrar usuário com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
          cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
          cy.get(toastify).should('contain', 'Usuário cadastrado com sucesso!')
        })
    })

    it('CT010.1 - Validar cadastrar usuário sem nome', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.cadastrarUsuarioSemNome(data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.get(toastify).should('contain', 'É necessário preencher todos os campos!')
      })
    })
  
    it('CT010.2 - Validar cadastrar usuário sem e-mail', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.cadastrarUsuarioSemEmail(data.usuario[0].nomeCompleto, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.get(toastify).should('contain', 'É necessário preencher todos os campos!')
      })
    })
  
    it('CT010.3 - Validar cadastrar usuário sem data de nascimento', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.cadastrarUsuarioSemDataNascimento(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].cpf, data.usuario[0].senha)
        cy.get(toastify).should('contain', 'É necessário preencher todos os campos!')
      })
    })
  
    it('CT010.4 - Validar cadastrar usuário sem cpf', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.cadastrarUsuarioSemCpf(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].senha)
        cy.get(toastify).should('contain', 'É necessário preencher todos os campos!')
      })
    })
  
    it('CT010.5 - Validar cadastrar usuário sem senha', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.cadastrarUsuarioSemSenha(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf)
        cy.get(toastify).should('contain', 'É necessário preencher todos os campos!')
      })
    })

    it('CT010.6 - Validar cadastrar usuário já cadastrado', () => {
      cy.fixture('usuario.data.json').then(data => {
        cy.cadastrarUsuario(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
        cy.get(toastify).should('contain', 'Usuário já cadastrado!')
      })
    })

    it('CT011 - Validar botão "faça login" com sucesso', () => {
      cy.clicarBotaoLoginTelaCadastro()
      cy.url().should('eq', 'https://wallet-life.vercel.app/login')
    })

    it('CT013 - Validar botão logo com sucesso', () => {
      cy.clicarBotaoLogoTelaCadastro()
      cy.get('#root > div > div.sc-jrkPcm.biBXhW > div.services-text > h2').contains('Conheça nossos serviços!')
  })
})