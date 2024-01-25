function submitForm() {
    var selectedYear = document.getElementById("year").value;

    // Redirect to the next page with the selected year as a query parameter
    window.location.href = "testreceiver.html?year=" + selectedYear;

    // Prevent the form from submitting through the default action
    return false;
}


// Collects the basecost from townhouse and % for fencing 
function selectTypology(typology, baseCost) {
    // Calculate total cost (base cost + 13% of base cost)
    var totalCost = baseCost + (0.13 * baseCost);
    var fenceCost= (0.13 * baseCost);
    
    // Display base cost and total cost
    document.getElementById('baseCost').textContent = baseCost;
    document.getElementById('fenceCost').textContent = fenceCost;
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}