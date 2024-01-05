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
    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value;
    var animal = document.getElementById("animal").value;
    var fruit = document.getElementById("fruit").value;
    var vehicle = document.getElementById("vehicle").value;
    var drink = document.getElementById("drink").value;

    // Perform any desired actions with the selected values
    console.log("Name: " + name);
    console.log("Color: " + color);
    console.log("Animal: " + animal);
    console.log("Fruit: " + fruit);
    console.log("Vehicle: " + vehicle);
    console.log("Drink: " + drink);
}