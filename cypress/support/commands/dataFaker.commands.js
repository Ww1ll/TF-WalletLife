const { pt_BR } = require('faker/lib/locales')
import {format} from 'date-fns';

Cypress.Commands.add('generateFixture', () => {

    var faker = require('faker')
    var fakerBr = require('faker-br')
    faker.locale='pt_BR'
    cy.writeFile('cypress/fixtures/usuario.data.json', {
      'usuario':Cypress._.times(2, () => {
        const pastDate = faker.date.past();
        const formattedPastDate = format(pastDate, 'yyyy-MM-dd');
        return {
          'nome':`${faker.name.firstName()}`,
          'email':`${faker.internet.email()}`,
          'dataNascimento':`${formattedPastDate}`,
          'cpf':`${fakerBr.br.cpf()}`,
          'senha':`${faker.internet.password()}`,
          
        }
      }),
    })
  })