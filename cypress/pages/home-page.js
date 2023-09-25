import HomePageLocator from "./ui-elements/home-page-component"

const environment = Cypress.config().baseUrl;

export class HomePage{

   
     get test(){
        console.log(cy.get(HomePageLocator.todos()).contains("Commands"));
    }

     setupApp(){
         cy.log("Running Test On:" + environment);
         cy.visit(environment);
    }

    async performtest(){
        //this.test();
     cy.get('.todo-list li').should('have.length', 2);
     cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
     cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
    }
}