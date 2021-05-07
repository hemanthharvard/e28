// https://on.cypress.io/custom-commands

// User
const user = {
    username: 'test',
    password: 'test'
};

Cypress.Cookies.debug(true); // now Cypress will log when it alters cookies

Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.contains('h2', 'Login');
    cy.get('[data-test=username-input]').clear().type(user.username);
    cy.get('[data-test=password-input]').clear().type(user.password);
    cy.get('[data-test=login-button]').click();
    cy.contains('#description', ' Note Keeper is your one-stop shop for all your note keeping needs.');
});