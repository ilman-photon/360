import { Api } from "../pages/api/api";

function onCalledMedicationAPI(resolve, reject) {
  let medicationData = [];
  const api = new Api();
  api
    .getPrescriptionMedication()
    .then(function (response) {
      medicationData = response;
    })
    .catch(function () {
      medicationData = [];
    })
    .finally(function () {
      onCalledGlassesAPI(medicationData, resolve, reject);
    });
}

function onCalledGlassesAPI(medicationData, resolve, reject) {
  let glassesData = [];
  const api = new Api();
  api
    .getPrescriptionGlasses()
    .then(function (response) {
      glassesData = response?.entities || [];
    })
    .catch(function () {
      glassesData = [];
    })
    .finally(function () {
      onCalledContactsAPI(medicationData, glassesData, resolve, reject);
    });
}

function onCalledContactsAPI(medicationData, glassesData, resolve, reject) {
  const api = new Api();
  api
    .getPrescriptionContacts()
    .then(function (response) {
      let prescriptionDataTemp = parsePrescriptions(
        glassesData,
        response?.entities || [],
        medicationData
      );
      resolve(prescriptionDataTemp);
    })
    .catch(function () {
      reject({
        glasses: [],
        contacts: [],
        medications: [],
      });
    });
}

export function onCallGetPrescriptionData() {
  return new Promise((resolve, reject) => {
    onCalledMedicationAPI(resolve, reject);
  });
}

function setPrescriptionDetails(tableData, type) {
  const prescriptionDetails = [];
  for (const property in tableData) {
    if (property === "od" || property === "os") {
      if (type === "glasses") {
        prescriptionDetails.push({
          eye: property.toUpperCase(),
          sph: tableData[property]?.sphere || "",
          cyl: tableData[property]?.cylinder || "",
          axis: tableData[property]?.axis || "",
          add: tableData[property]?.add || "",
        });
      } else {
        prescriptionDetails.push({
          eye: property.toUpperCase() || "",
          sph: tableData[property]?.sphere || "",
          bc: tableData[property]?.bc || "",
          cyl: tableData[property]?.cylinder || "",
          axis: tableData[property]?.axis || "",
        });
      }
    }
  }
  return prescriptionDetails;
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export function parsePrescriptions(glassesData, contactsData, mediactionData) {
  const data = {
    glasses: [],
    contacts: [],
    medications: [],
  };
  for (const glasses of glassesData) {
    const providerName = glasses?.provider
      ? `${glasses?.provider.firstName} ${glasses?.provider.lastName}`
      : "";
    const date = new Date(glasses?.startDate);
    const expirationDate = new Date(glasses?.expirationDate);
    const tempGlasses = {
      prescribedBy: providerName,
      date: isValidDate(date) ? date.toISOString() : "",
      expirationDate: isValidDate(expirationDate)
        ? expirationDate.toISOString()
        : "",
      prescriptionDetails: setPrescriptionDetails(glasses.glrx, "glasses"),
    };
    data.glasses.push(tempGlasses);
  }

  for (const contacts of contactsData) {
    const providerName = contacts?.provider
      ? `${contacts?.provider.designation} ${contacts?.provider.firstName} ${contacts?.provider.lastName}`
      : "";
    const date = new Date(contacts?.startDate);
    const expirationDate = new Date(contacts?.expirationDate);
    const tempContacts = {
      prescribedBy: providerName,
      date: isValidDate(date) ? date.toISOString() : "",
      expirationDate: isValidDate(expirationDate)
        ? expirationDate.toISOString()
        : "",
      prescriptionDetails: setPrescriptionDetails(
        contacts.clrx.clrx,
        "contacts"
      ),
    };
    data.contacts.push(tempContacts);
  }

  for (const mediaction of mediactionData) {
    const providerName = mediaction?.Provider
      ? `${mediaction?.Provider?.FirstName} ${mediaction?.Provider?.LastName}`
      : "";
    const tempContacts = {
      prescribedBy: providerName,
      prescription: mediaction?.Sig?.Drug?.DrugDescription || "",
      date: mediaction?.CreatedDate,
      expiredDate: mediaction?.StopDate,
    };
    data.medications.push(tempContacts);
  }
  return data;
}
