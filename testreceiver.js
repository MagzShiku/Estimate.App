// Get the URL search parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the selected year from the URL query parameters
const year = urlParams.get('year');

// Update the content with the selected year
document.getElementById('year').textContent = year;