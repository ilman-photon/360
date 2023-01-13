import { Api } from "../pages/api/api";
import { showOrReturnEmpty } from "./viewUtil";

function onCalledMedicationAPI(resolve, showError = true) {
  let medicationData = [];
  const api = new Api();
  api
    .getPrescriptionMedication(showError)
    .then(function (response) {
      medicationData = response;
    })
    .catch(function () {
      medicationData = [];
    })
    .finally(function () {
      onCalledGlassesAPI(medicationData, resolve, showError);
    });
}

function onCalledGlassesAPI(medicationData, resolve, showError) {
  let glassesData = [];
  const api = new Api();
  api
    .getPrescriptionGlasses(showError)
    .then(function (response) {
      glassesData = response?.entities || [];
    })
    .catch(function () {
      glassesData = [];
    })
    .finally(function () {
      onCalledContactsAPI(medicationData, glassesData, resolve, showError);
    });
}

function onCalledContactsAPI(
  medicationData,
  glassesData,
  resolve,
  showError = true
) {
  let contactData = [];
  const api = new Api();
  api
    .getPrescriptionContacts(showError)
    .then(function (response) {
      contactData = response?.entities || [];
    })
    .catch(function () {
      contactData = [];
    })
    .finally(function () {
      let prescriptionDataTemp = parsePrescriptions(
        glassesData,
        contactData,
        medicationData
      );
      resolve(prescriptionDataTemp);
    });
}

export function onCallGetPrescriptionData(showError = true) {
  return new Promise((resolve) => {
    onCalledMedicationAPI(resolve, showError);
  });
}

function setPrescriptionDetails(tableData, type) {
  const prescriptionDetails = [];
  for (const property in tableData) {
    if (property === "od" || property === "os") {
      if (type === "glasses") {
        prescriptionDetails.push({
          eye: property.toUpperCase(),
          sph: showOrReturnEmpty(tableData[property]?.sphere, true),
          cyl: showOrReturnEmpty(tableData[property]?.cylinder, true),
          axis: showOrReturnEmpty(tableData[property]?.axis, true),
          add: showOrReturnEmpty(tableData[property]?.add, true),
        });
      } else {
        prescriptionDetails.push({
          eye: showOrReturnEmpty(property.toUpperCase(), true),
          sph: showOrReturnEmpty(tableData[property]?.sphere, true),
          bc: showOrReturnEmpty(tableData[property]?.bc),
          cyl: showOrReturnEmpty(tableData[property]?.cylinder),
          axis: showOrReturnEmpty(tableData[property]?.axis),
        });
      }
    }
  }
  return prescriptionDetails;
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

function getStartDateAndExpiredDate(data) {
  return {
    startDate: data?.startDate || "",
    expirationDate: data?.expirationDate || "",
  };
}

function getTimeRemaining(sig) {
  return `${sig?.Action} ${sig?.DoseTiming}`;
}

function getDoseMedication(sig) {
  return `${sig?.Dose} ${sig?.DoseUnit}`;
}

export function parseGlasses(glassesData) {
  let glassesNewData = [];
  for (const glasses of glassesData) {
    const providerName = glasses?.provider
      ? `${glasses?.provider.firstName} ${glasses?.provider.lastName}`
      : "";
    const date = getStartDateAndExpiredDate(glasses.glrx);
    const startdDate = new Date(date.startDate);
    const expirationDate = new Date(date.expirationDate);
    let tempGlasses = {
      id: glasses?._id || "",
      prescribedBy: providerName,
      date: isValidDate(startdDate) ? startdDate.toISOString() : "",
      expirationDate: isValidDate(expirationDate)
        ? expirationDate.toISOString()
        : "",
      prescriptionDetails: setPrescriptionDetails(glasses.glrx, "glasses"),
    };
    glassesNewData.push(tempGlasses);
  }
  return glassesNewData;
}

export function parseContacts(contactsData) {
  let contactNewData = [];
  for (const contacts of contactsData) {
    const providerName = contacts?.provider
      ? `${contacts?.provider.designation} ${contacts?.provider.firstName} ${contacts?.provider.lastName}`
      : "";
    const date = new Date(contacts?.startDate);
    const expirationDate = new Date(contacts?.expirationDate);
    const tempContacts = {
      id: contacts?._id || "",
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
    contactNewData.push(tempContacts);
  }
  return contactNewData;
}

export function parseMedications(mediactionData) {
  let medicationNewData = [];
  for (const mediaction of mediactionData) {
    const providerName = mediaction?.Provider
      ? `${mediaction?.Provider?.FirstName} ${mediaction?.Provider?.LastName}`
      : "";
    const providerNPI = mediaction?.Provider
      ? `${mediaction?.Provider?.NPI}`
      : "";
    const tempContacts = {
      id: mediaction._id,
      providerName: providerName,
      fillRequestDate: "-",
      timeRemaining: getTimeRemaining(mediaction?.Sig),
      dose: getDoseMedication(mediaction?.Sig),
      prescription: mediaction?.Sig?.Drug?.DrugDescription || "",
      date: mediaction?.CreatedDate,
      expiredDate: mediaction?.StopDate,
      providerNPI,
      drug: mediaction?.Sig?.Drug || {},
      type:
        isValidDate(new Date(mediaction?.StopDate)) &&
        new Date(mediaction?.StopDate) > new Date()
          ? "active"
          : "past",
    };
    medicationNewData.push(tempContacts);
  }
  return medicationNewData;
}

export function parsePrescriptions(glassesData, contactsData, mediactionData) {
  const data = {
    glasses: [],
    contacts: [],
    medications: [],
  };

  data.glasses = parseGlasses(glassesData);
  data.contacts = parseContacts(contactsData);
  data.medications = parseMedications(mediactionData);

  return data;
}
