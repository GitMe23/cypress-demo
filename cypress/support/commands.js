// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getProductRanges', () => {
    cy.readFile('test_data/focusrite_products_example.json').then((products) => {
        const ranges = Object.keys(products);
        return ranges;
    })
});

Cypress.Commands.add('getClickableTile', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
      .parents('[data-once="clickable-elements-click"]');
});

Cypress.Commands.add('getProductRangePath', (productRange) => {
    return cy.readFile('test_data/focusrite_products_example.json').then((products) => {
      return products[productRange].path;
    });
});
  
  
  

