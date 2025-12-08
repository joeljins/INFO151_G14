const items = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.dropzone');

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
        zone.classList.add('hover');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('hover');
    });

    zone.addEventListener('drop', () => {
        const draggedItem = document.querySelector('.dragging');
        zone.appendChild(draggedItem);
        zone.classList.remove('hover');
    });
});
