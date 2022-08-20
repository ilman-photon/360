import { faker } from "@faker-js/faker";
import { RELATIONSHIP_LIST } from "../../../utils/constantData";

const PROVIDER_LIST_DUMMY = [
  { id: 0, label: "Provider 1" },
  { id: 1, label: "Provider 2" },
];

const PLAN_LIST_DUMMY = [
  { id: 0, label: "Plan 1" },
  { id: 1, label: "Plan 2" },
];

export default function insurance(req, res) {
  const landscapeImage = faker.image.imageUrl(275, 173);

  if (req.method === "GET") {
    const totalInsurance = 3;
    const userInsurances = [];
    for (let i = 0; i < totalInsurance; i++) {
      userInsurances.push({
        id: i + 1,
        provider: faker.helpers.arrayElement(PROVIDER_LIST_DUMMY),
        plan: faker.helpers.arrayElement(PLAN_LIST_DUMMY),
        memberID: faker.datatype.number(10000),
        groupID: faker.datatype.number(10000),
        isSubscriber: faker.helpers.arrayElement(["Yes", "No"]),
        subscriberData: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          dob: new Date(),
          relationship: faker.helpers.arrayElement(RELATIONSHIP_LIST),
        },
        priority: faker.helpers.arrayElement([
          "Primary",
          "Secondary",
          "Tertiary",
        ]),
        frontCard: landscapeImage,
        backCard: landscapeImage,
      });
    }
    res.status(200).json(userInsurances);
  }
}
