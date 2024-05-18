// script.js

export async function fetchData(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
    }
    return response.json();
}

export function createDogOption(dog) {
    const option = document.createElement("option");
    option.text = dog.name;
    option.value = dog.id;
    return option;
}

export function displayDogInfo(selectedDog, dogInfoContainer) {
    dogInfoContainer.innerHTML = "";

    const image = document.createElement("img");
    image.src = selectedDog.image.url;
    image.alt = selectedDog.name;
    dogInfoContainer.appendChild(image);

    const infoParagraph = document.createElement("p");
    infoParagraph.textContent = `Breed: ${selectedDog.breed_group}\nTemperament: ${selectedDog.temperament}`;
    dogInfoContainer.appendChild(infoParagraph);
}
