import { writeFile } from 'fs/promises';
import fetch from 'node-fetch';

const accessToken = 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ1c2MzOTAtZmJkYjBlZDQ0ZGI4YjgwODdkZDM1MGY1ZWE5YWU3MjU4MzMzMTExMTY0NTY3MzE3NjUxIiwiZXhwIjoxNzAwMjgzMDIwLCJpYXQiOjE3MDAyODEyMTUsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiZGVkYTdjMzgtZjE2YS01ZGIzLTgzZmUtYTFjZmY2ODc0NTg2Iiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE3MDAyODEyMjA4MjYwNDQ0OTYsImF6cCI6InVzYzM5MC1mYmRiMGVkNDRkYjhiODA4N2RkMzUwZjVlYTlhZTcyNTgzMzMxMTExNjQ1NjczMTc2NTEifQ.hbnK13Uzcivy4WVDWWgMhwjCTzDkDWoTIH2rx9VqH6rNukEonyNrTlKgxjXJkVMtwqAr-Xv2cfqXgcdjL_Wb8I-iWpyzSzV81uNp589_Fyh4gikRtBQ4wlsYJTMxM4_aBXav9UyRTs4Nk46MB-ReVZNRyP3DWdT5rBKG3wFgJEcjUya5HNyAlVOAr-KQ7ppNsBZusWQZgT35oWfm_TtJ3sxUQslAHdS4KfMKBg7nZqJCuzd46aJL6Tv4R6kqRbVQcWwWIdyR2Lgfw7m8qKS2up1NGuR5ctkVEAMts06xDiuUjXv7N83nrFYHotm5LqbJF46XWd-tsB2lntBKyTZNMw'; 
const brand = 'Kroger'; // Replace with your desired brand
const searchTerm = 'pork'; // Replace with your desired search term
const locationId = '01400943'; // Replace with your desired locationId

// Kroger API endpoint for product search
const apiUrl = `https://api.kroger.com/v1/products?filter.brand=${brand}&filter.term=${searchTerm}&filter.locationId=${locationId}`;

// Function to fetch data from the Kroger API and write to a JSON file
async function fetchAndWriteKrogerProductData() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Process the response to include only the "price" section
    const processedData = data.data.map(product => ({
      productId: product.productId,
      upc: product.upc,
      price: product.items.map(item => item.price),
    }));

    // Write the processed Kroger Product Search data to chicken.json
    await writeFile('pork.json', JSON.stringify({ data: processedData }, null, 2));
    console.log('Processed product data written to pork.json');

  } catch (error) {
    console.error('Error fetching or writing Kroger Product Search data:', error.message);
  }
}

// Call the function to fetch and write product search data
fetchAndWriteKrogerProductData();
