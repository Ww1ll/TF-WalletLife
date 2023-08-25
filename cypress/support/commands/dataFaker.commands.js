const { pt_BR } = require('faker/lib/locales')

Cypress.Commands.add('generateFixture', () => {

    var faker = require('faker')
    faker.locale='pt_BR'
    cy.writeFile('cypress/fixtures/usuario.data.json', {
      'usuario':Cypress._.times(2, () => {
        return {
          'email':`${faker.internet.email()}`,
          'senha':`${faker.internet.password()}`,
        }
      }),
    })
  })