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

    // Redirect to the next page with the selected values as query parameters
    window.location.href = "moreoptions.html?typology=" + encodeURIComponent(typology) + "&location=" + encodeURIComponent(location) + "&adults=" + encodeURIComponent(adults) + "&floors=" + encodeURIComponent(floors) + "&budget=" + encodeURIComponent(budget) + "&children=" + encodeURIComponent(children) + "&year=" + encodeURIComponent(year);

    // Prevent the form from submitting through the default action
    return false;
}

function selectTypology(typology) {
    // Store the selected typology in a variable or send it to the server for storage
    console.log('Selected typology:', typology);
    // You can also perform additional actions based on the selected typology
    // Here the additional actions I will need is to assign a unit cost for each typology
}
