import { faker } from "@faker-js/faker";
import { GENDER_LIST, TITLE_LIST } from "../../../utils/constantData";

export default function handler(req, res) {
  const landscapeImage = faker.image.imageUrl(275, 173);

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
        issuedCardFront: landscapeImage,
        issuedCardBack: landscapeImage,
        dob: new Date(),
        age: faker.datatype.number(100),
        gender: faker.helpers.arrayElement(GENDER_LIST),
        title: faker.helpers.arrayElement(TITLE_LIST),
        ssn: faker.datatype.number({ min: 1000000000, max: 9999999999 }),
        mobile: faker.phone.number("(###) ###-####"),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode("#####"),
        preferredCommunication: faker.helpers.arrayElement([
          "both",
          "email",
          "phone",
        ]),
      });
    }
  }
}
