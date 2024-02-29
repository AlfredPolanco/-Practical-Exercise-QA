class ProductPage {
	productName() {
		return cy.get('.name');
	}
	productPrice() {
		return cy.get('.price-container');
	}
	productDescription() {
		return cy.get('#more-information > p');
	}
	addToCartButton() {
		return cy.get('.btn-success');
	}
	verifyProductPage() {
		this.productName().should('be.visible');
		this.productPrice().should('be.visible');
		this.productDescription().should('be.visible');
		this.addToCartButton().should('be.visible');
	}
	clickOnAddToCartButton() {
		this.addToCartButton().click();
	}
}

export default ProductPage;
