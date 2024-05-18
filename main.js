// main.js

import { fetchData, createDogOption, displayDogInfo } from './script.js';
import { createDogListing } from './adoptDog.js';
document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = 'live_f7E1LRLlXdnm3H81y935qczDOHKqwxYOgvRNNitWTvFzcxS55x5XQUH0XZH7EL04';

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

            dogNamesDropdown.addEventListener("change", function () {
                const selectedDogId = this.value;
                const selectedDog = apiData.find(dog => dog.id == selectedDogId);

                if (selectedDog) {
                    const dogInfoContainer = document.getElementById("dogInfoContainer");
                    displayDogInfo(selectedDog, dogInfoContainer);
                }
                                    adoptDog(selectedDogId)
                        .then(adoptionResult => {
                            console.log('Adoption Result:', adoptionResult);
                        })
                        .catch(error => {
                            console.error('Error adopting dog:', error.message);
                        });
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    populateDogNamesDropdown();
});
