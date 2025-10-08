class Authpage {
  visitHome() {
    cy.visit('https://automationexercise.com/');
  }

  goToLogin() {
    cy.contains('Signup / Login').click();
  }

  login(email, password) {
    cy.get('input[data-qa="login-email"]').clear().type(email);
    cy.get('input[data-qa="login-password"]').clear().type(password);
    cy.get('button[data-qa="login-button"]').click();
  }

  logoutIfLoggedIn() {
    cy.contains('Logout', { timeout: 2000 }).then(($el) => {
      if ($el.length) cy.wrap($el).click();
    }).catch(() => {});
  }
}

module.exports = Authpage;
