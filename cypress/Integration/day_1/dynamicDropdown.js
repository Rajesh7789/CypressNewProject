describe('dynamicDroodown test', () => {
    it('test 1 searching for finland', () => {
         
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top');
        cy.get('#autocomplete').type('in');
        cy.get('.ui-menu-item').each(($countryName)=>{

            if($countryName.text()== 'Finland'){
                cy.wrap($countryName).click();         
            }

        });


    });
    it('test 2 with contains', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top');
        cy.get('#autocomplete').type('in');
        cy.get('.ui-menu-item').contains('eq','India').click();
    });
});