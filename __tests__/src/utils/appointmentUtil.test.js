import "@testing-library/jest-dom";
import { parseSuggestionData } from '../../../src/utils/appointment';

const MOCK_RESPONSE = {
    AppointmentType: [
      {
        id: "1",
        name: "Eye Exam",
        description: "Test the health of your eye",
      },
      { id: "2", name: "Follow up", description: "See your doctor today" },
      {
        id: "3",
        name: "Comprehensive",
        description: "Get detailed eye exam",
      },
      {
        id: "4",
        name: "Contacts Only",
        description: "Get fitted for the right contacts",
      },
    ],
    InsuranceCarrier: [
      { id: "1", name: "I'm paying out of my pocket", category: ["general"] },
      {
        id: "2",
        name: "skip and choose insurance later",
        category: ["general"],
      },
      { id: "3", name: "Other Insurance", category: ["general"] },
      { id: "4", name: "Aetna", category: ["popular"] },
      { id: "5", name: "Aetna", category: ["popular"] },
      { id: "6", name: "Blue Cross Blue Shield", category: ["popular"] },
      { id: "7", name: "Cigna", category: ["popular"] },
      { id: "8", name: "Kaiser", category: ["general"] },
    ],
    ListOfProvider: [
      {
        providerId: "1",
        image: "http//:img-url",
        name: "Paul Wagner Md",
        rating: "5",
        phoneNumber: "857299998",
        specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
        about:
          "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
        gender: "Male",
        address:
          "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
        distance: "10 mi",
        language: ["English", "Spanish"],
        networkInsurance: [
          "Blue Cross Blue Shield",
          "Cigna",
          "UnitedHeathcare",
          "Blue Cross Blue Shield",
          "Cigna",
          "UnitedHeathcare",
          "Blue Cross Blue Shield",
          "Cigna",
          "UnitedHeathcare",
        ],
        education:
          "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s) ",
        membershipsAffiliation:
          "New England College of Optometry, Doctor of Optometry University of California, San Diego (Bachelor’s)",
      },
    ],
  }
describe('Appointment Util Bio', () => {

    test("validate data", () => {
        const expectInsurance = [
            {id: '1', name: "I'm paying out of my pocket", category: '', divider: false},
            {id: '2', name: 'skip and choose insurance later', category: '', divider: false},
            {id: '3', name: 'Other Insurance', category: '', divider: true},
            {id: '4', name: 'Aetna', category: 'popular carriers', divider: false},
            {id: '5', name: 'Aetna', category: 'popular carriers', divider: false},
            {id: '6', name: 'Blue Cross Blue Shield', category: 'popular carriers', divider: false},
            {id: '7', name: 'Cigna', category: 'popular carriers', divider: false},
            {id: '8', name: 'Kaiser', category: 'general carriers', divider: false}
        ]
        const expectPurposes = [
            {id: '1', title: 'Eye Exam', subtitle: 'Test the health of your eye'},
            {id: '2', title: 'Follow up', subtitle: 'See your doctor today'},
            {id: '3', title: 'Comprehensive', subtitle: 'Get detailed eye exam'},
            {id: '4', title: 'Contacts Only', subtitle: 'Get fitted for the right contacts'}
        ]
        const suggestionData = parseSuggestionData(MOCK_RESPONSE)
        expect(expectInsurance).toEqual(suggestionData.purposeOfVisit)
        expect(expectPurposes).toEqual(suggestionData.insuranceCarrier)
    });
})