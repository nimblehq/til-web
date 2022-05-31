const homeDataTestIds = {
  heading: 'home-heading',
  postList: 'post-list',
};

describe('Home screen', () => {
  it('renders the correct components', () => {
    // Start from the index page
    cy.visit('/');

    cy.url().should('include', '/');
    cy.findByTestId(homeDataTestIds.heading).contains('TIL');
    cy.findByTestId(homeDataTestIds.postList).should('exist');
  });
});
