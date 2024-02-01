// Get the URL search parameters
const urlParams = new URLSearchParams(window.location.search);
    
// Get the selected values from the URL query parameters
const mytypology = urlParams.get('typology');
const county = urlParams.get('county');
const adults = urlParams.get('adults');
const children = urlParams.get('children');
const year = urlParams.get('year');
const budget = urlParams.get('budget');
const floors = urlParams.get('floors');

// Update the content with the selected values
document.getElementById('mytypology').textContent = mytypology || 'N/A';
document.getElementById('county').textContent = county || 'N/A';

// Calculate and set the total occupants, handling null or undefined values
const totalOccupants = (parseInt(adults) || 0) + (parseInt(children) || 0);
document.getElementById('occupants').textContent = totalOccupants;

document.getElementById('year').textContent = year || 'N/A';
document.getElementById('budget').textContent = budget || 'N/A';
document.getElementById('floors').textContent = floors || 'N/A';



// JavaScript code
function updateImages(typology) {
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");

    // Update the image sources based on the typology
    if (typology === "Apartment") {
      image1.src = "typology/apartment/apartment1.jpg";
      image2.src = "typology/apartment/apartment2.jpg";
      image3.src = "typology/apartment/apartment3.jpg";
    } else if (typology === "Bungallow") {
      image1.src = "typology/bungallow/bungallow1.jpg";
      image2.src = "typology/bungallow/bungallow2.jpg";
      image3.src = "typology/bungallow/bungallow3.jpg";
    } else if (typology === "Townhouse") {
      image1.src = "typology/townhouse/townhouse1.jpeg";
      image2.src = "typology/townhouse/townhouse2.jpg";
      image3.src = "typology/townhouse/townhouse3.png";
    } else if (typology === "Luxury Villa") {
      image1.src = "typology/luxury/luxury1.jpg";
      image2.src = "typology/luxury/luxury2.jpg";
      image3.src = "typology/luxury/luxury3.jpg";
    } else if (typology === "Customize") {
      image1.src = "typology/customize/Customize1.jpg";
      image2.src = "typology/customize/Customize2.jpg";
      image3.src = "typology/customize/Customize3.jpg";
    } else if (typology === "Site Works") {
      image1.src = "typology/siteworks/SiteWorks.jpg";
      image2.src = "typology/siteworks/SiteWorks_2.jpg";
      image3.src = "typology/siteworks/SiteWorks_3.jpg";
    } else {
      // Default images if typology is not recognized
      image1.src = "typology/default/default1.jpg";
      image2.src = "typology/default/default2.jpg";
      image3.src = "typology/default/default3.jpg";
    }
  }

// Update the images based on the typology value
updateImages(mytypology);