describe('Comment', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })
    it('Should have pre-populated comments', () => {
        const commentListItems = cy.get('#comment-list > li')
        commentListItems.should('have.length', 2)
    })
    it('Should be able to add a comment', () => {
        cy.get('#name-input').type("Fredd")
        cy.get('#comment-input').type("Test deez nutz")
        cy.get('#comment-form').submit();
        const commentListItems = cy.get('#comment-list > li')
        commentListItems.should('have.length', 3)
        
    })
})