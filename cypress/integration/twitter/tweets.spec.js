describe('Index page', () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`)
    cy.visit('/')
  })

  it('user can tweet', () => {
    const newTweet =
      'test tweet if you can see it in the list of tweets, it works'
    cy.get('#tweets-list input').type(newTweet).type('{enter}')
    cy.get('#tweets-list').should('contain', newTweet)
  })

  it('user can follow other user', () => {
    const userName = 'Alien Morty'
    cy.get('#users-list input').type(userName)
    cy.get('#users-list div[class^="User__Container-"]')
      .contains(userName)
      .click()
    cy.get('#follows-list div[class^="User__Container-"]').should(
      'contain',
      userName
    )
  })

  it('user con unfollow other user', () => {
    const userName = 'Morty Smith'
    cy.get('#follows-list div[class^="User__Container-"]')
      .contains(userName)
      .click()
    cy.get('#tweets-list button[class^="IconButton-"]').click()
    cy.get('#users-list div[class^="User__Container-"]').should(
      'contain',
      userName
    )
  })
})
