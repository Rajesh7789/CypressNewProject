describe('orange hrm ', () => {
    it('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.contains('Admin').click();
        cy.get('input[placeholder="Type for hints..."]').type('r');
        cy.get('.oxd-autocomplete-option').contains('Ranga Akunuri').click()
        // cy.get('input[placeholder="Type for hints..."]').should('include','Ranga Akunuri');
        // .each(($name)=>{
        //     if($name.text()=='Ranga Akunuri'){
        //         cy.wrap($name).type('{enter}');
        //     }

        // })
        cy.get('button[type="submit"]').click();

    });
});