let animals = ['1', '2', '3', '4', '5', '6'];
let animalContainer = document.querySelector(".animal-container");
animals.forEach(item => {
    const animal = document.createElement("div");
    animal.className = "dropzone";
    animal.addEventListener("dragover", e => {
        e.preventDefault();
    });
    animal.addEventListener("drop", e => {
        e.preventDefault();
        const returnAnimal = document.querySelector('.dragging');
        if (returnAnimal) {
            animal.appendChild(returnAnimal); 
            // animal.classList.remove("dragging");
        }
        });

    const image = document.createElement("img");
    image.src = `../images/animal${item}.jpg`;
    image.className = "card";
    image.draggable = "true";

    image.addEventListener("dragstart", () => {
        image.classList.add("dragging");
    });

    animal.appendChild(image);
    animalContainer.appendChild(animal);
})

let people = ['A', 'B', 'C', 'D', 'E', 'F'];
let matchContainer = document.querySelector(".match-container");

people.forEach(item => {
    const match = document.createElement("div");

    const person = document.createElement("div");

    const image = document.createElement("img");
    image.src = `../images/person${item}.jpg`;
    image.className = "card";

    person.appendChild(image);
    match.appendChild(person);

    const dropZone = document.createElement("div");
    dropZone.className = "dropzone";
    dropZone.addEventListener("dragover", e => {
        e.preventDefault();
    });
    dropZone.addEventListener("drop", e => {
        e.preventDefault();
        const animal = document.querySelector('.dragging');
        if (animal) {
            dropZone.appendChild(animal); 
            // animal.classList.remove("dragging");
        }
        });
    match.appendChild(dropZone);
    matchContainer.appendChild(match);
})