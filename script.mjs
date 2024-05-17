document.addEventListener("DOMContentLoaded", function() {
    const API_KEY = 'live_f7E1LRLlXdnm3H81y935qczDOHKqwxYOgvRNNitWTvFzcxS55x5XQUH0XZH7EL04';

    async function populateDogNamesDropdown() {
        try {
            let apiData = await fetch(
                "https://api.thedogapi.com/v1/breeds",
                {
                    headers: {
                        'x-api-key': API_KEY
                    }
                }
            );

            if (!apiData.ok) {
                throw new Error('Failed to fetch data from the API');
            }

            let jsonData = await apiData.json();
            console.log("jsonData:", jsonData);

            let dogNamesDropdown = document.getElementById("dogNamesDropdown");
            console.log("dogNamesDropdown:", dogNamesDropdown);

            if (!dogNamesDropdown) {
                throw new Error('Dropdown element not found');
            }

            jsonData.forEach(dog => {
                let option = document.createElement("option");
                option.text = dog.name;
                option.value = dog.id;
                dogNamesDropdown.add(option);
            });

            // Add event listener to the dropdown to display image and info when a dog is selected
            dogNamesDropdown.addEventListener("change", async function() {
                let selectedDogId = this.value;
                let selectedDog = jsonData.find(dog => dog.id == selectedDogId);

                if (selectedDog) {
                    let dogInfoContainer = document.getElementById("dogInfoContainer");
                    dogInfoContainer.innerHTML = ""; // Clear previous content

                    let image = document.createElement("img");
                    image.src = selectedDog.image.url;
                    image.alt = selectedDog.name;
                    dogInfoContainer.appendChild(image);

                    let infoParagraph = document.createElement("p");
                    infoParagraph.textContent = `Breed: ${selectedDog.breed_group}\nTemperament: ${selectedDog.temperament}`;
                    dogInfoContainer.appendChild(infoParagraph);
                }
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    populateDogNamesDropdown();
});
