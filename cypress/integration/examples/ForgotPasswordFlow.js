/// <reference types="Cypress" />

describe("Forgot password flow test", function(){

    it("Forgot password flow test",function(){
        var emailId="test@gmail.com"
        cy.visit("http://ecommerce.test.k6.io/")
        cy.get(".nav-menu > .page-item-9").click()
        cy.get("#username").type(emailId)
        cy.get("#rememberme").click()
        cy.get("#password").type("test")
        cy.get(".login > p > button").click();
        cy.get(".woocommerce-error > li > a").should("contain","Lost your password?")
        cy.get(".lost_password > a").click()
        cy.get(".entry-title").should("have.text","Lost password")
        cy.get("#user_login").type(emailId)
        cy.get(".woocommerce-Button").click()
        cy.get(".woocommerce-message").should("contain","Password reset email has been sent.")

    })

})