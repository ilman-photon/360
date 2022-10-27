export function getLanguage(data) {
  const language = [];
  let count = 1;
  while (true) {
    if (data[`language${count}`]) {
      language.push(data[`language${count}`]);
      count++;
    } else {
      break;
    }
  }
  return language;
}

export function getArrayValue(data) {
  if (data) {
    const isMultipleValue = Array.isArray(data);
    return !isMultipleValue ? [data] : data;
  } else {
    return [];
  }
}

export function formattedAddress(address) {
  return (
    <>
      {address.addressLine1}
      <br />
      {address.addressLine2 && (
        <>
          {address.addressLine2}
          <br />
        </>
      )}
      {address.city && `${address.city},`}{" "}
      {address.state && `${address.state},`} {address.zip}
    </>
  );
}
