// Add event listener for form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var year = document.getElementById("year").value;
    var budget = document.getElementById("budget").value;
    var county = document.getElementById("county").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var floors = document.getElementById("floors").value;

    // Get the selected typology from the hidden input field
    var mytypology = document.getElementById("selectedTypology").value;
    var selectedTypology = document.getElementById("selectedTypology").value;

    // Perform any desired actions with the selected values
    console.log("year: " + year);
    console.log("budget: " + budget);
    console.log("county: " + county);
    console.log("adults: " + adults);
    console.log("floors: " + floors);
    console.log("Selected typology: " + selectedTypology);

    // Call the selectTypology function to perform additional actions based on the selected typology
    selectTypology(selectedTypology);

    // Redirect to the next page with the selected values as query parameters
    window.location.href = "moreoptions.html?year=" + encodeURIComponent(year) +
    "&budget=" + encodeURIComponent(budget) +
    "&county=" + encodeURIComponent(county) +
    "&adults=" + encodeURIComponent(adults) +
    "&children=" + encodeURIComponent(children) +
    "&floors=" + encodeURIComponent(floors) +
    "&typology=" + encodeURIComponent(mytypology);
    "&typology=" + encodeURIComponent(selectedTypology);
});

function selectTypology(typology) {
    // Store the selected typology in the hidden input field
    document.getElementById("selectedTypology").value = typology;

    // Additional actions based on the selected typology
    console.log('Selected typology:', typology);

    // Get the base cost for the selected typology
    var baseCost = getBaseCost(typology);

    // Store the base cost in the hidden input field
    document.getElementById('baseCost').value = baseCost.toFixed(2);

    // Update the 'Base Cost' value in the summary section
    document.getElementById('baseCost').innerText = "Ksh. " + baseCost.toFixed(2);

    // Calculate and update the total estimated cost
    updateTotalEstimatedCost();
}


// Function to get the base cost for the selected typology
function getBaseCost(typology) {
    // Define base costs for different typologies
    var baseCosts = {
        'Townhouse': 55000,
        'luxrury': 75000,
        'Bungallow': 55000,
        'Apartment': 35000,
        'simplebulballow': 35000,
        'fencingetc': 15000
        // Add more typologies as needed
    };

    // Return the base cost for the selected typology, or 0 if not found
    return baseCosts[typology] || 0;
}

// Function to update the total estimated cost
function updateTotalEstimatedCost() {
    // Get the stored base cost and fence cost
    var baseCost = parseFloat(document.getElementById('baseCost').value) || 0;
    var fenceCost = parseFloat(document.getElementById('fenceCost').value) || 0;

    // Calculate the total estimated cost
    var totalEstimatedCost = baseCost + fenceCost;

    // Store the total estimated cost in the hidden input field
    document.getElementById('totalEstimatedCost').value = totalEstimatedCost.toFixed(2);

    // Update the 'Total Estimated Cost' value in the summary section
    document.getElementById('totalEstimatedCost').innerText = "Ksh. " + totalEstimatedCost.toFixed(2);
}


// Function to be called when the Submit button is clicked
function onSubmit() {
    // Assuming you have a way to get the selected year value
    var selectedYearValue = document.getElementById('mytypology').textContent;
    
    // Update the output with the chosen year value
    document.getElementById('housetype').textContent = selectedYearValue;
}



