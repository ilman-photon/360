import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  res.status(200).json({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    profilePhoto: faker.image.imageUrl(),
    issuedCardFront: faker.image.imageUrl(),
    issuedCardBack: faker.image.imageUrl(),
    dob: new Date(),
    title: faker.helpers.arrayElement(["Mr", "Mrs"]),
    ssn: faker.datatype.number({ min: 1000000000, max: 9999999999 }),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode("####"),
  });
}
