/// <reference types="cypress" />

describe("Habits", () => {
  beforeEach(() => {
    cy.visit('/habits')
  })

  it.skip("display modal on add click", () => {
    cy.contains("button", "Add").click()
    cy.contains("Add a new habit").should("be.visible")
  })
  
  it("display habit on add with text", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("Add a new habit").should("be.visible");
    const habit = "sleep";
    cy.get("input[placeholder='Habit']").type(habit);
    cy.contains("button", "Save Change").click();
    cy.contains(habit)
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  })
  
  it("toggle habbit", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("Add a new habit").should("be.visible");
    const habit = "eat";
    cy.get("input[placeholder='Habit']").type(habit);
    cy.contains("button", "Save Change").click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible");
    cy.contains(habit).click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible");
  })
})