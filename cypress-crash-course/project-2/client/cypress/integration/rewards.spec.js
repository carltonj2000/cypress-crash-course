/// <reference types="cypress" />

describe("Rewards", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });

  it("should display a list of rewards", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });

  it("should display a mock list of rewards", () => {
    cy.intercept("GET", "http://localhost:5000/rewards", {
      fixture: "rewards.json",
    });
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 1 straight day"
      )
      .and("contain", "850 points for fasting for 1 day straight");
  });
});
