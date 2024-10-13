function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateLog() {
    let currentValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(currentValue) && currentValue > 0) {
        document.getElementById("display").value = Math.log10(currentValue).toFixed(4);
    } else {
        document.getElementById("display").value = "Error";
    }
}

function calculateSqrt() {
    let currentValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        document.getElementById("display").value = Math.sqrt(currentValue).toFixed(4);
    } else {
        document.getElementById("display").value = "Error";
    }
}
