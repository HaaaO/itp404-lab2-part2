import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

	firstName(){
		return faker.name.firstName();
	},
	lastName(){
		return faker.name.lastName();
	},
	jobTitle(){
		return faker.name.jobTitle();
	},
	phoneNumber(){
		return faker.phone.phoneNumber();
	}
});
