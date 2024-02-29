import { faker } from '@faker-js/faker';

const fakeData = {
	fullName: faker.person.fullName(),
	userName: faker.internet.domainWord(),
	password: faker.internet.password({
		length: 15,
		pattern: /[A-Z-0-9!@#$%^&*()]/
	}),
	country: faker.location.country(),
	city: faker.location.city(),
	creditCard: faker.finance.creditCardNumber()
};

export const userInfo = {
	fakeData
};
