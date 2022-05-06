/// <reference types="cypress" />

describe("/login page", () => {
  beforeEach(() => {
    cy.visit("https://dev-2772-1.demo.lxp.live/login");
  });

  it("displays logo", () => {
    cy.get(".login .logo").should("be.visible");
  });

  it("displays login and register with correct classes", () => {
    cy.get("h3")
      .contains("Sign In")
      .should("be.visible")
      .and("have.class", "active");
    cy.get("h3")
      .contains("Register")
      .should("be.visible")
      .and("not.have.class", "active");
  });

  it("displays login form correctly", () => {
    cy.get(".login-form > .g-input > input").should(
      "have.attr",
      "placeholder",
      "email"
    );
    cy.get(".password-wrapper > .g-input > input").should(
      "have.attr",
      "placeholder",
      "password"
    );
    cy.get(".forgot-password-button").should("be.visible");
    cy.get(".g-button").should("have.text", "Sign in");
  });

  it("displays register form when click register", () => {
    cy.get("h3").contains("Register").click().should("have.class", "active");

    cy.get(".new-user-form").should("be.visible");
  });
});
