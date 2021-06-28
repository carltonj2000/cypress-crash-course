/// <reference types="cypress" />

describe("accomplishment", () => {
  beforeEach(() => {
    cy.visit('/accomplishments');
  })

  it("should error on submit", () => {
    cy.contains("button", "Submit Accomplishment").click();
    cy.contains('p',"Complete the items above to continue")
      .should("be.visible")
  })
  
  it("should submit correctly", () => {
    cy.get("[data-cy='accomplishment-title-input").type("My title");
    cy.get("[data-cy='accomplishment-input").type("My accomplishment");
    cy.get("[data-cy='accomplishment-checkbox").click();
    cy.contains("button", "Submit Accomplishment").click();
    cy.contains('h1',"This Accomplisment was Successfully Submitted")
      .should("be.visible")
  })
  
  it("should return back with empty inputs", () => {
    cy.get("[data-cy='accomplishment-title-input").type("My title");
    cy.get("[data-cy='accomplishment-input").type("My accomplishment");
    cy.get("[data-cy='accomplishment-checkbox").click();
    cy.contains("button", "Submit Accomplishment").click();
    cy.contains('h1',"This Accomplisment was Successfully Submitted")
      .should("be.visible");
    cy.contains('button', 'Go Back').click();
    cy.get("[data-cy='accomplishment-title-input").should("have.value", "");
    cy.get("[data-cy='accomplishment-input").should("have.value", "");
    cy.get("[data-cy='accomplishment-checkbox").should("not.be.checked");
  })
})