describe('web table elements', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[8]/td[2]').should('have.text','Sportsman');
    });
    it('test 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[8]/td[2]').each(($element)=>{
            if ($element.text().includes('man')) {
                
            }
        })
    });
});