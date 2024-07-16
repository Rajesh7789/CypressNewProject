describe('playing with new window', () => {
    it.skip('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath("//a[@id='opentab']").invoke('removeAttr','target').click();

        // now we have come to the new window and we need to work on that
        // for that we have to use cy.origin locator.
        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.visit('');
            cy.contains('Access all our Courses').click();

        })
        

    });
    it('test 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#openwindow').invoke('removeAttr','onclick').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.visit('');
            cy.contains('Access all our Courses').click();
            cy.wait(2000)
          //  cy.go('back')

        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#name').type('Rajesh kumar dash').should('have.value','Rajesh kumar dash');
    });
});