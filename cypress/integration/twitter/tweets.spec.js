describe('Index page', () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`)
    cy.visit('/')
  })

  it('should have a logo', () => {
    cy.get('h2').should('have.length', 2)
  })
})
