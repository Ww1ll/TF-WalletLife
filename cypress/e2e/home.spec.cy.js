/// <reference types="cypress"/>

let btnCadastro = '[href="/cadastro"] > .sc-jSwlEQ'
let textTela = '.sc-bcPKhP'
let btnFacaLogin = '.btns-div > [href="/login"] > .sc-jSwlEQ'
let btnEntrarNaPlataforma = '#root > div > div.sc-pqitP.bSzvfc > div.hero-text > a > button'
let btnEntrarNaPlataforma2 = '.div-btn > a > .sc-jSwlEQ'
let textConfirmacao = '.styled-input > .Toastify > .Toastify__toast-container > #\\31  > .Toastify__toast-body > :nth-child(2)'
let btnLoginRodape = '#root > div > footer > div.left-section > a.login'
let btnLogo = '[data-testid="logo-link-home"]'

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.generateFixture();
        cy.generateFaleConoscoFixture();
    });
  
    it('CT001 - Validar botão "cadastro" com sucesso', () => {
        cy.get(btnCadastro).click()
        cy.get(textTela).contains("CADASTRO")
    })

    it('CT002 - Validar botão Faça Login com sucesso', () =>{
        cy.get(btnFacaLogin).click()
        cy.get(textTela).should('contain', 'LOGIN')
    })

    it('CT003 - Validar botão "Entrar na plataforma!" com sucesso', () => {     
        cy.get(btnEntrarNaPlataforma).click()
        cy.get(textTela).contains('LOGIN')
    })

    it('CT004 - Validar botão "entrar na plataforma(2)!" com sucesso', () => {
        cy.get(btnEntrarNaPlataforma2).click()
        cy.get(textTela).contains('LOGIN')
    })

    it('CT005 - Validar Fale Conosco com sucesso', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConosco(data.faleConosco[0].nome,  data.faleConosco[0].email, data.faleConosco[0].descricao)
            cy.get(textConfirmacao).should('contain', 'Sua dúvida foi enviada!')
        })
    })

    it('CT005.1 - Validar Fale Conosco sem nome', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConoscoSemNome(data.faleConosco[0].email, data.faleConosco[0].descricao)
            cy.get(textConfirmacao).should('contain', 'É necessário preencher todos os campos!')
        })
    })

    it('CT005.1 - Validar Fale Conosco sem e-mail', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConoscoSemEmail(data.faleConosco[0].nome, data.faleConosco[0].descricao)
            cy.get(textConfirmacao).should('contain', 'É necessário preencher todos os campos!')
        })
    })

    it('CT005.1 - Validar Fale Conosco sem descricao', () => {
        cy.fixture('faleConosco.data.json').then(data => {
            cy.faleConoscoSemDescricao(data.faleConosco[0].nome, data.faleConosco[0].email)
            cy.get(textConfirmacao).should('contain', 'É necessário preencher todos os campos!')
        })
    })

    it('CT006 - Validar botão "Login" no rodapé com sucesso', () => {   
        cy.get(btnLoginRodape).click()           
        cy.get(textTela).contains('LOGIN').scrollIntoView().should('be.visible');
    })      

    it('CT007 - Validar botão cadastrar com sucesso', () => {
        cy.get(btnCadastro).click()
        cy.get(textTela).should('contain', 'CADASTRO')
    })

    it('CT008 - Validar cadastrar e-mail na newsletter com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
          cy.newsletter(data.usuario[0].email)
          cy.get(textConfirmacao).should('contain', 'Seu e-mail foi cadastrado!')
        })
    })

    it('CT067 - Validar mudança do botão "Login" para "Sua área" com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
            cy.criarUsuarioELogarNoSistema(data.usuario[0].nomeCompleto, data.usuario[0].email, data.usuario[0].dataNascimento, data.usuario[0].cpf, data.usuario[0].senha)
            cy.get(textTela).should('contain', 'Olá,')
            cy.get(btnLogo).click()
            cy.get(btnFacaLogin).should('contain', 'Sua área')
        })
    })
})