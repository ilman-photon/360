import "@testing-library/jest-dom";
import { parseInsuranceCarrier, parsePurposeOfVisit } from '../../../src/utils/appointment';

const MOCK_RESPONSE = {
  appointmentType: [{"code":"Clinical_Diagnosis","name":"Clinical_Diagnosis","key":4,"order":4,"category":{"code":"Vision","description":"Vision"},"acronym":"CAD","color":"#6fc77b","slotLength":5,"notes":"","_links":{"self":{"href":"/v1/appointment-types/Clinical_Diagnosis"}}},{"code":"NO_APPOINTMENT","name":"NO APPOINTMENT","key":1,"order":1,"category":{"code":"Medical","description":"Medical"},"acronym":"NA","color":"#8F8F8F","slotLength":5,"notes":"NO_APPOINTMENT is a default appointment type","_links":{"self":{"href":"/v1/appointment-types/NO_APPOINTMENT"}}},{"code":"Comprehensive","name":"Comprehensive","key":2,"order":2,"category":{"code":"Medical","description":"Medical"},"acronym":"CP","color":"#f2ee74","slotLength":5,"notes":"","_links":{"self":{"href":"/v1/appointment-types/Comprehensive"}}},{"code":"Glaucome_Appointment","name":"Glaucoma_Appointment","key":3,"order":3,"category":{"code":"Vision","description":"Vision"},"acronym":"GPA","color":"#528aa8","slotLength":5,"notes":"","_links":{"self":{"href":"/v1/appointment-types/Glaucome_Appointment"}}},{"code":"Retina_checkup","name":"Retina checkup","key":5,"order":5,"category":{"code":"Vision","description":"Vision"},"acronym":"RET","color":"#db8686","slotLength":5,"notes":"","_links":{"self":{"href":"/v1/appointment-types/Retina_checkup"}}}],
  insuranceCarrier: [{"id":"2a7601c4-f9e7-4698-ae56-bbe44dee0c9a","label":"EyeMed","value":"EyeMed"},{"id":"40df17d8-b546-400d-94a4-218b1bc92747","label":"Vision Care","value":"Vision Care"},{"id":"45de1cbd-09f0-4e98-aa45-9e8f4b3f68fc","label":"United Healthcare","value":"United Healthcare"},{"id":"36241a46-d135-4356-96b0-b2b5ceaf06ba","label":"Blue Cross","value":"Blue Cross"},{"id":"890184c4-400f-4bdf-9d2f-4be098a9fd45","label":"Medicare","value":"Medicare"},{"id":"568f0fd4-98c5-470f-9f91-55f3c24449cf","label":"Medicaid","value":"Medicaid"},{"id":"0956cb6c-1bf5-4b8a-a632-208beaeff489","label":"Eye Care","value":"Eye Care"},{"id":"9794b2a3-57a9-4ca1-a077-5a6f998501bd","label":"United Healthcare","value":"United Healthcare"},{"id":"84b3e396-82d3-42bb-a9e0-c3a90ee24dad","label":"Test_Finance_class","value":"Test_Finance_class"},{"id":"dc87ae1f-8302-481e-b09f-990ffaa67cd7","label":"WORKERS COMPENSATION","value":"WORKERS COMPENSATION"},{"id":"21526220-1b68-40bb-9b2d-54274b410caf","label":"ALLSTATE","value":"ALLSTATE"},{"id":"44971e01-2994-4e2d-aff2-d31ce25b15f1","label":"ILLINOIS MEDICARE","value":"ILLINOIS MEDICARE"},{"id":"42a5bc17-36bb-44a4-8ef7-940bca02838c","label":"Cigna","value":"Cigna"}],
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
        const expectInsurance = [{"id":"1","name":"I'm paying out of my pocket","category":"","divider":false},{"id":"2","name":"skip and choose insurance later","category":"","divider":false},{"id":"3","name":"Other Insurance","category":"","divider":true},{"id":"2a7601c4-f9e7-4698-ae56-bbe44dee0c9a","name":"EyeMed","category":"all","divider":false},{"id":"40df17d8-b546-400d-94a4-218b1bc92747","name":"Vision Care","category":"all","divider":false},{"id":"45de1cbd-09f0-4e98-aa45-9e8f4b3f68fc","name":"United Healthcare","category":"all","divider":false},{"id":"36241a46-d135-4356-96b0-b2b5ceaf06ba","name":"Blue Cross","category":"all","divider":false},{"id":"890184c4-400f-4bdf-9d2f-4be098a9fd45","name":"Medicare","category":"all","divider":false},{"id":"568f0fd4-98c5-470f-9f91-55f3c24449cf","name":"Medicaid","category":"all","divider":false},{"id":"0956cb6c-1bf5-4b8a-a632-208beaeff489","name":"Eye Care","category":"all","divider":false},{"id":"9794b2a3-57a9-4ca1-a077-5a6f998501bd","name":"United Healthcare","category":"all","divider":false},{"id":"84b3e396-82d3-42bb-a9e0-c3a90ee24dad","name":"Test_Finance_class","category":"all","divider":false},{"id":"dc87ae1f-8302-481e-b09f-990ffaa67cd7","name":"WORKERS COMPENSATION","category":"all","divider":false},{"id":"21526220-1b68-40bb-9b2d-54274b410caf","name":"ALLSTATE","category":"all","divider":false},{"id":"44971e01-2994-4e2d-aff2-d31ce25b15f1","name":"ILLINOIS MEDICARE","category":"all","divider":false},{"id":"42a5bc17-36bb-44a4-8ef7-940bca02838c","name":"Cigna","category":"all","divider":false}]
        const expectPurposes = [{"id":"4","title":"Clinical_Diagnosis","subtitle":"Vision"},{"id":"1","title":"NO APPOINTMENT","subtitle":"Medical"},{"id":"2","title":"Comprehensive","subtitle":"Medical"},{"id":"3","title":"Glaucoma_Appointment","subtitle":"Vision"},{"id":"5","title":"Retina checkup","subtitle":"Vision"}]
        const suggestionData = {
          purposeOfVisit: parsePurposeOfVisit(MOCK_RESPONSE.appointmentType),
          insuranceCarrier: parseInsuranceCarrier(MOCK_RESPONSE.insuranceCarrier),
        }
        expect(expectPurposes).toEqual(suggestionData.purposeOfVisit)
        expect(expectInsurance).toEqual(suggestionData.insuranceCarrier)
    });
})