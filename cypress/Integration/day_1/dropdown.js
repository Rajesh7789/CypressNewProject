describe('dropdown test in cypress', () => {
    it('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top');
        
        // handel the dropdown using value;
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
        cy.get('#dropdown-class-example').select('Select').should('have.value','');

        // handel the drop down using text;

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
        cy.get('#dropdown-class-example').select('Select').should('have.value','');

        // handel the dropdown using index;
        cy.get('#dropdown-class-example').select(0).should('have.value','');
        cy.get('#dropdown-class-example').select(1).should('have.value','option1');
        cy.get('#dropdown-class-example').select(2).should('have.value','option2');
        cy.get('#dropdown-class-example').select(3).should('have.value','option3');
        // cy.get('#dropdown-class-example').select(0).should('have.value','');






    });
});