/// <reference types="cypress"/>
describe("HOME", () => {
    beforeEach(() => {
        cy.visit("/")
    });

    it("CT004 - Validar botão \"entrar na plataforma(1)!\" com sucesso", () => {
        cy.clicarEntrarNaPlataforma1();
    })

    it("CT004 - Validar botão \"entrar na plataforma(2)!\" com sucesso", () => {
        cy.clicarEntrarNaPlataforma2();
    })
})