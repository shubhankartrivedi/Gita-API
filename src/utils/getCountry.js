export default async function getCountryNameFromCode(code) {
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
    const data = await response.json();
    return data.name;
  }