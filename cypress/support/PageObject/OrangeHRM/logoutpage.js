class logout_po{

    clicklogout(){

        cy.get('.oxd-userdropdown-name').click();
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link')
        cy.xpath('//*[@href="/web/index.php/auth/logout"]').click();
    }






}

export default logout_po;