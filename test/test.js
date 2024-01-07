function submitForm() {
    var selectedYear = document.getElementById("year").value;

    // Redirect to the next page with the selected year as a query parameter
    window.location.href = "testreceiver.html?year=" + selectedYear;

    // Prevent the form from submitting through the default action
    return false;
}
