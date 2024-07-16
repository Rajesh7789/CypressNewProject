describe('Testing the radio buttons', () => {
    it('radio button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top');
        cy.get("input[value='radio1']").check()
        .should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.get("input[value='radio2']").check()
        .should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.get("input[value='radio3']").check()
        .should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.get("input[value='radio1']").should('not.be.checked').check()
        .should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.xpath('//Label/input[@type= "checkbox"]').check().should('be.checked');
        cy.xpath('//Label/input[@type= "checkbox"]').uncheck().should('not.be.checked');

    });
});