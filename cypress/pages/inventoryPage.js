class InventoryPage {
	navLinks() {
		return cy.get('.nav-link');
	}
	cardTitle() {
		return cy.get('.card-title');
	}
	cardImage() {
		return cy.get('.card-img-top');
	}
	cardPrice() {
		return cy.get('.card-block > h5');
	}
	cardDescription() {
		return cy.get('.card-block > #article');
	}
	categoriesHeader() {
		return cy.get('#cat');
	}
	categories() {
		return cy.get('.list-group-item');
	}
	verifyInventoryPage() {
		this.cardTitle().should('be.visible');
		this.navLinks().should('be.visible');
		this.cardImage().should('be.visible');
		this.cardPrice().should('be.visible');
		this.cardDescription().should('be.visible');
		this.categoriesHeader().should('be.visible');
		this.categories().should('be.visible');
	}
	clickOnCartPage() {
		this.navLinks().eq(3).click();
	}
	clickOnHomePage() {
		this.navLinks().first().click();
	}

	clickOnFirstProduct() {
		this.cardTitle().first().click();
	}
	clickOnSecondProduct() {
		this.cardTitle().eq(2).click();
	}
}

export default InventoryPage;
