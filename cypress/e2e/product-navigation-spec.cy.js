// Use Case: As a user, I want to find my product on the downloads page
// 1: The user can navigate to the page of a specific product range
// 2: The user can see the list of all products in the product range

describe('Downloads navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("clearly displays 'Focusrite Downloads'", () => {
    cy.contains('Focusrite Downloads');
  })
  it("displays correct number of Focusrite product ranges", () => {
    cy.getProductRanges().then((productRanges) => {
      cy.get('[class="tile"]').should('have.length', productRanges.length);
  });
})
});
