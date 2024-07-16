describe('practise suit', () => {
    it('navigation using command', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//a[contains(text(),"Free Access to InterviewQues/ResumeAssistance/Mate")]').click();
        cy.go('back')
        cy.go('forward')
        // for reloading
        cy.reload();
    });
});