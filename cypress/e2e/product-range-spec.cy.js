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
        .should('be.visible')
    });
  });

  it("displays an image for every product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile() 
        .each(($clickableElement) => {
          cy.wrap($clickableElement)
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
        .should('exist')
        .find('.range-logo img, .logo-text.range-logo')
        .should('exist')
        .and('be.visible');
    });
  });
  
  it("allows clicking on an image, logo, or text for every product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .clickableTile()
        .then($clickableTile => {
          cy.wrap($clickableTile).find('.range-image img').should('exist');
          cy.wrap($clickableTile).find('img').should('exist');
        });
    });
  });

});

// describe('Navigation to Specific Product Range', () => {
//   let productRanges;

//   before(() => {
//     cy.getProductRanges().then((ranges) => {
//       productRanges = ranges;
//     });
//   });

//   beforeEach(() => {
//     cy.visit('/');
//   });

  // it('should navigate to the page of a specific product range', () => {
  //   productRanges.forEach(productRange => {
  //     cy.get(`:contains("${productRange}")`)
  //       .clickableTile()
  //       .click();
  //       cy.url().should('include', `${productRange.replace(/ /g, '-').replace(/\+/g, '').toLowerCase()}`);
  //       cy.visit('/');
  //   });
  // });
// });


