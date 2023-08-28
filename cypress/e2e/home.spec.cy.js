/// <reference types="cypress"/>

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
        cy.generateFaleConoscoFixture();
    });
  
    it('CT001 - Validar botão "cadastro" com sucesso', () => {
        cy.get('[href="/cadastro"] > .sc-jSwlEQ').click()
        cy.get('.sc-bcPKhP').contains("CADASTRO")
    })

    it('CT002 - Validar botão Faça Login com sucesso', () =>{
        cy.get('.btns-div > [href="/login"] > .sc-jSwlEQ').click()
        cy.get('.sc-bcPKhP').should('contain', 'LOGIN')
    })

    it('CT003 - Validar botão "Entrar na plataforma!" com sucesso', () => {     
        cy.get('#root > div > div.sc-pqitP.bSzvfc > div.hero-text > a > button').click()           
            cy.get('.sc-bcPKhP').contains('LOGIN')
    })
    
    it('CT004.1 - Validar botão "entrar na plataforma(1)!" com sucesso', () => {
        cy.clicarEntrarNaPlataforma1();
    })

    it('CT004.2 - Validar botão "entrar na plataforma(2)!" com sucesso', () => {
        cy.clicarEntrarNaPlataforma2();
    })

    it('CT005 - Validar Fale Conosco com sucesso', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConosco(data.faleConosco[0].nome,  data.faleConosco[0].email, data.faleConosco[0].descricao)
            cy.get('.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)').should('contain', 'Sua dúvida foi enviada!')
        })
    })

    it('CT005.1 - Validar Fale Conosco sem nome', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConoscoSemNome(data.faleConosco[0].email, data.faleConosco[0].descricao)
            cy.get('.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
        })
    })

    it('CT005.1 - Validar Fale Conosco sem e-mail', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConoscoSemEmail(data.faleConosco[0].nome, data.faleConosco[0].descricao)
            cy.get('.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
        })
    })

    it('CT005.1 - Validar Fale Conosco sem descricao', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConoscoSemDescricao(data.faleConosco[0].nome, data.faleConosco[0].email)
            cy.get('.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)').should('contain', 'É necessário preencher todos os campos!')
        })
    })

    it('CT006 - Validar botão "Login" no rodapé com sucesso', () => {   

        cy.get('#root > div > footer > div.left-section > a.login').click()           
            cy.get('.sc-bcPKhP').contains('LOGIN').scrollIntoView().should('be.visible');
    })      

    it('CT007 - Validar botão cadastrar com sucesso', () => {
        cy.get('[href="/cadastro"] > .sc-jSwlEQ').click()
        cy.get('.sc-bcPKhP').should('contain', 'CADASTRO')
    })

    it('CT008 - Validar cadastrar e-mail na newsletter com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
          cy.newsletter(data.usuario[0].email)
        })
    })

    it('CT067 - Validar mudança do botão "Login" para "Sua área" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get('.sc-bcPKhP').should('contain', 'Olá,')
            cy.get('[data-testid="logo-link-home"]').click()
            cy.get('.btns-div > [href="/login"] > .sc-jSwlEQ').should('contain', 'Sua área')
        })
    })
})