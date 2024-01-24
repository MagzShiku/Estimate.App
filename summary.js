// summary.js

// Function to update the summary based on the typology output
function updateSummary(typology) {
    document.getElementById('fintypology').textContent = typology;
}

// Function to be called when the Submit button is clicked
function onSubmit() {
    // Assuming you have a way to get the typology value from the click3intro section
    var typologyValue = document.getElementById('mytypology').textContent;
    
    // Call the updateSummary function with the typology value
    updateSummary(typologyValue);
}

// Attach the onSubmit function to the click event of the Submit button
document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.querySelector('.click3submit input[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', onSubmit);
    }
});
