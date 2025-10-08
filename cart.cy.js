// beforeEach(() => {
       describe('Cart and Quantity Management', () => {
       it('should add 3 products from Home, remove 1 and update quantity', () => {
      // visit homepage
      cy.visit('https://automationexercise.com');

      // click login
      cy.contains('Signup / Login').click();

      // login with registered credentials
      cy.get('input[data-qa="login-email').type('QAengineer@yopmail.com');
      cy.get('input[data-qa="login-password').type('P@ssw0rd');
      cy.get('button[data-qa="login-button').click();

// login successful
      // cy.contains('Log in as').should('be.visible');

// add first product to the cart
      cy.get('.productinfo.text-center').eq(0).contains('Add to cart').click();
      cy.contains('Continue Shopping').click();

      // add second product to the cart
      cy.get('.productinfo.text-center').eq(1).contains('Add to cart').click();
      cy.contains('Continue Shopping').click();

      // add third product to the cart
      cy.get('.productinfo.text-center').eq(2).contains('Add to cart').click();
      cy.contains('Cart').click();

      // verifying the 3 items in the cart
      cy.get('.cart_description').should('have.length', 3);

      // remove 1 product
      cy.get('.cart_delete a').eq(1).click();
      cy.wait(1000); //giving time to update

      //verifying the 2 products 
      cy.get('.cart_description').should('have.length',2);

      //screenshot
      cy.screenshot(); // Takes full screenshot

    });
//   });
  

});
