/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance()


describe('Cadastro', () => {
    it('Ao informar os dados o usuário deve ser cadastrado', () => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('i.fa-lock').click()
        cy.get('input[data-qa=signup-name]').type(chance.name())
        cy.get('input[data-qa=signup-email]').type(chance.email())
        cy.get('button[data-qa=signup-button]').click()
        cy.get('input#id_gender1').check()
        cy.get('input[type=password]').type('112233Cc')
        cy.get('select#days').select('4')
        cy.get('select#months').select('8')
        cy.get('select#years').select('2011')
        cy.get('input#newsletter').check()
        cy.get('input#first_name').type(chance.first())
        cy.get('input#last_name').type(chance.last())
        cy.get('input[name=company]').type(chance.company())
        cy.get('input[name=address1]').type(chance.address())
        cy.get('input[name=address2]').type(chance.address())
        cy.get('select#country').select('Israel')
        cy.get('input#state').type(chance.state())
        cy.get('input#city').type(chance.city())
        cy.get('input[name=zipcode]').type(chance.zip())
        cy.get('input[name=mobile_number]').type(chance.phone())
        cy.get('button[data-qa=create-account]').click()
        cy.url().should('contain','created')
        cy.contains('Continue').click()
        
        
    });

    it('Ao selecionar um item, o mesmo deve seguir para o carrinho', () => {
        
        cy.get('a[data-product-id="1"]').contains('Add to cart').click()
        cy.get('a[href="/view_cart"]').contains("View Cart").click()
        cy.url().should('contain','view_cart')
        cy.get('a.check_out').click()
        cy.get('a[href="/login"]').contains("Register / Login").click()
        cy.url().should('contain','login')
    });
});