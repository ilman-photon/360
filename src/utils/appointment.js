export function parseSuggestionData(suggestionData) {
  return {
    purposeOfVisit: parsePurposeOfVisit(suggestionData.appointmentType),
    insuranceCarrier: parseInsuranceCarrier(suggestionData.insuranceCarrier),
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
  if (insuranceCarrierData) {
    const data = [];
    for (const [category, insuranceCarrierList] of Object.entries(
      insuranceCarrierData
    )) {
      for (let i = 0; i < insuranceCarrierList.length; i++) {
        const itemData = {
          id: insuranceCarrierList[i].id,
          name: insuranceCarrierList[i].name,
          category: category !== "general" ? `${category} carriers` : "",
          divider:
            category === "general" && i === insuranceCarrierList.length - 1,
        };
        data.push(itemData);
      }
    }
    return data;
  }
  return [];
}
