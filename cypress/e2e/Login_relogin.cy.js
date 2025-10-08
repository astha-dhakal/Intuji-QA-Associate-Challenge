describe('Logout and Re-login', () => {
    it('should log out and log back in with the same credentials', () => {
      cy.visit('https://automationexercise.com');
      cy.contains('Signup / Login').click();
      cy.get('input[name="email"]').first().type('QA engineer@yopmail.com');
      cy.get('input[name="password"]').type('P@ssw0rd');
      cy.get('button[data-qa="login-button"]').click();
  
      // Log out
      cy.contains('Logout').click();
  
      // Log back in
      cy.contains('Signup / Login').click();
      cy.get('input[name="email"]').first().type('1tester@yopmail.com');
      cy.get('input[name="password"]').type('P@ssw0rd');
      cy.get('button[data-qa="login-button"]').click();
  
      // Verify user is logged in
      cy.contains('Logout').should('be.visible');
    });
  });