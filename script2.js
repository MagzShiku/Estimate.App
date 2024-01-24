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

    // Perform any desired actions with the selected values
    console.log("year: " + year);
    console.log("budget: " + budget);
    console.log("county: " + county);
    console.log("adults: " + adults);
    console.log("floors: " + floors);

    // Redirect to the next page with the selected values as query parameters
    window.location.href = "moreoptions.html?year=" + encodeURIComponent(year) +
    "&budget=" + encodeURIComponent(budget) +
    "&county=" + encodeURIComponent(county) +
    "&adults=" + encodeURIComponent(adults) +
    "&children=" + encodeURIComponent(children) +
    "&floors=" + encodeURIComponent(floors) +
    "&typology=" + encodeURIComponent(mytypology);
});

function selectTypology(typology) {
    // Store the selected typology in the hidden input field
    document.getElementById("selectedTypology").value = typology;

    // You can also perform additional actions based on the selected typology
    console.log('Selected typology:', typology);
}



