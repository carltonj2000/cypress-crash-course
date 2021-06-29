/// <reference types="cypress" />

describe("accomplishment", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should return back with invalid inputs", () => {
    cy.get("[data-cy='accomplishment-title-input").type("My title");
    cy.get("[data-cy='accomplishment-input").type("My accomplishment giraffe");
    cy.get("[data-cy='accomplishment-checkbox").click();
    cy.contains("button", "Submit Accomplishment").click();
    cy.contains("p", "Your content is not appropriate").should("be.visible");
  });

  it("should return back with invalid inputs with mock", () => {
    cy.intercept("POST", "http://localhost:5000", (req) => {
      req.reply((res) => res.send({ msg: "No good content" }));
    });
    cy.get("[data-cy='accomplishment-title-input").type("My title");
    cy.get("[data-cy='accomplishment-input").type("My accomplishment giraffe");
    cy.get("[data-cy='accomplishment-checkbox").click();
    cy.contains("button", "Submit Accomplishment").click();
    cy.contains("p", "No good content").should("be.visible");
  });
});
