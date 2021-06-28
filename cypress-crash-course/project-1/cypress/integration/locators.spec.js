/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it.skip("locating elements with the get command", () => {
    cy.get("button"); // get elements by tag name
    cy.get(".btn-with-class"); // get element by class name
    cy.get("[class='Elements-btn btn-with-class']"); // multiple classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");
    cy.get("[id='btn-with-id']"); // element by id
    cy.get("#btn-with-id"); // get element by id
    cy.get("[type='submit']"); // element by id
    cy.get("button.Elements-btn"); // by tag name and class
    cy.get("button.Elements-btn#btn-with-id"); // by tag name and class
    cy.get("button.Elements-btn[type='submit']");
    cy.get("[data-cy='btn-id-1']");
    cy.getByTestId("btn-id-1"); // custom cmd in commands.js
  })
  
  it.skip("locating single element with contains", () => {
    cy.contains("Unique Text");
    cy.contains("Not Unique Text");
    cy.contains("Just Another Button");
    cy.get("[type='submit']").contains("Not Unique Text");
    cy.contains("[type='submit']", "Not Unique Text");
    cy.contains("form", "Not Unique Text");
  })
  
  it("locating with find", () => {
    cy.get("#form-1").find(".btn-1");
  })
})