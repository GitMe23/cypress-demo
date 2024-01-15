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
Cypress.Commands.add('clickOnAnyProductTile', () => {
  cy.get('[data-once="clickable-elements-click"]').as('products');
  cy.get('@products').its('length').then((totalTiles) => {
    cy.getAnyProductIndex(totalTiles).then((randomIndex) => {
      cy.get('@products').eq(randomIndex).find('[data-once="clickable-elements-click-event"]').click();
    });
  });
});

// Custom Cypress command to verify the existence of the downloads content
Cypress.Commands.add('verifyDownloadsContentExists', () => {
  cy.get('#block-downloads-content').should('exist');
});

Cypress.Commands.add('verifyMacAndWindowsExists', () => {
  cy.get('#block-downloads-content').then(($content) => {
    if ($content.length > 0 && $content.text().includes('Software Links')) {
      // If #block-downloads-content exists and contains 'Software Links'
      cy.wrap($content)
        .should('contain', 'Software Links')
        .and('contain', 'Windows')
        .and('contain', 'Mac');
    } else {
      // If #block-downloads-content does not exist or does not contain 'Software Links'
      cy.log("Doesn't EXIST or doesn't contain 'Software Links'!");
    }
  });
});


// Custom Cypress command to get a random index within the range of available clickableTiles
Cypress.Commands.add('getAnyProductIndex', (totalTiles) => {
  return Cypress._.random(0, totalTiles - 1);
});






  

