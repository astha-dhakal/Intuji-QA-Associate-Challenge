class Productpage {
  filterWomenDress() {
    cy.contains('Women').click();
    cy.contains('Dress').click();
    cy.url().should('include', 'category_products');
    cy.get('.features_items .productinfo', { timeout: 10000 })
      .should('have.length.greaterThan', 0);
  }

  productCards() {
    return cy.get('.features_items .productinfo');
  }

  openFirstProduct() {
    cy.contains('View Product').first().scrollIntoView().click({ force: true });
    cy.url().should('include', '/product_details/');
  }

  verifyDetails() {
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information h2').should('have.length', 1);
    cy.get('.product-information span').first().invoke('text').should('match', /Rs\.\s*\d+/);
    cy.get('.product-information').contains('Availability').should('be.visible');
  }
}

module.exports = Productpage;
