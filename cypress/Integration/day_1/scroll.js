describe('scroll testing in cypress', () => {
    it('test1 ', () => {
        cy.visit('https://www.google.com/');
        cy.get('[title="Search"]').type('masai{enter}');
        cy.scrollTo(0,1000);// x is horizontal and y is vertical
        cy.wait(2000);
        cy.scrollTo(0,4000);
        cy.wait(2000)
        cy.scrollTo(0,-2000)
        cy.wait(2000)
        cy.scrollTo(0,-2000)

        cy.contains('Maasai people').scrollIntoView().wait(2000).click();
    });
});