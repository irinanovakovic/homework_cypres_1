
import { locators } from '../locators';
import { faker } from '@faker-js/faker';

describe('Register page - Negative cases', () => {
  beforeEach(() => {
    cy.visit('/register');

  })
 

  const personOne = {
    firstName: "irina",
    lastName:'Novakovic',
    email:'irina.novakovic111@gmail.com',
    password:'12345678',
    confirmedPassword:'12345678',
    terms:true
  }

  it('Checkout button is not confirmed', () => {

    const password = faker.internet.password();
   
    cy.get(locators.register.firstName).type(faker.name.firstName())
    cy.get(locators.register.lastName).type(faker.name.lastName())
    cy.get(locators.register.email).type(faker.internet.email())
    cy.get(locators.register.password).type(password)
    cy.get(locators.register.confirmPassword).type(password)
    cy.get(locators.register.submitBtn).click()

    cy.contains('The terms and conditions must be accepted.').should('be.visible') 

  });
   it("Short password", () => {
   
    cy.get(locators.register.firstName).type(faker.name.firstName())
    cy.get(locators.register.lastName).type(faker.name.lastName())
    cy.get(locators.register.email).type(faker.internet.email())
    cy.get(locators.register.password).type('123')
    cy.get(locators.register.confirmPassword).type('123');
   cy.get(locators.register.terms).check();
    cy.get(locators.register.submitBtn).click();

    cy.contains('The password must be at least 8 characters.').should('be.visible')
  

   })



  it("The password does not match", () => {
   
    cy.get(locators.register.firstName).type(faker.name.firstName())
    cy.get(locators.register.lastName).type(faker.name.lastName())
    cy.get(locators.register.email).type(faker.internet.email())
    cy.get(locators.register.password).type('12345678')
    cy.get(locators.register.confirmPassword).type('12sdfsfsfs3');
   cy.get(locators.register.terms).check();
    cy.get(locators.register.submitBtn).click();

    cy.contains('The password confirmation does not match.').should('be.visible')
  
   })

  
})

