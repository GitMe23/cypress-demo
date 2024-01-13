// Use Case: As a user, I want to find my product on the downloads page
// 1: The user can navigate to the page of a specific product range
// 2: The user can see the list of all products in the product range

describe("The 'Focusrite Downloads' page", () => {
  let productRanges;

  before(() => {
    cy.getProductRanges().then((ranges) => {
      productRanges = ranges;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it("displays 'Focusrite Downloads'", () => {
    cy.get('#block-downloads-page-title')
      .contains('Focusrite Downloads')
      .should('be.visible');
  });

  it("has correct number of product ranges", () => {
    cy.get('.tile').should('have.length', productRanges.length);
  });

  it("makes all product ranges visible", () => {
    productRanges.forEach(productRange => {
      cy.contains('.tile', productRange).should('be.visible');
    });
  });
  
  it("makes all product ranges clickable", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile()
        .each(($tile) => {
          cy.wrap($tile).should('be.visible');
        });
    });
  });
  
  it("displays an image for every product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile() 
        .each(($tile) => {
          cy.wrap($tile)
            .find('img')
            .should('exist')
            .and('be.visible');
        });
    });
  });

  it("displays a logo or text for every product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile()
        .each(($tile) => {
          cy.wrap($tile)
            .should('exist')
            .find('.range-logo img, .logo-text.range-logo')
            .should('exist')
            .and('be.visible');
        });
    });
  });
  
  
  it("allows clicking on an image, logo, or text for every product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile()
        .each(($tile) => {
          cy.wrap($tile).then(($clickableTile) => {
            cy.wrap($clickableTile).find('.range-image img').should('exist');
            cy.wrap($clickableTile).find('img').should('exist');
          });
        });
    });
  });
  

describe('Navigation to Specific Product Range', () => {
  let productRanges;

  before(() => {
    cy.getProductRanges().then((ranges) => {
      productRanges = ranges;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it.only('should navigate to a new page for the specific product range', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile()
        .each(($tile) => {
          cy.wrap($tile).click();
          cy.location('href').should('not.eq', '/');
          cy.get('#block-downloads-page-title')
            .contains(productRange + ' Downloads')
            .should('be.visible');
          cy.visit('/');
        });
    });
  });
});
});

  
// describe('Iterate over Tiles and Visit Main Links', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it.only('should visit the link in each tile', () => {
//     cy.get('.tile').each(($tile) => {
//       cy.wrap($tile).get('.main-link')
//       .invoke('attr', 'href')
//       .then((link) => {
//         cy.visit(link);
        
//         // cy.get('#some-element-on-visited-page').should('exist');
        
        
        
//         cy.visit('/');
//       });
//     });
//   });
// });


