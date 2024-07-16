// 4 type of hook is there 
// 1. before : it will exicute before describe.
// 2. beforeeach 
// 3. aftereach 
// 4. after 

before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data=data; // we are intializing the data coming from example.json to this js file
        //
    })
});

describe('data driven test', () => {
    it('login test',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get("input[name=username]").type(data.username);
        cy.get("input[name='password']").type(data.password);
        cy.get("button[type='submit']").click();
        // cy.xpath("//a[normalize-space()='Logout']").click();
        




    });
});