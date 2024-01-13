// Use Case: As a user, I want to find my product on the downloads page
// 1: The user can navigate to the page of a specific product range
// 2: The user can see the list of all products in the product range

describe('Navigating Product Ranges', () => {
  let productRanges;

  before(() => {
    // Fetch product ranges once before all tests
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

  it("displays correct number of product ranges", () => {
    cy.get('[class="tile"]')
      .should('have.length', productRanges.length);
  });

  it("makes all product ranges visible", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`).should('be.visible');
    });
  });
  
  it("makes all product range tiles clickable", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .parents('.tile[data-once="clickable-elements-click"]')
        .should('be.visible')
        .should('have.attr', 'data-once', 'clickable-elements-click');
    });
  });

  it("displays an image for each product range", () => {
      productRanges.forEach(productRange => {
        cy.get(`:contains("${productRange}")`)
          .parents('[data-once="clickable-elements-click"]')
          .each(($clickableElement) => {
            cy.wrap($clickableElement)
              .find('img')
              .should('exist')
              .and('be.visible');
          });
      });
    });
  });
