import HomePageLocator from "./ui-elements/home-page-component"

const environment = Cypress.config().baseUrl;

export class HomePage {


    getTopHeaderValue() {
        console.log(cy.get(HomePageLocator.commandsDropDown()).contains("Commands"));
    }

    setupApp() {
        cy.log("Running Test On:" + environment);
        cy.visit(environment);
    }

    /** 
     * This is dummy method and created for POC purpose only
     * Will delete this method once will start writing the actual framework componen,
     * which will begin once the app will be deployed on server.
    */
    async dummyMethod1() {

        this.getTopHeaderValue();
        cy.get(HomePageLocator.todoList()).should('have.length', 2);
        cy.get(HomePageLocator.todoList()).first().should('have.text', 'Pay electric bill');
        cy.get(HomePageLocator.todoList()).last().should('have.text', 'Walk the dog');
    }

    /** 
     * This is dummy method and created for POC purpose only
     * Will delete this method once will start writing the actual framework componen,
     * which will begin once the app will be deployed on server.
    */
    async dummyMethod2() {

        this.getTopHeaderValue();
        cy.get(HomePageLocator.todoList()).should('have.length', 2);
    }
}