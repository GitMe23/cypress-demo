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

// Cypress.Commands.add('getProductRanges', () => {
//     cy.fixture('../fixtures/test_products.json').then((products) => {
//         const ranges = Object.keys(products);
//         return ranges;
//     })
// });

Cypress.Commands.add('getClickableTile', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
      .parents('[data-once="clickable-elements-click"]');
});

Cypress.Commands.add('getProductRangePath', (productRange) => {
    cy.fixture('../fixtures/test_products.json').then((products) => {
      return products[productRange].path;
    });
});
Cypress.Commands.add('getProductList', (productRange) => {
    return cy.fixture('../fixtures/test_products.json').then((productsInRange) => {
      return productsInRange[productRange].products;
    });
  });
  
  
Cypress.Commands.add('getPageTiles', () => {
    const tiles = [];
    cy.get('[data-once="clickable-elements-click-event"]')
      .each(($element) => {
        tiles.push($element.text().trim());
      });
    return cy.wrap(tiles);
  });
  
//   Cypress.Commands.add('loadTestProductRanges', () => {
//     return cy.fixture('../fixtures/test_products.json').then((data) => {
//       return Object.keys(data);
//     });
//   });

  Cypress.Commands.add('loadProducts', () => {
    return cy.fixture('../fixtures/test_products.json');
  });
  

  
    
  

