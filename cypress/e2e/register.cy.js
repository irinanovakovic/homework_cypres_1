describe('Register page - Negative cases', () => {


  const personOne = {
    firstName: "irina",
    lastName:'Novakovic',
    email:'irina.novakovic111@gmail.com',
    password:'12345678',
    confirmedPassword:'12345678',
    terms:true
  }

  it('Checkout button is not confirmed', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type(personOne.firstName)
    cy.get('#last-name').type(personOne.lastName)
    cy.get('#email').type(personOne.email)
    cy.get('#password').type(personOne.password)
    cy.get('#password-confirmation').type(personOne.confirmedPassword)
    cy.get('.btn').click()

    cy.contains('The terms and conditions must be accepted.').should('be.visible') 

  });
   it("Short password", () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type(personOne.firstName)
    cy.get('#last-name').type(personOne.lastName)
    cy.get('#email').type(personOne.email)
    cy.get('#password').type('123')
    cy.get('#password-confirmation').type('123');
   cy.get('[type="checkbox"]').check();
    cy.get('.btn').click();

    cy.contains('The password must be at least 8 characters.').should('be.visible')
  

   })



  it("The password does not match", () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type(personOne.firstName)
    cy.get('#last-name').type(personOne.lastName)
    cy.get('#email').type(personOne.email)
    cy.get('#password').type('12345678')
    cy.get('#password-confirmation').type('12sdfsfsfs3');
   cy.get('[type="checkbox"]').check();
    cy.get('.btn').click();

    cy.contains('The password confirmation does not match.').should('be.visible')
  
   })

  
})

