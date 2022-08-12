import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      break;
    default: {
      res.status(200).json({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        preferredName: "---",
        profilePhoto: faker.image.imageUrl(),
        issuedCardFront: faker.image.imageUrl(),
        issuedCardBack: faker.image.imageUrl(),
        dob: new Date(),
        age: faker.datatype.number(100),
        gender: faker.helpers.arrayElement(["Male", "Female"]),
        title: faker.helpers.arrayElement(["Mr", "Mrs"]),
        ssn: faker.datatype.number({ min: 1000000000, max: 9999999999 }),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode("####"),
      });
    }
  }
}
