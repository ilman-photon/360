export default function getLanguage(data) {
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
