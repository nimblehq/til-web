const homeDataTestIds = {
  heading: 'home-heading',
};

describe('Home screen', () => {
  it('renders the correct heading', () => {
    // Start from the index page
    cy.visit('/');

    cy.url().should('include', '/');
    cy.findByTestId(homeDataTestIds.heading).contains('Welcome to Next.js!');
  });
});
