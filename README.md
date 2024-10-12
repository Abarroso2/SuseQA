Cypress automation to cover the following scenarios

1 - Log into rancher web page. 
2 - check if the main web page opens up. 
3 - check if the mai web page title is correct.

Folder: SuseQA/suse_cy

Add credentials and target address at /cypress/e2e/login.cy.js file

command: npx cypress run --spec "cypress/e2e/login.cy.js"
