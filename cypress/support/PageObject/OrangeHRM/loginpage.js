class login_po{
    enterUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
clicklogin(){
    cy.get("input[name=username]").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
        // cy.xpath("//a[normalize-space()='Logout']").click()
        }

forgetPassword(){
    cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click();
}
}

export default login_po

