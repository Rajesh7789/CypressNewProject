describe('date picker in cypress', () => {
    it('test1 ', () => {
        cy.visit('https://jqueryui.com/datepicker/');
        cy.frameLoaded('.demo-frame')
        cy.iframe().xpath('//*[@type="text"]').type("07/09/2024{enter}")
    });
});