describe('rahul shetty practise', () => {
    it('test 1 with the i frames', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // step-1 getting the locator for i-frame using frame loaded method()

        cy.frameLoaded('#courses-iframe');
        
        // step-2 to access webelements inside an iframe
        cy.iframe().contains('Blog').click();
    });
});