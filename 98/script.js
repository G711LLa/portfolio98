document.addEventListener('DOMContentLoaded', function() {
    // Галерея изображений для портфолио
    const images = [
        'images/food1.jpg',
        'images/food2.jpg',
        'images/food3.jpg',
        'images/food4.jpg'
        // Добавьте сюда больше ссылок на изображения
    ];

    const galleryContainer = document.querySelector('#portfolio .gallery');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        galleryContainer.appendChild(imgElement);
    });
});
