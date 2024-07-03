// cypress/support/e2e.js

// Custom command to log in
Cypress.Commands.add('login', (username, password) => {
  // Implement your login logic here
  cy.visit('/login');
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('form').submit();
});

// Custom command to navigate to a specific page
Cypress.Commands.add('visitPage', (pageUrl) => {
  cy.visit(pageUrl);
});

