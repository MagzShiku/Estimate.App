//GETS VALUE OF CLICK2//
// Get the dropdown element
const dropdown = document.getElementById('myDropdown');

// Get the selected value
const selectedValue = dropdown.value;

// Compute the values at the end of the presentation
console.log(selectedValue);


//CHECKING VIABILTY OF PROJECT
// Function to check project viability
function checkProjectViability() {
    const budgetedCostElement = document.getElementById('budgetedCost');
    const estimatedCostElement = document.getElementById('totalEstmatedCost');
    const remarksElement = document.getElementById('remarks');

    const budgetedCost = parseFloat(budgetedCostElement.textContent.replace('Ksh. ', ''));
    const estimatedCost = parseFloat(estimatedCostElement.textContent.replace('Ksh. ', ''));

    if (budgetedCost < estimatedCost) {
        remarksElement.textContent = 'Project is not viable. Make changes?';
    } else {
        remarksElement.textContent = 'Project is viable.';
    }
}

// Call the function when the page loads
window.addEventListener('load', checkProjectViability);