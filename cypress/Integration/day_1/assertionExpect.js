describe('Orange tests', () => {
    it('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').then(($username)=>{

            expect($username).to.have.attr('placeholder','Username')
            //directly if we try to clock on username 
            // it will not work because of jquerry
            //to convert jquerry variable to cypress object we have to wrap it.
            cy.wrap($username).type('Admin')
        });

        cy.get('[name="password"]').then(($password)=>{

            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('admin123')

        });
        cy.get('button[type="submit"]').then(($login)=>{
            expect($login).to.have.text(' Login ')
            cy.wrap($login).click()

        });
        cy.get('.oxd-userdropdown-name').click();
        
        cy.wait(2000);
        // cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($dropdown)=>{

        //     if ($dropdown.text()=='Logout') {
        //         cy.wrap($dropdown).click();
        //     };

        // });

        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link')
        cy.xpath('//*[@href="/web/index.php/auth/logout"]').click();

    });
});