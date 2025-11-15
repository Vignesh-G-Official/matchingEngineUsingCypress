
class MatchingEngineHomePage {
    //Selector
    headerModulesLink = () => 
        cy.contains('.navbar-link', 'Modules');
    repertoireManagementLink = () => 
        cy.contains('a', 'Repertoire Management Module');

    // Actions
    visit() {
        cy.visit('/'); 
    }

    expandModules() {
        cy.log('Hovering over Modules to expand menu.');
        this.headerModulesLink().trigger('mouseover', { force: true });
        cy.get('#burger').should('be.visible');
        //cy.wait(500);
    }

    goToRepertoireManagement() {
        cy.log('Clicking Repertoire Management Module link.');
        this.repertoireManagementLink().click({ force: true }); 
    }
}

export default new MatchingEngineHomePage();