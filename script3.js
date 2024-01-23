// Function to check project viability
function checkProjectViability() {
    const estimatedCostElement = document.getElementById('totalEstimatedCost');
    const remarksElement = document.getElementById('remarks');

    const estimatedCost = parseFloat(estimatedCostElement.textContent.replace('Ksh. ', ''));

    if (estimatedCost > 0) {
        remarksElement.textContent = 'Project is viable.';
    } else {
        remarksElement.textContent = 'Project is not viable. Make changes?';
    }
}

// Call the function when the page loads
window.addEventListener('load', checkProjectViability);
