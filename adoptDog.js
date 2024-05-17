//adoptDog.js
document.addEventListener("DOMContentLoaded", function () {
    const dogs = [
        { name: "Buddy", breed: "Labrador Retriever" },
        { name: "Max", breed: "Golden Retriever" },
        { name: "Bella", breed: "Poodle" },
        { name: "Prada", breed: "Husky" }
    ];

    const dogList = document.querySelector("main");

    function createDogListing(dog) {
        const listing = document.createElement("div");
        listing.classList.add("dog-listing");
        listing.innerHTML = `
            <h2>${dog.name}</h2>
            <p>Breed: ${dog.breed}</p>
            <button>Adopt ${dog.name}</button>`;
        dogList.appendChild(listing);
    }

    dogs.forEach(createDogListing);
});
