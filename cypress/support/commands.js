Cypress.Commands.add('getClickableTile', { prevSubject: 'element' }, (subject) => {
  return cy.wrap(subject)
    .parents('[data-once="clickable-elements-click"]');
});

Cypress.Commands.add('getProductRangePath', (productRange) => {
  cy.fixture('../fixtures/test_products.json').then((products) => {
    return products[productRange].path;
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

Cypress.Commands.add('loadProducts', () => {
  return cy.fixture('../fixtures/test_products.json');
});

Cypress.Commands.add('clickOnAnyProductTile', () => {
  cy.get('[data-once="clickable-elements-click"]').as('products');
  cy.get('@products').first().find('[data-once="clickable-elements-click-event"]').click();
});

Cypress.Commands.add('verifyDownloadsContentExists', () => {
  cy.get('body').contains('Software').then(() => {
    cy.get('#block-downloads-content').should('exist');
  });
});

Cypress.Commands.add('verifyMacAndWindowsDownloads', () => {
  cy.verifyDownloadsContentExists()
    .then(($content) => {
      if ($content.text().includes('Software Links')) {
        cy.wrap($content)
          .should('contain', 'Software Links')
          .and('contain', 'Windows')
          .and('contain', 'Mac');
      } else {
        // If the page contains a drop-down instead:
        cy.get('.os-selector [aria-label="operating system"] option[value="windows"]').should('exist');
        cy.get('.os-selector [aria-label="operating system"] option[value="mac"]').should('exist');
      }
    });
});

Cypress.Commands.add('verifyDownloadLink', (downloadLink) => {
  cy.request({
    url: downloadLink,
    method: 'HEAD',
  }).should((response) => {
    // Verify successful request
    expect(response.status).to.eq(200);
    const isExecutableFile = downloadLink.endsWith('.exe');
  });
});

Cypress.Commands.add('verifyDownloads', () => {
  cy.verifyDownloadsContentExists().then(($content) => {
    if ($content.length > 0 && $content.text().includes('Software Links')) {
      cy.get('a:contains("Download")').invoke('attr', 'href').then((downloadLink) => {
        cy.log('Download Link:', downloadLink);
        // TODO verify all versions
        cy.verifyDownloadLink(downloadLink);
      });
    } else {
      // drop-downs:
      cy.get('a:contains("Download")').invoke('attr', 'href').then((downloadLink) => {
        cy.log('Download Link:', downloadLink);
        // TODO verify all versions
        cy.verifyDownloadLink(downloadLink);
      });
    }
  });
});

Cypress.Commands.add('loadProductListFixture', (productRange) => {
  return cy.fixture('../fixtures/test_products.json').then((products) => {
    return products[productRange].products;
  });
});









  

