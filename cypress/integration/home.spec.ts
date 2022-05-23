describe('Home screen', () => {
  it('renders the correct heading', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');
    cy.get('h1').contains('Welcome to Next.js!');
  });
});
