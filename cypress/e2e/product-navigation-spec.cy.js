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

  it("displays correct number of Focusrite product ranges", () => {
    cy.get('[class="tile"]')
      .should('have.length', productRanges.length);
  });

  it("makes all product ranges visible and clickable", () => {
    productRanges.forEach(productRange => {
      cy.contains(productRange).should('be.visible');
      cy.contains(productRange)
        .parents('.tile[data-once="clickable-elements-click"]')
        .should('be.visible')
        .should('have.attr', 'data-once', 'clickable-elements-click');
    });
  });
});