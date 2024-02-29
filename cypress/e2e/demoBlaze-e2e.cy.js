import InventoryPage from '../pages/inventoryPage';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';

const inventoryPage = new InventoryPage();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('DemoBlaze Tests', function () {
	beforeEach(function () {
		cy.visit(Cypress.env('demoBlazeURL'));
		cy.url().should('eq', Cypress.env('demoBlazeURL'));
		inventoryPage.verifyInventoryPage();
	});

	it('Add 2 products to cart', function () {
		inventoryPage.clickOnFirstProduct();
		productPage.verifyProductPage();
		productPage.clickOnAddToCartButton();
		inventoryPage.clickOnHomePage();
		inventoryPage.clickOnSecondProduct();
		productPage.clickOnAddToCartButton();
		productPage.verifyProductPage();
		productPage.addToCartButton();
	});

	it('Check Shopping Cart', function () {
		inventoryPage.clickOnFirstProduct();
		productPage.verifyProductPage();
		productPage.clickOnAddToCartButton();
		inventoryPage.clickOnHomePage();
		inventoryPage.clickOnSecondProduct();
		productPage.clickOnAddToCartButton();
		productPage.verifyProductPage();
		productPage.addToCartButton();
		inventoryPage.clickOnCartPage();
		cartPage.verifyCartPageElements();
	});

	it('Complete Checkout Form', function () {
		inventoryPage.clickOnFirstProduct();
		productPage.verifyProductPage();
		productPage.clickOnAddToCartButton();
		inventoryPage.clickOnHomePage();
		inventoryPage.clickOnSecondProduct();
		productPage.clickOnAddToCartButton();
		productPage.verifyProductPage();
		productPage.addToCartButton();
		inventoryPage.clickOnCartPage();
		cartPage.verifyCartPageElements();
		cartPage.placeOrderButton().click();
		cartPage.verifyCheckoutModalElements();
	});

	it('Complete purchase', function () {
		inventoryPage.clickOnFirstProduct();
		productPage.verifyProductPage();
		productPage.clickOnAddToCartButton();
		inventoryPage.clickOnHomePage();
		inventoryPage.clickOnSecondProduct();
		productPage.clickOnAddToCartButton();
		productPage.verifyProductPage();
		productPage.addToCartButton();
		inventoryPage.clickOnCartPage();
		cartPage.verifyCartPageElements();
		cartPage.placeOrderButton().click();
		cartPage.verifyCheckoutModalElements();
		cartPage.fillCheckoutForm();
		cartPage.verifyThankYoUForYourPurchase();
	});
});
