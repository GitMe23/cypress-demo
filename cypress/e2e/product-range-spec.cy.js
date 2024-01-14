// Use Case: As a user, I want to find my product on the downloads page
// 1: The user can navigate to the page of a specific product range
// 2: The user can see the list of all products in the product range

describe("The 'Focusrite Downloads' page", () => {
  let productRanges;

  before(() => {
    cy.loadProducts().then((products) => {
      productRanges = Object.keys(products);
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

  it("displays all product ranges in given test data", () => {
    cy.getPageTiles().then((tiles) => {
      productRanges.forEach((productRange) => {
        cy.wrap(tiles).should('include', productRange);
      });
    });
  });

  it("makes product ranges visible", () => {
    productRanges.forEach(productRange => {
      cy.contains('.tile', productRange).should('be.visible');
    });
  });

  it("makes product ranges clickable", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .should('be.visible');
    });
  });

  it("displays an image for a given product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .find('img')
        .should('exist')
        .and('be.visible');
    });
  });

  it("displays a logo or text for a given product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .should('exist')
        .find('.range-logo img, .logo-text.range-logo')
        .should('exist')
        .and('be.visible');
    });
  });

  it("allows clicking on an image, logo, or text", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .each(($getProductRangeTile) => {
          cy.wrap($getProductRangeTile)
            .find('.range-image img')
            .should('exist')
            .and('be.visible');
          cy.wrap($getProductRangeTile)
            .find('.range-logo img, .logo-text.range-logo')
            .should('exist')
            .and('be.visible');
        });
    });
  });
});


describe('Navigating to each downloads page', () => {
  let productRanges;

  before(() => {
    cy.loadProducts().then((products) => {
      productRanges = Object.keys(products);
    });
  });
  
  beforeEach(() => {
    cy.visit('/');
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

  it('displays a downloads title', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
      cy.get('#block-downloads-page-title')
        .contains(productRange + ' Downloads')
        .should('be.visible');
      cy.visit('/');
    });
  });

  it('displays a list of all products for a given product range', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
        
      // make sure every product in range exists and is visible
      // Add your assertions for product visibility here

      cy.visit('/');
    });
  });
});
