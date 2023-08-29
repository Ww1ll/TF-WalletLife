let campoTipoInvestimento = '#tipoInvestimento'
let campoValorInvestimento = '#valor'
let campoDescricaoInvestimento = '#descricao'
let campoCorretoraInvestimento = '#corretora'
let campoDataInvestimento = '#data'
let btnCadastrarInvestimento = '.sc-jSwlEQ'
let btnEditarInvestimento = "#root > div > section > div.sc-hHvkSs.fcurvz > div > button"

Cypress.Commands.add('cadastrarInvestimento', (tipo, valor, descricao, corretora, data) => {
    cy.get(btnEditarInvestimento).click()
    cy.get(campoTipoInvestimento).select(tipo)
    cy.get(campoValorInvestimento).type(valor)
    cy.get(campoDescricaoInvestimento).type(descricao)
    cy.get(campoCorretoraInvestimento).type(corretora)
    cy.get(campoDataInvestimento).type(data)
    cy.get(btnCadastrarInvestimento).click()
})

let btnFecharTelaCadastroInvestimento = '.sc-grXZZQ'
let campoPesquisarInvestimento = '.sc-cwKisF'
let btnPesquisarInvestimento = '.sc-lltjXc'
let btnVisualizarInvestimento = ':nth-child(1) > .sc-iJfdHH > .sc-kMbQoj'
let textConfirmacaoCadastroInvestimento = '.sc-ilpitK > :nth-child(1) > .sc-bcPKhP'
let btnDeleteInvestimento = '.btn-delete'

Cypress.Commands.add('excluirInvestimento', (tipo, valor, descricao, corretora, data) => {
    cy.cadastrarInvestimento(tipo, valor, descricao, corretora, data)
        cy.get(btnFecharTelaCadastroInvestimento).click()
        cy.get(campoPesquisarInvestimento).type(corretora)
        cy.get(btnPesquisarInvestimento).click()
        cy.get(btnVisualizarInvestimento).click()
        cy.get(textConfirmacaoCadastroInvestimento).should('contain', 'DELETAR TRANSAÇÃO?')
        cy.get(btnDeleteInvestimento).click()
})

let btnOlho = "#root > div > section > div.itens-paginacao > ul > li > div > button.sc-bYUneI.kqWAb"
let descricao = "#root > div > section > div.itens-paginacao > ul > li > div > p.sc-ezGUZh.OYKMh"

Cypress.Commands.add('editarInvestimento', (tipo, valor, desc, corretora, data) => {
    cy.get(btnOlho).click()
    cy.get(campoValorInvestimento).clear()
    cy.get(campoDescricaoInvestimento).clear()
    cy.get(campoCorretoraInvestimento).clear()
    cy.get(campoTipoInvestimento).select(tipo)
    cy.get(campoValorInvestimento).type(valor)
    cy.get(campoDescricaoInvestimento).type(desc)
    cy.get(campoCorretoraInvestimento).type(corretora)
    cy.get(campoDataInvestimento).type(data)
    cy.get(btnCadastrarInvestimento).click()
    cy.get(descricao).contains(desc)
})