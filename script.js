/* the testimonial slideshow */
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide() {
        slides[currentSlide].style.display = "block";
        slides[currentSlide].animate([{ opacity: 0, transform: "translateX(100%)" }, { opacity: 1, transform: "translateX(0)" }], { duration: 500 });
    }

    function hideSlide() {
        slides[currentSlide].style.display = "none";
    }

    function nextSlide() {
        hideSlide();
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    }

    showSlide();
    setInterval(nextSlide, 5000);
});
