function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        throw new Error("Division by zero is not allowed");
    }
}

function appendToResult(value) {
    var resultElement = document.getElementById('result');
    resultElement.value += value;
}

function clearResult() {
    var resultElement = document.getElementById('result');
    resultElement.value = '';
}

function calculateResult() {
    try {
        var resultElement = document.getElementById('result');
        var result = eval(resultElement.value);
        resultElement.value = result.toString();
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred");
        }
    }
}
