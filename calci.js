const inputValue = document.getElementById("user-input");

function display(value) {
    if (inputValue.value === "0") {
        inputValue.value = value;
    } else {
        inputValue.value += value;
    }
}

function calculate() {
    inputValue.value = eval(inputValue.value);
}

function clearInput() {
    inputValue.value = "0";
}

function deleteLastChar() {
    inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1);
    if (inputValue.value.length === 0) {
        inputValue.value = "0";
    }
}