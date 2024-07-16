///<reference types = "cypress" />



describe( 'test suite -orange HRM',() =>{
    // describe is a block ,where you will write multiple test
    


    it('login test',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get("input[name=username]").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.xpath("//a[normalize-space()='Logout']").click();
        




    });
    // it('facebook login',() =>{
    //     cy.visit('https://www.facebook.com/')
    //     cy.get('#email').type("rajeshkudash007@gmail.com");
    //     cy.get('#pass').type("rajesh@7789");
    //     cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/button[1]').click();

    // });
    // it('xpath login in hiroku', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login');
    //     cy.xpath('//input[@id="username"]').type('admin');
    //     cy.xpath('//input[@id="password"]').type('password1234');
    //     cy.xpath('//i[@class="fa fa-2x fa-sign-in"]').click();
    // });
    

});