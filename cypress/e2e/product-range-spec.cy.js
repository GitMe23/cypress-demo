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
  })

  it("displays 'Focusrite Downloads'", () => {
    cy.get('#block-downloads-page-title')
      .contains('Focusrite Downloads')
      .should('be.visible');
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
  
  it("displays an image for each product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile() 
        .find('img')
        .should('exist')
        .and('be.visible');
    });
  });

  it("displays a logo or text for every product range", () => {
    productRanges.forEach(productRange => {
      cy.get(`:contains("${productRange}")`)
        .getClickableTile()
        .should('exist')
        .find('.range-logo img, .logo-text.range-logo')
        .should('exist')
        .and('be.visible');
      });
    });
  
    it("allows clicking on an image, logo, or text for every product range", () => {
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

  it('links to the correct downloads page for each product range', () => {
    cy.getProductRanges().then(productRanges => {
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

  it('displays a downloads title for every product range', () => {
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

  it('displays a list of all products within each product range', () => {
    cy.getProductRanges().then(productRanges => {
      productRanges.forEach(productRange => {
        cy.get(`:contains("${productRange}")`)
          .getClickableTile()
          .click();
        
          // impl here

        });
        cy.visit('/');
      });
    });


    describe('Fetching content from a website', () => {
      it.only('should log content of each <span class="visually-hidden">', () => {
        cy.visit('https://downloads.focusrite.com/focusrite/clarett');
    
        // Select all elements with class "visually-hidden"
        cy.get('span.visually-hidden').each(($span) => {
          // Log the text content of each span
          cy.log($span.text());
        });
      });
    });

    
  });


