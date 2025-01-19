document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".service-image"); // Select all carousels

    carousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll(".image-slide"); // Slides for this carousel
        const prevBtn = carousel.querySelector(".prev-btn"); // Previous button for this carousel
        const nextBtn = carousel.querySelector(".next-btn"); // Next button for this carousel
        let currentIndex = 0; // Current index for this carousel

        // Function to update slide positions
        function updateSlidePosition() {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        }

        // Add event listener for the previous button
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateSlidePosition();
        });

        // Add event listener for the next button
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlidePosition();
        });
    });
});
