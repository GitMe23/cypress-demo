describe('the main domain', () => {
  it('loads the focusrite page', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://downloads.focusrite.com/focusrite');
  })
})