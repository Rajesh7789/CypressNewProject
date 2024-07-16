describe('mouse actin testing', () => {
    it.skip('test 1 right click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//*[.='right click me']").rightclick();
        cy.get('.context-menu-list.context-menu-root').contains('Quit').click();
        cy.xpath("//*[.='Double-Click Me To See Alert']").dblclick();
    });
    it('test 2 for mouse hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top');
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
    });
    it('test 3 using another option using trigger', () => {
        // trigger method 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
        
    });
});