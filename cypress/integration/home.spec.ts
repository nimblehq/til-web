const homeDataTestIds = {
  heading: 'home-heading',
  postList: 'post-list',
  postLink: 'post-card__link',
};

describe('Home screen', () => {
  it('renders the correct components', () => {
    // Start from the index page
    cy.visit('/');

    cy.url().should('include', '/');
    cy.findByTestId(homeDataTestIds.heading).contains('TIL');
    cy.findByTestId(homeDataTestIds.postList).should('exist');
  });

  context('when clicking on a post', () => {
    it('navigates to the post page', () => {
      // Start from the index page
      cy.visit('/');

      // Click on the first post
      cy.findByTestId(homeDataTestIds.postLink).first().click();

      cy.url().should('include', '/posts/');
    });
  });
});
