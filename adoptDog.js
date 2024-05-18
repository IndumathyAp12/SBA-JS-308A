export function createDogListing(dog) {
    const listing = document.createElement("div");
    listing.classList.add("dog-listing");
    listing.innerHTML = `
        <h2>${dog.name}</h2>
        <p>Breed: ${dog.breed}</p>
        <button id="adopt-${dog.name}">Adopt ${dog.name}</button>`;
    const dogList = document.querySelector("main");
    dogList.appendChild(listing);
    const adoptButton = document.getElementById(`adopt-${dog.name}`);
    adoptButton.addEventListener("click", () => {
        adoptDog(dog);
    });
}

function adoptDog(selectedDog) {
        const index = dogs.findIndex(dog => dog.name === selectedDog.name);
    if (index !== -1) {
        dogs.splice(index, 1); 
        updateDogList(); 
        return `${selectedDog.name} has been adopted!`;
    } else {
        throw new Error(`${selectedDog.name} is not available for adoption.`);
    }
}

function updateDogList() {
    const dogList = document.querySelector("main");
    dogList.innerHTML = ""; 
    dogs.forEach(createDogListing); 
}

const dogs = [
    { name: "Buddy", breed: "Labrador Retriever" },
    { name: "Max", breed: "Golden Retriever" },
    { name: "Bella", breed: "Poodle" },
    { name: "Prada", breed: "Husky" }
];

document.addEventListener("DOMContentLoaded", function () {
    const dogList = document.querySelector("main");
    dogs.forEach(createDogListing);
});
