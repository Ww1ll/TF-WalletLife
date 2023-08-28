Cypress.Commands.add('cadastrarReceita', (valor, descricao, empresa, banco) => {
    cy.get('#valor').type(valor)
    cy.get('#descricao').type(descricao)
    cy.get('#empresa').type(empresa)
    cy.get('#banco').type(banco)
    cy.get('.sc-jSwlEQ').click()
})

Cypress.Commands.add('excluirReceita', (valor, descricao, empresa, banco) => {
    cy.cadastrarReceita(valor, descricao, empresa, banco)
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Receita adicionada com sucesso!')
            cy.get('.sc-grXZZQ').click()
            cy.get('.sc-cwKisF').type(valor - 1)
            cy.get('.sc-lltjXc').click()
            cy.get(':nth-child(1) > .sc-iJfdHH > .sc-kMbQoj').click()
            cy.get('.sc-ilpitK > :nth-child(1) > .sc-bcPKhP').should('contain', 'DELETAR TRANSAÇÃO?')
            cy.get('.btn-delete').click()
})

Cypress.Commands.add('cadastrarDespesa', (tipo, valor, descricao, data) => {
    cy.get('select').select('Única')
    cy.get('[type="number"]').type(valor)
    cy.get('[type="text"]').type(descricao)
    cy.get('[type="date"]').type(data)
    cy.get('.sc-jSwlEQ').click()
})