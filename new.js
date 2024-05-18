import { postData, putData } from './script.js';

const url = 'https://api.thedogapi.com/v1/breeds';

// POST request
const newDogData = {
    name: 'Fido',
    breed_group: 'Terrier',
    temperament: 'Energetic, Friendly'
};
try {
    const response = await postData(url, newDogData);
    console.log('New dog added:', response);
} catch (error) {
    console.error('Error adding new dog:', error);
}

// PUT request
const updatedDogData = {
    id: 342,
    name: 'Fido',
    breed_group: 'Terrier',
    temperament: 'Energetic, Friendly'
};
try {
    const response = await putData(url + '/342', updatedDogData);
    console.log('Dog updated:', response);
} catch (error) {
    console.error('Error updating dog:', error);
}
