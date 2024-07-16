describe('drag and drop', () => {
    it('test 1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        
        // using trigger keyword for keep. 
        cy.get('#draggable').trigger('mousedown',{which: 1})
        // for droping the item
        
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true});

        // droping the item to 2nd location.
        cy.get('#draggable').trigger('mousedown',{which: 1})
        
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true});
    });
    
});