function selectTypology(typology, baseCost) {
    // Set the selected typology and base cost in the hidden input fields
    document.getElementById('selectedTypology').value = typology;
    document.getElementById('baseCost').value = baseCost;
}

document.getElementById('myForm').addEventListener('submit', function() {
    // Calculate the fence cost based on the selected typology
    var selectedTypology = document.getElementById('selectedTypology').value;
    var fenceCost = 0;

    if (selectedTypology === 'Townhouse') {
        fenceCost = 5000; // Set the fence cost for the Townhouse typology
    } else if (selectedTypology === 'luxury') {
        fenceCost = 10000; // Set the fence cost for the Luxury Villa typology
    }

    // Set the fence cost in the hidden input field
    document.getElementById('fenceCost').value = fenceCost;

    // Calculate the total cost
    var baseCost = parseFloat(document.getElementById('baseCost').value);
    var totalCost = baseCost + fenceCost;

    // Set the total cost in the hidden input field
    document.getElementById('totalCost').value = totalCost;
});
