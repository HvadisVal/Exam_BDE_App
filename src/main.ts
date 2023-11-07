function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x - y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
    if (y !== 0) {
        return x / y;
    } else {
        throw new Error("Division by zero is not allowed");
    }
}

function appendToResult(value: string): void {
    const resultElement = document.getElementById('result') as HTMLInputElement;
    resultElement.value += value;
}

function clearResult(): void {
    const resultElement = document.getElementById('result') as HTMLInputElement;
    resultElement.value = '';
}

function calculateResult(): void {
    try {
        const resultElement = document.getElementById('result') as HTMLInputElement;
        const result = eval(resultElement.value);
        resultElement.value = result.toString();
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred");
        }
    }
}
