describe("Navigation from home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("clicking on product goes to product details pg", () => {
    cy.get(".products article").first().click();
    cy.get(".product-detail").should("exist");
  });
});