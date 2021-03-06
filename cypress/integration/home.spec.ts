const homeDataTestIds = {
  heading: 'home-heading',
  postList: 'post-list',
  postLink: 'post-card__link',
  randomButton: 'posts__random-button',
};

describe('Home screen', () => {
  it('renders the correct components', () => {
    // Start from the index page
    cy.visit('/');

    cy.url().should('include', '/');
    cy.findByTestId(homeDataTestIds.heading).contains('TIL');
    cy.findByTestId(homeDataTestIds.postList).should('exist');
    cy.findByTestId(homeDataTestIds.randomButton)
      .should('exist')
      .contains('TIL');
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

  context('when clicking on the random button', () => {
    it('navigates to the random post page', () => {
      // Start from the index page
      cy.visit('/');

      // Click on the random button
      cy.findByTestId(homeDataTestIds.randomButton).click();

      cy.url().should('include', '/posts/');
    });
  });
});
