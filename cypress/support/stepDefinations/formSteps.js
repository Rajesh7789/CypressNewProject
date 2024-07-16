import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user opens the simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form?')
});

When('user entres firstname, lastname, email, contact, message',()=>{
    cy.get('#firstName').type('Rajesh');
    cy.get('#lastName').type('Dash');
    cy.xpath('//*[@type="email"]').type('rajeshdash@gmail.com');
    cy.xpath('//*[@type="tel"]').type('7789807181');
    cy.xpath('//*[@rows="2"]').type('welcome');
});

And('submit the form',()=>{
    cy.xpath('//*[@value="submit"]').click();
});

Then('an alert message showing successful should be displayed',()=>{
    cy.on('window:alert',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, Rajesh Dash')
        return true;
    })
});
