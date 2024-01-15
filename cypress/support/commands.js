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

// Custom Cypress command to click on a random clickableTile
Cypress.Commands.add('clickOnRandomClickableTile', () => {
  cy.get('[data-once="clickable-elements-click"]').as('clickableTiles');
  cy.get('@clickableTiles').its('length').then((totalTiles) => {
    cy.getRandomTileIndex(totalTiles).then((randomIndex) => {
      cy.get('@clickableTiles').eq(randomIndex).find('[data-once="clickable-elements-click-event"]').click();
    });
  });
});

// Custom Cypress command to verify the existence of the downloads content
Cypress.Commands.add('verifyDownloadsContentExists', () => {
  cy.get('#block-downloads-content').should('exist');
});

// Custom Cypress command to get a random index within the range of available clickableTiles
Cypress.Commands.add('getRandomTileIndex', (totalTiles) => {
  return Cypress._.random(0, totalTiles - 1);
});


//   // Log the array of links for debugging
//   cy.log('Links Array:', linksArray);

//   // Iterate over the links array and perform verifications
//   linksArray.forEach((link) => {
//     // Visit each link
//     cy.visit(link);

//     // Verify the existence of the element on the current page
//     cy.get('div.software-links:nth-child(1)').should('exist');

//     // Go back to the main page for the next iteration
//     cy.go('back');
//   });




  

