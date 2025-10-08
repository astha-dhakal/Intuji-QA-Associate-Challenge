describe ('Product Browsing and Filtering', () => {
  it('should display product name, price and availability', () => {
    cy.visit('https://automationexercise.com');
    // cy.contains('Products').click();
    // cy.contains('Women').click();
    // cy.contains('Dress').click();
    // cy.get('.productinfo.text-center').should('contain', 'Dress');
  
        // Click on "View Product" for product ID 3
        cy.get('a[href="/product_details/3"]').click();
    
        // Check that the product name is visible. H2-heading inside a container/element with class product-information
        cy.get('.product-information h2').should('be.visible');
    
        // Check that the product price is visible
        cy.get('.product-information span span').should('be.visible');
    
        // Check that availability info is visible
        cy.contains('Availability:').should('be.visible');
      });
      });
