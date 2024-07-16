describe('automation test for the evluation', () => {

    it('assignment 1 for evaluation', () => {
        //Enter the URL: https://automationteststore.com/
        // to visit the website
        cy.visit("https://automationteststore.com/");

        //click on the appearal and assessories
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

        // click on the t-shirts option
        cy.xpath("//a[normalize-space()='T-shirts']").click();

        // click on the third shirts 
        cy.xpath("//div[@class='thumbnails grid row list-inline']//div[3]//div[2]//div[3]//a[1]//i[1]").click();

        // changing the colour and the size etc...
        cy.get('#option350').select('775');// changing the colour of the tshirt
        cy.get('#option351').select('777'); // changing the size of the tshirt
        cy.get('#product_quantity').type('clear') 
        cy.get('#product_quantity').type('0')// changing the quantity of the tshirt


        cy.wait(4000)

        // click on checkout
        cy.get('.cart').click();
        cy.wait(4000)
        // to go the payment page
        cy.get('#cart_checkout1').click();

        // to register as a guest 
        cy.get('#accountFrm_accountguest').check();

        //click on continue
        cy.get('[title="Continue"]').click();

        // fill the for guest login

        cy.get('#guestFrm_firstname').type('Rajesh') // add first name
        cy.get('#guestFrm_lastname').type('Dash') // add last name
        cy.get('#guestFrm_email').type('rajeshkudash@gmail.com') // add email
        cy.get('#guestFrm_country_id').select('India') // add country
        cy.get('#guestFrm_zone_id').select('Orissa') // add zone
        cy.get('#guestFrm_address_1').type('maniabandha') // add address
        cy.get('#guestFrm_city').type('cuttack') // add city
        cy.get('#guestFrm_postcode').type('754035') // add zipcode
        cy.get('[title="Continue"]').click(); // continue to buy
        cy.get('#checkout_btn').click();  // confirm the order 

        // asert the confirmation message
        cy.xpath("(//*[ contains(text(),'Your Order Has Been Processed!')])[2]").should('include.text',' Your Order Has Been Processed!');







    });



});