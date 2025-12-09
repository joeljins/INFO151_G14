/*
File name: ./INFO151_G14/js/match.js
Purpose: INFO151-900 - HW2 homepage
Authors: Joel Jins, Vincent Lamb
DrexelId: jj3249, vdl29
Complete Date: 2025/12/09
*/

// Array of animal image identifiers (numbers) for easy creation of image src
let animals = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Use querySelector to get the container element where all animals will be added
let animalContainer = document.querySelector(".animal-container");

// Loop through each animal identifier to create corresponding HTML elements
animals.forEach(item => {

    // Create a div that will serve as a dropzone for each animal image
    const animal = document.createElement("div");
    animal.className = "dropzone";
    
    // Add event listener to allow items to be dragged over this div
    animal.addEventListener("dragover", e => {
        e.preventDefault();
    });

    // Add event listener to handle drop action
    animal.addEventListener("drop", e => {
        e.preventDefault(); 
        const returnAnimal = document.querySelector('.dragging'); // get currently dragged animal
        if (returnAnimal) { 
            animal.appendChild(returnAnimal); // append the dragged animal to this dropzone
            returnAnimal.classList.remove("dragging"); // remove dragging class after drop
        }
    });

    // Create the image element representing the animal
    const image = document.createElement("img");
    image.src = `../images/animal${item}.jpg`; // set the src based on the animal number
    image.className = "card"; // assign card class for styling
    image.draggable = "true"; // make the image draggable

    // Add event listener to handle the start of dragging
    image.addEventListener("dragstart", () => {
        image.classList.add("dragging"); // add dragging class to identify the element being dragged
    });

    // Append the image to the dropzone div
    animal.appendChild(image);

    // Append the dropzone div to the main animal container
    animalContainer.appendChild(animal);
});

// Array of person identifiers (letters) for easy creation of image src
let people = ['A', 'B', 'C', 'D', 'E', 'F'];

// Get the container element where all people cards will be added
let matchContainer = document.querySelector(".match-container");

// Loop through each person identifier to create corresponding HTML elements
people.forEach(item => {

    // Create a div to hold each person and their dropzone
    const match = document.createElement("div");

    // Create a div for the person's card (image)
    const person = document.createElement("div");
    person.className = "card"; // assign card class for styling

    // Create the image element for the person
    const image = document.createElement("img");
    image.src = `../images/person${item}.jpg`; // set the src based on the person letter

    // Append the image to the person div
    person.appendChild(image);

    // Append the person div to the match container div
    match.appendChild(person);

    // Create a dropzone for this person where animals can be dropped
    const dropZone = document.createElement("div");
    dropZone.className = "dropzone"; // assign dropzone class for styling and drag/drop functionality

    // Allow dragover events so that drop is possible
    dropZone.addEventListener("dragover", e => {
        e.preventDefault();
    });

    // Handle dropping of a dragged animal into this person's dropzone
    dropZone.addEventListener("drop", e => {
        e.preventDefault(); // prevent default drop behavior
        const animal = document.querySelector('.dragging'); // get the dragged animal element
        if (animal) { 
            dropZone.appendChild(animal); // append the dragged animal to this dropzone
            animal.classList.remove("dragging"); // remove dragging class after drop
        }
    });

    // Append the dropzone to the match div
    match.appendChild(dropZone);

    // Append the full match div (person + dropzone) to the main match container
    matchContainer.appendChild(match);
});
