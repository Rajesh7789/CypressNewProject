describe('masai school test suite', () => {

     it('masai school login test', () => {
        cy.visit("https://students.masaischool.com/signin")
        cy.get("#email1").type('rajeshkudash007@gmail.com');
        cy.get("#password1").type('rajesh@7789');
        cy.get("button[type='submit']").click();
        cy.get('.rounded-full.w-10.h-10').click();
        cy.get("div[role='menu']").find("span[class='material-symbols-outlined text-[20px] text-[#0A0103]']").click();
        
     });



})