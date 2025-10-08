class Cartpage {
  addProductByIndex(index) {
    cy.get('.productinfo.text-center').eq(index).contains('Add to cart').scrollIntoView().click({ force: true });
  }

  closeAddModal() {
    cy.get('.close-modal').click({ force: true });
  }

  goToCart() {
    cy.contains('Cart').click();
  }

  cartRows() {
    return cy.get('#cart_info_table tbody tr');
  }

  deleteRowByIndex(index) {
    cy.get('.cart_quantity_delete').eq(index).click({ force: true });
  }

  setFirstRowQty(qty) {
    cy.get('.cart_quantity_input').first().clear().type(String(qty)).blur();
  }
}

module.exports = Cartpage;
