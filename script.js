// Function to append values to the display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to delete the last character
function deleteChar() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
