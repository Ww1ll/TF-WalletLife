const { pt_BR } = require('faker/lib/locales')
import {format} from 'date-fns';

Cypress.Commands.add('generateFixture', () => {

  const faker = require('faker');
  const fakerBr = require('faker-br');

  faker.locale = 'pt_BR';

  function generateRandomBirthday() {
    const minYear = 1900; // Defina o ano mínimo desejado
    const maxYear = 2000; // Defina o ano máximo desejado
    
    const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const daysInMonth = new Date(randomYear, randomMonth, 0).getDate();
    const randomDay = String(Math.floor(Math.random() * daysInMonth) + 1).padStart(2, '0');
    
    return `${randomYear}-${randomMonth}-${randomDay}`;
  }
    
  cy.writeFile('cypress/fixtures/usuario.data.json', {
    'usuario':Cypress._.times(1, () => {
      var faker = require('faker')
      var fakerBr = require('faker-br')
      faker.locale='pt_BR'
      cy.writeFile('cypress/fixtures/usuario.data.json', {
        'usuario':Cypress._.times(2, () => {
          const pastDate = faker.date.past();
          const formattedPastDate = format(pastDate, 'yyyy-MM-dd');
          return {
            'email': `${faker.internet.email()}`,
            'senha': `${faker.internet.password()}`,
            'nomeCompleto': `${faker.name.firstName()} ${faker.name.lastName()}`,
            'dataNascimento': `${generateRandomBirthday()}`,
            'cpf': `${fakerBr.br.cpf()}`,
            'nome':`${faker.name.firstName()}`,
            'email':`${faker.internet.email()}`,
            'dataNascimento':`${formattedPastDate}`,
            'cpf':`${fakerBr.br.cpf()}`,
            'senha':`${faker.internet.password()}`,
          
          }
        }),
      })
    })
  })
})