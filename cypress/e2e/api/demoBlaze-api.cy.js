import { userInfo } from '../../support/faker';

describe('DemoBlaze API Tests', function () {
	context('Authentication tests', function () {
		it('Create New user', function () {
			cy.request({
				method: 'POST',
				url: Cypress.env('demoBlazeAPI') + '/signup',
				body: {
					username: userInfo.fakeData.userName,
					password: userInfo.fakeData.password
				}
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body).not.to.be.null;
			});
		});

		it('Create existing user', function () {
			cy.request({
				method: 'POST',
				url: Cypress.env('demoBlazeAPI') + '/signup',
				body: {
					username: userInfo.fakeData.userName,
					password: userInfo.fakeData.password
				}
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body).not.to.be.null;
				expect(response.body.errorMessage).to.equal('This user already exist.');
			});
		});

		it('Successful Login', function () {
			cy.request({
				method: 'POST',
				url: Cypress.env('demoBlazeAPI') + '/login',
				body: {
					username: userInfo.fakeData.userName,
					password: userInfo.fakeData.password
				}
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body).not.to.be.null;
			});
		});

		it('Unsuccessful Login', function () {
			cy.request({
				method: 'POST',
				url: Cypress.env('demoBlazeAPI') + '/login',
				body: {
					username: userInfo.fakeData.userName,
					password: '123'
				}
			}).then((response) => {
				cy.log(response);
				expect(response.status).to.eq(200);
				expect(response.body.errorMessage).to.equal('Wrong password.');
			});
		});
	});
});
