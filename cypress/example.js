describe('Demo store', () => {
    it('Navbar', () => {
  cy.visit("https://demo.nopcommerce.com/")
  cy.xpath("//input[@class='search-box-text ui-autocomplete-input']").type('Apple MacBook Pro 13-inch')
  cy.xpath("//button[@class='button-1 search-box-button']").click()
    })
})