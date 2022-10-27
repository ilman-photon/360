import moment from "moment";

export function appointmentParser(data = {}) {
  const firstname = data.provider?.firstName || "";
  const lastName = data.provider?.lastName ? ` ${data.provider?.lastName}` : "";
  const designation = data.provider?.designation
    ? `, ${data.provider?.designation}`
    : "";
  const name = `${firstname}${lastName}${designation}`;

  const momentDate = new moment(
    `${data.appointmentDate} ${data.appointmentTime}`
  );
  const year = momentDate.format("YYYY");
  return {
    appointmentId: data._id,
    providerInfo: {
      providerId: data.provider?._id,
      name,
      position: data.provider?.address?.name || "",
      address: data.provider?.address || "",
      rating: data.provider?.rating / 2 || "",
      phoneNumber: data.provider?.workPhone || "",
      image: data.provider?.profilePhoto?.digitalAsset || "",
    },
    patientInfo: {
      name: `${data.patient?.firstName || ``}${
        data.patient?.lastName ? ` ${data.patient?.lastName}` : ``
      }`,
      firstname: data.patient?.firstName || ``,
      lastname: data.patient?.lastName || ``,
      dob: data.patient?.dob || ``,
    },
    appointmentInfo: {
      appointmentType: data.appointmentType?.name,
      date: `${data.appointmentDate} ${data.appointmentTime}`,
      insuranceCarrier: data.insurancePayers || [],
      state: data.state,
    },
    year,
  };
}

export function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    if (!map.has(key)) {
      map.set(key, [item]);
    } else {
      map.get(key).push(item);
    }
  });
  return map;
}
