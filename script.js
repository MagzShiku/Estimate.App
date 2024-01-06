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

/*this is for the dropdown menu of click2 */
function submitForm() {
    var location = document.getElementById("location").value;
    var adults = document.getElementById("adults").value;
    var floors = document.getElementById("floors").value;
    var budget = document.getElementById("budget").value;
    var children = document.getElementById("children").value;
    var year = document.getElementById("year").value;

    // Perform any desired actions with the selected values
    console.log("location: " + location);
    console.log("adults: " + adults);
    console.log("floors: " + floors);
    console.log("budget: " + budget);
    console.log("children: " + children);
    console.log("year: " + year);
}