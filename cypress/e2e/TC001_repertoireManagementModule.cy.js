
/// <reference types="cypress" />

import matchingEngineHomePage from '../pageObjects/matchingEngineHomePage';
import repertoireManagementModulePage from '../pageObjects/repertoireManagementModulePage';

describe('TC001: Repertoire Management Module Features Test (Data-Driven)', () => 
{

    before(() => 
    {
        cy.fixture('expectedProductsSupported').then(data => {
            cy.wrap(data.repertoireManagementProducts).as('expectedProducts');
        });
    });

    it('Should navigate and verify the list of supported products against resource data', function() 
    {
        // 1. Retrieve the data from the context
        const expectedProducts = this.expectedProducts;

        if (!expectedProducts) {
             throw new Error("Fixture data was not successfully loaded.");
        }

        // 2. Execution steps
        matchingEngineHomePage.visit(); 
        matchingEngineHomePage.expandModules();
        matchingEngineHomePage.goToRepertoireManagement();
        repertoireManagementModulePage.verifyPageLoad();
        repertoireManagementModulePage.scrollToFeatures();
        repertoireManagementModulePage.clickProductsSupported();

        // 3. Pass the loaded data to the Page Object
        repertoireManagementModulePage.assertSupportedProductsList(expectedProducts);
    });
});