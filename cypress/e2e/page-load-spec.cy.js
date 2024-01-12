describe('the main domain', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('loads the focusrite page', () => {
    cy.url().should('eq', 'https://downloads.focusrite.com/focusrite');
  })
})