describe('alerts handeling', () => {
    it('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top');
        cy.get("#alertbtn").click().should('be.visible')

        // asserting the message inside the alert window;
        // cy.on('window:alert',(alert)=>{
        //     expect(alert).to.equal('Hello , share this practice page and share your knowledge')
        //     return true; // click on the ok button 

        // })

        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(alert2)=>{
            expect(alert2).to.equal('Hello , Are you sure you want to confirm?')
            //return true;
            return false;

        });


    });
});