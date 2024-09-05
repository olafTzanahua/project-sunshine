let currentIndex = 0;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const polaroids = document.querySelectorAll('.polaroid');
    const totalPolaroids = polaroids.length;

    // Mueve el carrusel
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalPolaroids - 1;
    } else if (currentIndex >= totalPolaroids) {
        currentIndex = 0;
    }

    const offset = currentIndex * polaroids[0].offsetWidth;
    carouselInner.style.transform = `translateX(-${offset}px)`;
}

function flipCard(element) {
    // Alterna la clase "flipped" para hacer girar la polaroid
    element.classList.toggle('flipped');
}
