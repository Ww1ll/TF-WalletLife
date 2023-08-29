let campoSelectTipoDespesa = 'select'
let campoValorDespesa = '[type="number"]'
let campoDescricaoDespesa = '[type="text"]'
let campoDataDespesa = '[type="date"]'
let btnCadastrarDespesa = '.sc-jSwlEQ'

Cypress.Commands.add('cadastrarDespesa', (tipo, valor, descricao, data) => {
    cy.get('#root > div > section > div.sc-hHvkSs.eqZTeR > div > button').click()
    cy.get(campoSelectTipoDespesa).select(tipo)
    cy.get(campoValorDespesa).type(valor)
    cy.get(campoDescricaoDespesa).type(descricao)
    cy.get(campoDataDespesa).type(data)
    cy.get(btnCadastrarDespesa).click()
})

let btnFecharCadastrarDespesa = '.sc-grXZZQ'
let campoPesquisarDespesa = '.sc-cwKisF'
let btnPesquisarDespesa = '.sc-lltjXc'
let btnVisualizarDespesa = ':nth-child(1) > .sc-iJfdHH > .sc-kMbQoj'
let textTelaConfirmacaoDeletarDespesa = '.sc-ilpitK > :nth-child(1) > .sc-bcPKhP'
let btnDeleteDespesa = '.btn-delete'

Cypress.Commands.add('excluirDespesa', (tipo, valor, descricao, data) => {
    cy.cadastrarDespesa(tipo, valor, descricao, data)
        cy.get(btnFecharCadastrarDespesa).click()
        cy.get(campoPesquisarDespesa).type(valor - 1)
        cy.get(btnPesquisarDespesa).click()
        cy.get(btnVisualizarDespesa).click()
        cy.get(textTelaConfirmacaoDeletarDespesa).should('contain', 'DELETAR TRANSAÇÃO?')
        cy.get(btnDeleteDespesa).click()
})

let btnOlho = "#root > div > section > div.itens-paginacao > ul > li > div > button.sc-bYUneI.kqWAb"
let descricao = "#root > div > section > div.itens-paginacao > ul > li > div > p.sc-ezGUZh.OYKMh"

Cypress.Commands.add('editarDespesa', (tipo, valor, desc, data) => {
    cy.get(btnOlho).click()
    cy.get(campoValorDespesa).clear()
    cy.get(campoDescricaoDespesa).clear()
    cy.get(campoSelectTipoDespesa).select(tipo)
    cy.get(campoValorDespesa).type(valor)
    cy.get(campoDescricaoDespesa).type(desc)
    cy.get(campoDataDespesa).type(data)
    cy.get(btnCadastrarDespesa).click()
    cy.get(descricao).contains(desc)
})