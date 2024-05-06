const display = document.getElementById("display");
let calculationDone = false;

// updates display with a number
function appendDisplay(input) {
  if (calculationDone || display.value === "Error") {
    clearDisplay(); // Clear the display only if a calculation has been done
    calculationDone = false;
  }
  display.value += input;
}

// updates the display with operator
function appendDisplayOperator(input) {
  const lastChar = display.value.slice(-1);
  if (!"+-*/".includes(lastChar)) {
    display.value += input;
    calculationDone = false; // Reset calculationDone flag when an operator is appended
  }
}

// clears the display
function clearDisplay() {
  display.value = "";
}

// deletes last element in display
function deleteDisplay() {
  display.value = display.value.toString().slice(0, -1);
}

// gives the result of the operation
function calculate() {
  try {
    display.value = eval(display.value);
    calculationDone = true; // Set calculationDone flag after a calculation
  } catch (error) {
    display.value = "Error";
  }
}
