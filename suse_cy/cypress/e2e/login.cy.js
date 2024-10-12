/// <reference types="cypress" />

context('login ranch', () => {
  beforeEach(() => {
    cy.visit('https://localhost/dashboard/auth/login')
  })
  it('execute login action', () => {
    cy.get('input#username').type('admin')
    cy.get('.password').type('OTNeSWuQKlfCyhJ3')
    cy.get('button#submit').click()
    cy.get('.simple-title').should('be.visible')
    cy.get('h1').should('contain', 'Welcome to Rancher')
  })
})
