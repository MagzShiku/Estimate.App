function updateBudget() {
    // Get the selected budget value
    var selectedBudget = document.getElementById('budget').value;

    // Store the selected budget in localStorage
    localStorage.setItem('selectedBudget', selectedBudget);

    // Update the 'Y' value in the summary section
    document.getElementById('budgetedCost').innerText = 'Ksh. ' + selectedBudget;
}

// Add this block to set the initial value
document.addEventListener("DOMContentLoaded", function () {
    // Get the initially selected budget value
    var initialBudget = document.getElementById('budget').value;

    // Store the initially selected budget in localStorage
    localStorage.setItem('selectedBudget', initialBudget);

    // Update the 'Y' value in the summary section
    document.getElementById('budgetedCost').innerText = 'Ksh. ' + initialBudget;
});
           
