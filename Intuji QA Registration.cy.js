describe('User Registration', () => {
  it('should register a new user successfully', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('Signup / Login').click()

    cy.get('input[name="name"]').type('Test User')
    cy.get('input[data-qa="signup-email"]').type('QAengineer@yopmail.com')
    cy.get('button[data-qa="signup-button"]').click()

    cy.get('#id_gender1').check()
    cy.get('#password').type('P@ssw0rd')

    cy.get('#days').select('1')
    cy.get('#months').select('January')
    cy.get('#years').select('1990')

    cy.get('#first_name').type('Test')
    cy.get('#last_name').type('User 7')
    cy.get('#address1').type('777 Test Street')
    cy.get('#country').select('Australia')
    cy.get('#state').type('New South Wales')
    cy.get('#city').type('Sydney')
    cy.get('#zipcode').type('44600')
    cy.get('#mobile_number').type('9810101010')

    cy.get('button[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
  })
})





