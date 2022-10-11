export function appointmentParser(data = {}) {
  const firstname = data.provider?.firstName || "";
  const lastName = data.provider?.lastName ? ` ${data.provider?.lastName}` : "";
  const designation = data.provider?.designation
    ? `, ${data.provider?.designation}`
    : "";
  const name = `${firstname}${lastName}${designation}`;

  return {
    appointmentId: data.appointmentNo,
    providerInfo: {
      providerId: data.provider?._id,
      name,
      position: data.provider?.address?.name || "",
      address: data.provider?.address || "",
      rating: data.provider?.rating || "",
      phoneNumber: data.provider?.phone || "",
      image: data.provider?.profilePhoto?.digitalAsset.uid || "",
      location: {
        latitude: data.provider?.latitude || "",
        longitude: data.provider?.longitude || "",
      },
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
      insuranceCarrier: [],
    },
  };
}
