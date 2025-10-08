//describe('Checkout Flow with Fake Payment', () => {
    it('should proceed to checkout', () => {
      cy.visit('https://automationexercise.com');
      cy.contains('Signup / Login').click();
      cy.get('input[name="email"]').first().type('QAengineer@yopmail.com');
      cy.get('input[name="password"]').type('P@ssw0rd');
      cy.get('button[data-qa="login-button"]').click();
  
      cy.contains('Cart').click();
      cy.contains('Proceed To Checkout').click();
      cy.get('textarea[name="message"]').should('be.visible').type('Test order message');
      cy.contains('Place Order').click();
      cy.get('input[name="name_on_card"]').type('Test User');
      cy.get('input[name="card_number"]').type('1111222233334444');
      cy.get('input[name="cvc"]').type('123');
      cy.get('input[name="expiry_month"]').type('12');
      cy.get('input[name="expiry_year"]').type('2025');
      cy.contains('Pay and Confirm Order').click();
      cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

      //screenshot
      cy.screenshot(); // Takes full screenshot
    });
  
