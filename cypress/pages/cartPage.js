import { userInfo } from '../support/faker';

class CartPage {
	placeOrderButton() {
		return cy.get('.btn-success');
	}
	cartAmount() {
		return cy.get('#totalp');
	}
	tableBody() {
		return cy.get('#tbodyid');
	}
	checkoutFormName() {
		return cy.get('#name');
	}
	checkoutFormCountry() {
		return cy.get('#country');
	}
	checkoutFormCity() {
		return cy.get('#city');
	}
	checkoutFormCardNumber() {
		return cy.get('#card');
	}
	checkoutFormCardMonth() {
		return cy.get('#month');
	}
	checkoutFormCardYear() {
		return cy.get('#year');
	}
	checkoutPlaceOrderButton() {
		return cy.get(
			'#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
		);
	}

	thankYouForYourPurchaseModal() {
		return cy.get('.sweet-alert > h2');
	}
	lead() {
		return cy.get('.lead');
	}
	confirmButton() {
		return cy.get('.confirm');
	}

	fillCheckoutForm() {
		this.checkoutFormName().type(userInfo.fakeData.fullName);
		this.checkoutFormCountry().type(userInfo.fakeData.country);
		this.checkoutFormCity().type(userInfo.fakeData.city);
		this.checkoutFormCardNumber().type(userInfo.fakeData.creditCard);
		this.checkoutFormCardMonth().type('11');
		this.checkoutFormCardYear().type('2028');
		this.checkoutPlaceOrderButton().click();
	}

	verifyThankYoUForYourPurchase() {
		this.thankYouForYourPurchaseModal().should('be.visible');
		this.lead().should('be.visible');
		this.confirmButton().should('be.visible');
	}

	verifyCheckoutModalElements() {
		this.checkoutFormName().should('be.visible');
		this.checkoutFormCountry().should('be.visible');
		this.checkoutFormCity().should('be.visible');
		this.checkoutFormCardNumber().should('be.visible');
		this.checkoutFormCardMonth().should('be.visible');
		this.checkoutFormCardYear().should('be.visible');
		this.checkoutPlaceOrderButton().should('be.visible');
	}

	verifyCartPageElements() {
		cy.wait(2000);
		this.placeOrderButton().should('be.visible');
		this.cartAmount().should('be.visible');
		this.tableBody().should('be.visible');
	}
}

export default CartPage;
