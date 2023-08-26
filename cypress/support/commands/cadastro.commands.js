import faker from 'faker';
import {format} from 'date-fns';

faker.locale = 'pt_BR';

Cypress.Commands.add('generateFixtureCadastro', () => {
    
    const cpfDigits = Array.from({ length: 9 }, () => faker.datatype.number(9));
    const cpf = `${cpfDigits.join('')}${faker.datatype.number(9)}${faker.datatype.number(9)}`;

    const pastDate = faker.date.past();
    const formattedPastDate = format(pastDate, 'yyyy-MM-dd');

    const userData = {
        'name': `${faker.internet.userName()}`,
        'email': `${faker.internet.email()}`,
        'dateBith': formattedPastDate,
        'cpf': cpf,
        'password': `${faker.internet.password()}`
    };

    cy.writeFile('cypress/fixtures/cadastro.dataGenerator.json', {
        'usuario': userData
    });
})


Cypress.Commands.add('cadastrarUsuario', (name,email,dateBith,cpf,password) => {    
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#dateBith').type(dateBith)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(password)
    cy.get('.sc-jSwlEQ').click()
})