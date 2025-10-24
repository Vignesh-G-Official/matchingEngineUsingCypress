
class RepertoireManagementModulePage {
    additionalFeaturesHeading = () => 
        cy.contains('h2', 'Additional Features');
    productsSupportedLink = () => 
        cy.contains('.vc_tta-title-text', 'Products Supported');
    productsSection = () => 
        cy.contains('h3', 'There are several types of Product Supported:').next('div.wpb_text_column');

    // Actions
    verifyPageLoad() {
        cy.log('Verifying successful navigation to Repertoire Management page.');
        cy.url().should('include', '/repertoire-management-module');
    }

    scrollToFeatures() {
        cy.log('Scrolling to "Additional Features" section.');
        this.additionalFeaturesHeading().scrollIntoView().should('be.visible');
    }

    clickProductsSupported() {
        cy.log('Clicking "Products Supported" link.');
        this.productsSupportedLink().click(); 
    }

    // Assertions
    assertSupportedProductsList(expectedProducts) { 
        cy.log('Asserting the list of supported products using data passed from the test context.');
        
        if (!expectedProducts || expectedProducts.length === 0) {
            throw new Error("Expected products data was not loaded or passed to the Page Object.");
        }
        
        this.productsSection().within(() => {
            cy.get('ul, ol').first().as('productList');
            
            cy.get('@productList').find('li').should('have.length', expectedProducts.length);

            expectedProducts.forEach(product => {
                cy.get('@productList').contains('li', product).should('be.visible');
            });
        });
    }
}

export default new RepertoireManagementModulePage();