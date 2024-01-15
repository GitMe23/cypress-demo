// Use Case: As a user, I want to find my product on the downloads page
// 1: The user can navigate to the page of a specific product range
// 2: The user can see the list of all products in the product range

// describe("The 'Focusrite Downloads' page", () => {
//   let productRanges;

//   before(() => {
//     cy.loadProducts().then((products) => {
//       productRanges = Object.keys(products);
//     });
//   });

//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it("displays 'Focusrite Downloads'", () => {
//     cy.get('#block-downloads-page-title')
//       .contains('Focusrite Downloads')
//       .should('be.visible');
//   });

//   it("displays all product ranges in given test data", () => {
//     cy.getPageTiles().then((tiles) => {
//       productRanges.forEach((productRange) => {
//         cy.wrap(tiles).should('include', productRange);
//       });
//     });
//   });

//   it("makes product ranges visible", () => {
//     productRanges.forEach(productRange => {
//       cy.contains('.tile', productRange).should('be.visible');
//     });
//   });

//   it("makes product ranges clickable", () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .should('be.visible');
//     });
//   });

//   it("displays an image for a given product range", () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .find('img')
//         .should('exist')
//         .and('be.visible');
//     });
//   });

//   it("displays a logo or text for a given product range", () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .should('exist')
//         .find('.range-logo img, .logo-text.range-logo')
//         .should('exist')
//         .and('be.visible');
//     });
//   });

//   it("allows clicking on an image, logo, or text", () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .each(($getProductRangeTile) => {
//           cy.wrap($getProductRangeTile)
//             .find('.range-image img')
//             .should('exist')
//             .and('be.visible');
//           cy.wrap($getProductRangeTile)
//             .find('.range-logo img, .logo-text.range-logo')
//             .should('exist')
//             .and('be.visible');
//         });
//     });
//   });
// });


// describe('Navigating to each downloads page (Use Case 1)', () => {
//   let productRanges;

//   before(() => {
//     cy.loadProducts().then((products) => {
//       productRanges = Object.keys(products);
//     });
//   });
  
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it('links to the correct page for each product range', () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .click();
//       cy.getProductRangePath(productRange).then(productRangePath => {
//         cy.url().should('eq', Cypress.config().baseUrl + productRangePath);
//       });
//       cy.visit('/');
//     });
//   });

//   it('displays a downloads title', () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .click();
//       cy.get('#block-downloads-page-title')
//         .contains(productRange + ' Downloads')
//         .should('be.visible');
//       cy.visit('/');
//     });
//   });

//   it('displays a list of all products for a given product range', () => {
//     productRanges.forEach(productRange => {
//       cy.get(`:contains("${productRange}")`)
//         .getClickableTile()
//         .click();
      
//         cy.fixture('../fixtures/test_products.json').then((products) => {
//           const productList = products[productRange].products;
//           // Ensure each product in test fixture is in a tile on page
//           productList.forEach((product) => {
//             cy.get(`:contains("${product}")`).should('be.visible');
//             cy.getPageTiles().should('include', product);
//           });
//         });
      
//       cy.visit('/');
//     });
//   });
  


// **Use Case:** As a user, I want to download the available software for my product

// ### Requirements

// 1. The user can navigate to the page of a specific product and view all available downloads
// 2. All products should have downloadable software for either mac or windows
// 3. The user can download the software for their operating system

describe('Downloading software for a given product (Use Case 2)', () => {
  let productRanges;

  before(() => {
    cy.loadProducts().then((products) => {
      productRanges = Object.keys(products);
    });
  });
  
  beforeEach(() => {
    cy.visit('/');
  });

  // it.only('viewing available downloads for a given product', () => {
  //   productRanges.forEach(productRange => {
  //     cy.get(`:contains("${productRange}")`)
  //       .getClickableTile()
  //       .click();
      
  //       cy.get('[data-once="clickable-elements-click"]').as('clickableTiles');
  //       cy.get('@clickableTiles').each(($tile) => {
  //         cy.wrap($tile)
  //           .click()
  //           .then(() => {
  //             cy.get('div.software-links:nth-child(1)').should('exist');
  //             cy.go('back');
  //           });
  //       });
  //     // After processing all elements in the current range, go back to the main page
  //     cy.visit('/');
  //   });
  // });

  it.only('shows available downloads for any product in any range', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
        cy.clickOnRandomClickableTile();
        cy.verifyDownloadsContentExists();
      cy.visit('/');
    });
  });
  
    it('links to the correct page for each product range', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
      cy.getProductRangePath(productRange).then(productRangePath => {
        cy.url().should('eq', Cypress.config().baseUrl + productRangePath);
      });
      cy.visit('/');
    });
  });
});