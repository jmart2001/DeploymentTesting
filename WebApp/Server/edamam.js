import fetch from 'node-fetch';
import fs from 'fs';
const appId = 'c4d66932';
const appKey = '0d6eaf84d7be263ee293b9209c669219';
const query = 'chicken';

const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from Edamam API:', error);
    throw error;
  }
}

function saveToJsonFile(data, fileName) {
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, jsonData, (err) => {
    if (err) throw err;
    console.log(`Data has been saved to ${fileName}`);
  });
}

fetchData()
  .then((data) => saveToJsonFile(data, 'edamam_data.json'))
  .catch((error) => console.error(error));
