function submitForm() {
    var year = document.getElementById("year").value;

    // Perform any desired actions with the selected values
    console.log("year: " + year);

    // Redirect to the next page with the selected values as query parameters
    window.location.href = "testreceiver.html?year=" + year;

    // Prevent the form from submitting through the default action
    return false;
}
