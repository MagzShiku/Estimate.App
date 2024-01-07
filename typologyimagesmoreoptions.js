// JavaScript code
function updateImages(typology) {
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var image3 = document.getElementById("image4");
    var image3 = document.getElementById("image5");
    var image3 = document.getElementById("image6");
  
    // Update the image sources based on the typology
    if (typology === "Typology 1") {
      image1.src = "typology1.jpg";
      image2.src = "typology1_2.jpg";
      image3.src = "typology1_3.jpg";
    } else if (typology === "Typology 2") {
      image1.src = "typology2.jpg";
      image2.src = "typology2_2.jpg";
      image3.src = "typology2_3.jpg";
    } else if (typology === "Typology 3") {
      image1.src = "typology3.jpg";
      image2.src = "typology3_2.jpg";
      image3.src = "typology3_3.jpg";
    } else if (typology === "Typology 4") {
        image1.src = "typology3.jpg";
        image2.src = "typology3_2.jpg";
        image3.src = "typology3_3.jpg";
    } else if (typology === "Typology 5") {
        image1.src = "typology3.jpg";
        image2.src = "typology3_2.jpg";
        image3.src = "typology3_3.jpg";
    } else if (typology === "Typology 6") {
        image1.src = "typology3.jpg";
        image2.src = "typology3_2.jpg";
        image3.src = "typology3_3.jpg";
    } else {
      // Default images if typology is not recognized
      image1.src = "default1.jpg";
      image2.src = "default2.jpg";
      image3.src = "default3.jpg";
    }
}