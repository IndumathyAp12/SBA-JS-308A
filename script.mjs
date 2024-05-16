const API_KEY = 'live_f7E1LRLlXdnm3H81y935qczDOHKqwxYOgvRNNitWTvFzcxS55x5XQUH0XZH7EL04';

// Function to handle the fetched data
function handleData(data) {
  if (data.length > 0) {
    const imageData = data[0];

    // Display the image on the webpage
    const imageElement = document.createElement('img');
    imageElement.src = imageData.url;
    document.body.appendChild(imageElement);

    console.log("Image URL:", imageData.url);
    console.log("Image ID:", imageData.id);
  } else {
    console.log("No image data available");
  }
}

// Function to fetch data from the external API
function fetchData() {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    handleData(data); 
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

fetchData();
