// Use Case 1

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

  it("makes all product ranges visible", () => {
    productRanges.forEach(productRange => {
      cy.contains('.tile', productRange).should('be.visible');
    });
  });

  it("makes all product ranges clickable", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .should('be.visible');
    });
  });

  it("displays an image for all product ranges", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .find('img')
        .should('exist')
        .and('be.visible');
    });
  });

  it("displays a logo or text for a all product ranges", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .should('exist')
        .find('.range-logo img, .logo-text.range-logo')
        .should('exist')
        .and('be.visible');
    });
  });

  it("allows clicking on an image, logo, or text for all ranges", () => {
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


describe('Navigating to each downloads page (Use Case 1)', () => {
  let productRanges;

  before(() => {
    cy.loadProducts().then((products) => {
      productRanges = Object.keys(products);
    });
  });
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('links to the correct product page for each product range', () => {
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
    cy.loadProductListFixture(productRange).then((productList) => {
      // Ensure every product in test fixture is on the page
      productList.forEach((product) => {
        cy.get(`:contains("${product}")`).should('be.visible');
        cy.getPageTiles().should('include', product);
      });
    });
    cy.visit('/');
  });
});
});


// Use Case 2

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

  it('navigates to a product page and displays all available downloads', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
        cy.clickOnAnyProductTile(); // iterate over all products in real domain
        cy.verifyDownloadsContentExists();
      cy.visit('/');
    });
  });

  it('shows mac and windows downloads for any software', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
        cy.clickOnAnyProductTile(); // iterate over all products in real domain
        cy.verifyMacAndWindowsDownloads();
      cy.visit('/');
    });
  });

  it('links to verified downloadable files', () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .click();
        cy.clickOnAnyProductTile(); // iterate over all products in real domain
        cy.verifyDownloads();
      cy.visit('/');
    });
  });
});
