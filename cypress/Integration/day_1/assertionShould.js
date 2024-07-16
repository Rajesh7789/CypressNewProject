describe('practise assertion', ()=>{

    it('url assertion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //assertion for url
        cy.url('https://rahulshettyacademy.com/AutomationPractice/').should('include','Automation');
        
        //assertion for title of the web page

        cy.title('Practice Page').should('include','Practice Page');

        //assertion for visibility

        cy.get('[name="show-hide"]').should('be.visible');

        cy.get('#hide-textbox').click();
        cy.get('[name="show-hide"]').should('not.be.visible');
        
        //this will type a value and check wheather it is typed or not

        cy.get('#autocomplete').type('wednessday').should('have.value','wednessday');

        // asserting wheather your check box is checked or not
        cy.get('#checkBoxOption1').check().should('be.checked');

        cy.get('#checkBoxOption2').should('not.be.checked'); 

    });



})