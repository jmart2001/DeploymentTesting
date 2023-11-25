const clientId = 'usc390-fbdb0ed44db8b8087dd350f5ea9ae7258333111164567317651';
const clientToken = 'i8-ZQLNaS3xmtqPMJnpeQrfFXW_21kWjEkykAufn';
const productId = 'YOUR_PRODUCT_ID'; //needs api

// Kroger API endpoint
const apiUrl = `https://api.kroger.com/v1/products/${productId}`;

// Function to fetch data from the Kroger API
async function fetchKrogerData() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': clientId,
        'Authorization': `Bearer ${clientToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Kroger API Data:', data);
    // Process the data as needed

  } catch (error) {
    console.error('Error fetching Kroger API data:', error.message);
  }
}

// Call the function to fetch data
fetchKrogerData();