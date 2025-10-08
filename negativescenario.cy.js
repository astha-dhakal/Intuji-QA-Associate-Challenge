describe ('negative scenarios',() => {
    it('should show error on wrong credentials', () => {
        cy.visit('https://automationexercise.com');
        cy.contains('Signup / Login').click();
        cy.get('input[data-qa="login-email"]').type('wrong@yopmail.com');
        cy.get('input[data-qa="login-password"]').type('hehehe');
        cy.get('button[data-qa="login-button"]').click();
      
        cy.contains('Your email or password is incorrect!').should('be.visible');
      });
      
});