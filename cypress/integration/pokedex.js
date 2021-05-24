describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  describe('go to a pokemon page', function() {
    beforeEach(function() {
      cy.visit('http://localhost:5000')
    })
    it('go to Ivysaur', function() {
      cy.get('a[href*="ivysaur"]').click()
      cy.contains('chlorophyll')
    })
  })
})