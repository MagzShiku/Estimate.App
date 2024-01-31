// summary.js

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve values from the URL search parameters
    const typology = decodeURIComponent(new URLSearchParams(window.location.search).get('typology')) || "";
    const floors = decodeURIComponent(new URLSearchParams(window.location.search).get('floors')) || "";
    const county = decodeURIComponent(new URLSearchParams(window.location.search).get('county')) || "";
    const occupants = decodeURIComponent(new URLSearchParams(window.location.search).get('adults')) || "";
    const year = decodeURIComponent(new URLSearchParams(window.location.search).get('year')) || "";
    const budget = decodeURIComponent(new URLSearchParams(window.location.search).get('budget')) || "";
    const baseCost = parseFloat(decodeURIComponent(new URLSearchParams(window.location.search).get('baseCost'))) || 0;
    const fenceCost = parseFloat(decodeURIComponent(new URLSearchParams(window.location.search).get('fenceCost'))) || 0;
    const totalEstimatedCost = parseFloat(decodeURIComponent(new URLSearchParams(window.location.search).get('totalEstimatedCost'))) || 0;

    // Display the retrieved values in the summary section
    document.getElementById("mytypology").textContent = typology;
    document.getElementById("floors").textContent = floors;
    document.getElementById("county").textContent = county;
    document.getElementById("occupants").textContent = occupants;
    document.getElementById("year").textContent = year;
    document.getElementById("budget").textContent = budget;

    // Display the base cost, fence cost, and total cost
    document.getElementById('baseCost').innerText = "Ksh. " + baseCost.toFixed(2);
    document.getElementById('fenceCost').innerText = "Ksh. " + fenceCost.toFixed(2);

    // Set the total estimated cost in the hidden input field
    document.getElementById('totalEstimatedCost').value = totalEstimatedCost.toFixed(2);

    // Calculate and update the total estimated cost
    updateTotalEstimatedCost();

    // Calculate the difference between budgeted cost and total estimated cost
    var difference = baseCost - totalEstimatedCost;

    // Set the calculated values in the summary section
    document.getElementById("budgetedCost").textContent = "Ksh. " + budget;
    document.getElementById("difference").textContent = "Ksh. " + difference.toFixed(2);

    // Determine remarks based on the difference (you can customize this logic)
    var remarks = (difference >= 0) ? "Project is Viable. Make changes?" : "Budget exceeded. Consider adjustments.";
    document.getElementById("remarks").textContent = remarks;
});
