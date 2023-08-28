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
    cy.get(btnFecharTelaCadastroReceita).click()
    cy.get(campoPesquisaReceita).type(valor - 1)
    cy.get(btnpesquisarReceita).click()
    cy.get(btnVisualizarReceita).click()
    cy.get(textTelaConfirmacaoDeletarReceita).should('contain', 'DELETAR TRANSAÇÃO?')
    cy.get(btnDeleteReceita).click()
})

let campoSelectTipoDespesa = 'select'
let campoValorDespesa = '[type="number"]'
let campoDescricaoDespesa = '[type="text"]'
let campoDataDespesa = '[type="date"]'
let btnCadastrarDespesa = '.sc-jSwlEQ'

Cypress.Commands.add('cadastrarDespesa', (tipo, valor, descricao, data) => {
    cy.get(campoSelectTipoDespesa).select('Única')
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

let campoTipoInvestimento = '#tipoInvestimento'
let campoValorInvestimento = '#valor'
let campoDescricaoInvestimento = '#descricao'
let campoCorretoraInvestimento = '#corretora'
let campoDataInvestimento = '#data'
let btnCadastrarInvestimento = '.sc-jSwlEQ'

Cypress.Commands.add('cadastrarInvestimento', (tipo, valor, descricao, corretora, data) => {
    cy.get(campoTipoInvestimento).select('Renda fixa')
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

let btnNavegarTelaDespesa = '.navegacao > [href="/despesas"]'
let textTelaDespesa = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaDeDespesa', () => {    
    cy.get(btnNavegarTelaDespesa).click();  
    cy.get(textTelaDespesa).contains('DESPESAS');  
})

let btnNavegarTelaReceita = '.navegacao > [href="/receitas"]'
let textTelaReceita = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaDeReceita', () => {    
    cy.get(btnNavegarTelaReceita).click();  
    cy.get(textTelaReceita).contains('RECEITAS');  
})

let btnNavegarTelaInvestimento = '.navegacao > [href="/investimentos"]'
let textTelaInvestimento = '.sc-bcPKhP'

Cypress.Commands.add('navegarParaTelaDeInvestimento', () => {    
    cy.get(btnNavegarTelaInvestimento).click();  
    cy.get(textTelaInvestimento).contains('INVESTIMENTOS');  
})