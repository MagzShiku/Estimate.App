function updateBudget() {
    // Get the selected budget value
    var selectedBudgetText = document.getElementById('budget').textContent;

    // Convert the budget value to an integer
    var selectedBudget = parseInt(selectedBudgetText);

    // Format the budget value with decimal places and commas
    var formattedBudget = selectedBudget.toLocaleString(undefined, { minimumFractionDigits: 2 });

    // Store the selected budget in localStorage
    localStorage.setItem('selectedBudget', selectedBudget);

    // Update the 'Y' value in the summary section
    document.getElementById('budgetedCost').innerText = 'Ksh. ' + formattedBudget;

    // Call the function to update the total estimated cost
    updateTotalEstimatedCost();
}

// Add this block to set the initial value
document.addEventListener("DOMContentLoaded", function () {
    // Get the initially selected budget value
    var initialBudget = document.getElementById('budget').textContent;

    // Store the initially selected budget in localStorage
    localStorage.setItem('selectedBudget', initialBudget);

    // Update the 'Y' value in the summary section
    document.getElementById('budgetedCost').innerText = 'Ksh. ' + initialBudget;
});
           



