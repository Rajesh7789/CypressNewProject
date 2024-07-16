describe('practise automation',()=>{

    it('contact us', () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath('//a[normalize-space()="Contact Us"]').click();
        cy.get('#ContactUsFrm_first_name').type('rajesh');
        cy.get('#ContactUsFrm_email').type('rajeshkudash.007@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('why my order is not placed');
        cy.get('button[title="Submit"]').click();
        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]").should('include.text','Your enquiry has been successfully sent to the store owner!');
    });
})