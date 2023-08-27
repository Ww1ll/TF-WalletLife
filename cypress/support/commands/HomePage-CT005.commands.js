Cypress.Commands.add('generateFaleConoscoFixture', () => {

    const faker = require('faker')
    cy.writeFile('cypress/fixtures/faleConosco.data.json', {
      'faleConosco':Cypress._.times(1, () => {
        return {
          'nome':`${faker.internet.userName()}`,
          'email':`${faker.internet.email()}`,
          'descricao':`${faker.lorem.paragraph()}`,
        }
      }),
    })
})


Cypress.Commands.add('faleConosco', (nome, email, descricao) => {
    cy.get(':nth-child(2) > .input').type(nome)
    cy.get(':nth-child(3) > .input').type(email)
    cy.get('.textarea').type(descricao)
    cy.get(':nth-child(5) > .sc-jSwlEQ').click()
})
