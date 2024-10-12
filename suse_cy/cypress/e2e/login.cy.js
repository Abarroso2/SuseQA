/// <reference types="cypress" />

context('login ranch', () => {
  beforeEach(() => {
    cy.visit('https://localhost/dashboard/auth/login')
  })
  it('execute login action', () => {
    cy.get('input#username').type('add user')
    cy.get('.password').type('add pass')
    cy.get('button#submit').click()
    cy.get('.simple-title').should('be.visible')
    cy.get('h1').should('contain', 'Welcome to Rancher')
  })
})
