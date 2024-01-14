describe("Navigating to each 'Downloads' page", () => {
    let productRanges;
  
    before(() => {
      cy.loadTestProductRanges().then((ranges) => {
        productRanges = ranges;
      });
    });
  
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('should log each tile span name', () => {
      // Use the custom command to get tile names
      cy.getPageTiles().then((tiles) => {
        // Log each element of the array
        tiles.forEach((tile) => {
          cy.log(tile);
            });
            // You can use 'tiles' for further assertions or actions
          });
        });
    });