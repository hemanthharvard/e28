describe('Login Page', () => {
    it('visits the login page and logs in', () => {
        cy.login();
    })
    it('inspect card title', () => {
        cy.get('[data-test="card-title"]').value = 'test title';
    })
    it('inspect card message', () => {
        cy.get('[data-test="card-message"]').value = 'test message';
    })
    it('edit card', () => {
        cy.get('.edit-button').click();
        cy.get('#favorite').click();
        cy.get('.edit-button').click();
    })
})