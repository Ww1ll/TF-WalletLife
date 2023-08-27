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

    it('CT007 - Validar botão cadastrar com sucesso', () => {
        cy.get('[href="/cadastro"] > .sc-jSwlEQ').click()
        cy.get('.sc-bcPKhP').should('contain', 'CADASTRO')
    })

    it('CT008 - Validar cadastrar e-mail na newsletter com sucesso', () => {
        cy.fixture('usuario.data.json').then(data => {
          cy.newsletter(data.usuario[0].email)
        })
    })
})