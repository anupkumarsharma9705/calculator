// Get the input field element
const resultField = document.getElementById('res');

// Function to handle button input
function Solve(value) {
    // Append the value to the input field
    resultField.value += value;
}

// Function to clear the input field
function Clear() {
    resultField.value = '';
}

// Function to remove the last character from the input field
function Back() {
    resultField.value = resultField.value.slice(0, -1);
}

// Function to evaluate the result
function Result() {
    try {
        // Replace 'x' with '*' for multiplication and evaluate the expression
        resultField.value = eval(resultField.value.replace(/x/g, '*'));
    } catch (error) {
        // Handle invalid input
        resultField.value = 'Error';
    }
}
