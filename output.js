document.addEventListener("DOMContentLoaded", function() {
    const API_KEY = 'live_f7E1LRLlXdnm3H81y935qczDOHKqwxYOgvRNNitWTvFzcxS55x5XQUH0XZH7EL04';

    async function fetchData(url, options) {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        return response.json();
    }

    function createDogOption(dog) {
        const option = document.createElement("option");
        option.text = dog.name;
        option.value = dog.id;
        return option;
    }

    function displayDogInfo(selectedDog, dogInfoContainer) {
        dogInfoContainer.innerHTML = ""; // Clear previous content

        const image = document.createElement("img");
        image.src = selectedDog.image.url;
        image.alt = selectedDog.name;
        dogInfoContainer.appendChild(image);

        const infoParagraph = document.createElement("p");
        infoParagraph.textContent = `Breed: ${selectedDog.breed_group}\nTemperament: ${selectedDog.temperament}`;
        dogInfoContainer.appendChild(infoParagraph);
    }

    async function populateDogNamesDropdown() {
        try {
            const apiData = await fetchData("https://api.thedogapi.com/v1/breeds", {
                headers: {
                    'x-api-key': API_KEY
                }
            });

            const dogNamesDropdown = document.getElementById("dogNamesDropdown");
            if (!dogNamesDropdown) {
                throw new Error('Dropdown element not found');
            }

            apiData.forEach(dog => {
                const option = createDogOption(dog);
                dogNamesDropdown.add(option);
            });

            // Add event listener to the dropdown to display image and info when a dog is selected
            dogNamesDropdown.addEventListener("change", function() {
                const selectedDogId = this.value;
                const selectedDog = apiData.find(dog => dog.id == selectedDogId);

                if (selectedDog) {
                    const dogInfoContainer = document.getElementById("dogInfoContainer");
                    displayDogInfo(selectedDog, dogInfoContainer);
                }
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    populateDogNamesDropdown();
});
