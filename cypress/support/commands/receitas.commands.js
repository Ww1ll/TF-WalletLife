let campoValorReceita = '#valor'
let campoDescricaoReceita = '#descricao'
let campoEmpresaReceita = '#empresa'
let campoBancoReceita = '#banco'
let btnCadastrarReceita = '.sc-jSwlEQ'

Cypress.Commands.add('cadastrarReceita', (valor, descricao, empresa, banco) => {
    cy.get(campoValorReceita).type(valor)
    cy.get(campoDescricaoReceita).type(descricao)
    cy.get(campoEmpresaReceita).type(empresa)
    cy.get(campoBancoReceita).type(banco)
    cy.get(btnCadastrarReceita).click()
})

Cypress.Commands.add('atualizarReceita', (valor, descricao, empresa, banco) => {
    cy.get(campoValorReceita).clear()
    cy.get(campoDescricaoReceita).clear()
    cy.get(campoEmpresaReceita).clear()
    cy.get(campoBancoReceita).clear()

    cy.get(campoValorReceita).type(valor)
    cy.get(campoDescricaoReceita).type(descricao)
    cy.get(campoEmpresaReceita).type(empresa)
    cy.get(campoBancoReceita).type(banco)
    cy.get(btnCadastrarReceita).click()
})

Cypress.Commands.add('atualizarReceitaSemValor', (descricao, empresa, banco) => {
    cy.get(campoValorReceita).clear()
    cy.get(campoDescricaoReceita).clear()
    cy.get(campoEmpresaReceita).clear()
    cy.get(campoBancoReceita).clear()

    cy.get(campoDescricaoReceita).type(descricao, {force: true})
    cy.get(campoEmpresaReceita).type(empresa, {force: true})
    cy.get(campoBancoReceita).type(banco, {force: true})
    cy.get(btnCadastrarReceita).click()
})

Cypress.Commands.add('atualizarReceitaSemDescricao', (valor, empresa, banco) => {
    cy.get(campoValorReceita).clear()
    cy.get(campoDescricaoReceita).clear()
    cy.get(campoEmpresaReceita).clear()
    cy.get(campoBancoReceita).clear()

    cy.get(campoValorReceita).type(valor, {force: true})
    cy.get(campoEmpresaReceita).type(empresa, {force: true})
    cy.get(campoBancoReceita).type(banco, {force: true})
    cy.get(btnCadastrarReceita).click()
})

Cypress.Commands.add('atualizarReceitaSemEmpresa', (valor, descricao, banco) => {
    cy.get(campoValorReceita).clear()
    cy.get(campoDescricaoReceita).clear()
    cy.get(campoEmpresaReceita).clear()
    cy.get(campoBancoReceita).clear()

    cy.get(campoValorReceita).type(valor, {force: true})
    cy.get(campoDescricaoReceita).type(descricao, {force: true})
    cy.get(campoBancoReceita).type(banco, {force: true})
    cy.get(btnCadastrarReceita).click()
})

Cypress.Commands.add('atualizarReceitaSemBanco', (valor, descricao, empresa) => {
    cy.get(campoValorReceita).clear()
    cy.get(campoDescricaoReceita).clear()
    cy.get(campoEmpresaReceita).clear()
    cy.get(campoBancoReceita).clear()

    cy.get(campoValorReceita).type(valor, {force: true})
    cy.get(campoDescricaoReceita).type(descricao, {force: true})
    cy.get(campoEmpresaReceita).type(empresa, {force: true})
    cy.get(btnCadastrarReceita).click()
})

let textConfirmacaoCadastroReceita = '.Toastify__toast-body > :nth-child(2)'
let btnFecharTelaCadastroReceita = '.sc-grXZZQ'
let campoPesquisaReceita = '.sc-cwKisF'
let btnpesquisarReceita = '.sc-lltjXc'
let btnVisualizarReceita = ':nth-child(1) > .sc-iJfdHH > .sc-kMbQoj'
let textTelaConfirmacaoDeletarReceita = '.sc-ilpitK > :nth-child(1) > .sc-bcPKhP'
let btnDeleteReceita = '.btn-delete'

Cypress.Commands.add('excluirReceita', (valor, descricao, empresa, banco) => {
    cy.cadastrarReceita(valor, descricao, empresa, banco)
    cy.get(textConfirmacaoCadastroReceita).should('contain', 'Receita adicionada com sucesso!')
    cy.get(campoPesquisaReceita).type(valor - 1)
    cy.get(btnpesquisarReceita).click()
    cy.get(btnVisualizarReceita).click()
    cy.get(textTelaConfirmacaoDeletarReceita).should('contain', 'DELETAR TRANSAÇÃO?')
    cy.get(btnDeleteReceita).click()
})