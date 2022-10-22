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
    return "";
  }
}
