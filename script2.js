function submitForm() {
    var year = document.getElementById("year").value;
    var budget = document.getElementById("budget").value;
    var county = document.getElementById("county").value;

    // Perform any desired actions with the selected values
    console.log("year: " + year);
    console.log("budget: " + budget);
    console.log("county: " + county);

    // Redirect to the next page with the selected values as query parameters
    // window.location.href = "moreoptions.html?year=" + year;
    window.location.href = "moreoptions.html?year=" + encodeURIComponent(year) +
    "&budget=" + encodeURIComponent(budget) +
    "&county=" + encodeURIComponent(county);

    // Prevent the form from submitting through the default action
    return false;
}