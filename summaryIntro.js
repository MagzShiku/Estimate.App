// JavaScript function to copy content
function copyContent() {
    // Get the source element
    var sourceElement = document.getElementById("source");

    // Get the content from the source element
    var contentToCopy = sourceElement.innerHTML;

    // Get the destination element
    var destinationElement = document.getElementById("destination");

    // Insert the copied content into the destination element
    destinationElement.innerHTML = contentToCopy;
}

// Call the copyContent function
copyContent();