import { locators } from '../locators'

describe('Create Gallery Page', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.get(locators.login.email).type('test123@gmail.com');
        cy.get(locators.login.password).type('test1234');
        cy.get(locators.login.submitBtn).click();
      

      
    })
    it('Go to create gallery link', () => {
        cy.get(locators.createGallery.createGalleryBtn).click();
    
    
        cy.url().should('include', '/create')
        cy.get(locators.createGallery.headline).should('contain', 'Create Gallery')
    })

    it('Should submit gallery after enter correct data!', () => {
        cy.visit('/create')
     
        cy.get(locators.createGallery.title).type('Moja druga galeryja');
        cy.get(locators.createGallery.description).type('Test descrioptin');
        cy.get(locators.createGallery.images).type('image.jpg');
        cy.get(locators.createGallery.submit).eq(0).click();
       
    });
   

})