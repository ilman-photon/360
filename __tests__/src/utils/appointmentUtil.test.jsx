import "@testing-library/jest-dom";
import { parseSuggestionData } from '../../../src/utils/appointment';

const MOCK_RESPONSE = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
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
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
}
describe('Appointment Util', () => {

    test("validate data", () => {
        const expectInsurance = [
            {id: '1', name: "I'm paying out of my pocket", category: '', divider: false},
            {id: '2', name: 'skip and choose insurance later', category: '', divider: false},
            {id: '3', name: 'Other Insurance', category: '', divider: true},
            {id: '4', name: 'Aetna', category: 'popular carriers', divider: false},
            {id: '5', name: 'Aetna', category: 'popular carriers', divider: false},
            {id: '6', name: 'Blue Cross Blue Shield', category: 'popular carriers', divider: false},
            {id: '7', name: 'Cigna', category: 'popular carriers', divider: false},
            {id: '8', name: 'Kaiser', category: 'all carriers', divider: false}
        ]
        const expectPurposes = [
            {id: '1', title: 'Eye Exam', subtitle: 'Test the health of your eye'},
            {id: '2', title: 'Follow up', subtitle: 'See your doctor today'},
            {id: '3', title: 'Comprehensive', subtitle: 'Get detailed eye exam'},
            {id: '4', title: 'Contacts Only', subtitle: 'Get fitted for the right contacts'}
        ]
        const suggestionData = parseSuggestionData(MOCK_RESPONSE)
        expect(expectPurposes).toEqual(suggestionData.purposeOfVisit)
        expect(expectInsurance).toEqual(suggestionData.insuranceCarrier)
    });
})