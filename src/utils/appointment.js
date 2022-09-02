export function parseSuggestionData(suggestionData) {
  return {
    purposeOfVisit: parsePurposeOfVisit(suggestionData.AppointmentType),
    insuranceCarrier: parseInsuranceCarrier(suggestionData.InsuranceCarrier),
  };
}

function parsePurposeOfVisit(appointmentData) {
  if (appointmentData && appointmentData.length > 0) {
    const data = [];
    for (const item of appointmentData) {
      const purposeOfVisitItem = {
        id: item.id,
        title: item.name,
        subtitle: item.description,
      };
      data.push(purposeOfVisitItem);
    }
    return data;
  }
  return [];
}

function parseInsuranceCarrier(insuranceCarrierData) {
  if (insuranceCarrierData && insuranceCarrierData.length > 0) {
    const initialData = [
      "i'm paying out of my pocket",
      "skip and choose insurance later",
      "other insurance",
    ];
    const data = [];
    for (const insuranceCarrier of insuranceCarrierData) {
      let itemData = {};
      for (const category of insuranceCarrier.category) {
        itemData = {
          id: insuranceCarrier.id,
          name: insuranceCarrier.name,
          category:
            initialData.indexOf(insuranceCarrier.name.toLowerCase()) > -1
              ? ""
              : `${category} carriers`,
          divider: "other insurance" === insuranceCarrier.name.toLowerCase(),
        };
        data.push(itemData);
      }
    }
    return data;
  }
  return [];
}
