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
    'usuario':Cypress._.times(2, () => {

      faker.locale='pt_BR'
      return {
        'email': `${faker.internet.email()}`,
        'senha': `${faker.internet.password()}`,
        'nomeCompleto': `${faker.name.firstName()} ${faker.name.lastName()}`,
        'dataNascimento': `${generateRandomBirthday()}`,
        'cpf': `${fakerBr.br.cpf()}`          
      }
    }),
  })
})

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