describe('Login', () => {
    afterEach(() => {
        Cypress.Cookies.preserveOnce('token');
    });
    it('visits the login page and logs in', () => {
        cy.login();
    })
})

describe('Create New Card', () => {
    afterEach(() => {
        Cypress.Cookies.preserveOnce('token');
    });
    it('visit create new page', () => {
        cy.get('.navbar-contents').within(($nav) => {
            cy.get('ul').within(($ul) => {
                cy.get('[href="/new"]').click();
            });
        });
    })
    it('add new title', () => {
        cy.get('[data-test="card-title"]').within(($div) => {
            cy.get('input').type('test title')
        })
    })
    it('add new message', () => {
        cy.get('[data-test="card-message"]').within(($div) => {
            cy.get('textarea').type('test message')
        })
    })
    it('check favorite box', () => {
        cy.get('#favorite').click();
    })
    it('add new card', () => {
        cy.get('.add-button').click();
    })
})

describe('Favorites', () => {
    afterEach(() => {
        Cypress.Cookies.preserveOnce('token');
    });
    it('visit favorites page', () => {
        cy.get('.navbar-contents').within(($nav) => {
            cy.get('ul').within(($ul) => {
                cy.get('[href="/favorites"]').click();
            });
        });
    })
    it('inspect card title', () => {
        cy.get('[data-test="card-title"]').value = 'test title';
    })
    it('inspect card message', () => {
        cy.get('[data-test="card-message"]').value = 'test message';
    })
    it('inspect isFavorite is true', () => {
        cy.get('.star').value = '&#9733;';
    })
    it('edit card and un-check favorite box', () => {
        cy.get('.edit-button').click();
        cy.get('#favorite').click();
        cy.get('.edit-button').click();
    })
})

describe('Homepage', () => {
    afterEach(() => {
        Cypress.Cookies.preserveOnce('token');
    });
    it('inspect card title', () => {
        cy.get('[data-test="card-title"]').value = 'test title';
    })
    it('inspect card message', () => {
        cy.get('[data-test="card-message"]').value = 'test message';
    })
    it('inspect isFavorite is false', () => {
        cy.get('.star').value = '&#9734;';
    })
    it('delete card', () => {
        cy.get('.edit-button').click();
        cy.get('.delete-button').click();
    })
})

describe('Logout', () => {
    afterEach(() => {
        Cypress.Cookies.preserveOnce('token');
    });
    it('log out', () => {
        cy.get('.logout-button').click();
    })
})