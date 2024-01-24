document.addEventListener("DOMContentLoaded", function() {
    // Get the year value from the URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedYear = urlParams.get('year');

    // Update the selected year in the page
    document.getElementById('selectedYear').textContent = selectedYear || 'N/A';

    // Update the images based on the selected year
    updateImages(selectedYear);
});

function updateImages(year) {
    var image1 = document.getElementById("image1");
    
    // Update the image sources based on the year
    if (year === "2024") {
        image1.src = "townhouse1.jpeg";
    } else if (year === "2025") {
        image1.src = "apartment1.jpg";
    } else if (year === "2026") {
        image1.src = "apartment2.jpg";
    } else {
        // Default images if year is not recognized
        image1.src = "default1.jpg";
    }
}

// testreceiver.js

// Function to be called when the Submit button is clicked
function onSubmit() {
    // Assuming you have a way to get the selected year value
    var selectedYearValue = document.getElementById('selectedYear').textContent;
    
    // Update the output with the chosen year value
    document.getElementById('chosenYear').textContent = selectedYearValue;
}

// Attach the onSubmit function to the click event of the Submit button
document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.querySelector('.test2 button[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', onSubmit);
    }
});


