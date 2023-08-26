Cypress.Commands.add('generateFixture', () => {

    var faker = require('faker')
    cy.writeFile('cypress/fixtures/login.data.json', {
      'usuario':Cypress._.times(1, () => {
        return {
          'email':`${faker.internet.email()}`,
          'senha':`${faker.internet.password()}`,
        }
      }),
    })
  })
