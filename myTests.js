import { Selector } from 'testcafe';

fixture`Calculator Test`
    .page('./src/index.html');

    // Test 1
test('Basic Arithmetic Operations', async t => {
    // Define selectors for buttons and result field
    const oneButton = Selector('button').withText('1');
    const twoButton = Selector('button').withText('2');
    const plusButton = Selector('button').withText('+');
    const equalsButton = Selector('button').withText('=');
    const resultField = Selector('#result');

    // Perform arithmetic operations
    await t
        .click(oneButton)
        .click(plusButton)
        .click(twoButton)
        .click(equalsButton);

    // Check if the result is correct (3 in this case)
    await t.expect(resultField.value).eql('3');
});


// Test 2
test('Division by zero should show an error', async t => {
    // Define selectors for buttons and result field
    const fourButton = Selector('button').withText('4');
    const divideButton = Selector('button').withText('/');
    const zeroButton = Selector('button').withText('0');
    const equalsButton = Selector('button').withText('=');
    const resultField = Selector('#result');

    // Perform division by zero
    await t
        .click(fourButton)
        .click(divideButton)
        .click(zeroButton)
        .click(equalsButton);

    // Check if the result is 'Infinity'
    await t.expect(resultField.value).eql('Infinity');
});

// Test 3
test('Multiplication of two numbers', async t => {
    // Define selectors for buttons and result field
    const threeButton = Selector('button').withText('3');
    const multiplyButton = Selector('button').withText('*');
    const fourButton = Selector('button').withText('4');
    const equalsButton = Selector('button').withText('=');
    const resultField = Selector('#result');

    // Perform multiplication
    await t
        .click(threeButton)
        .click(multiplyButton)
        .click(fourButton)
        .click(equalsButton);

    // Check if the result is '12'
    await t.expect(resultField.value).eql('12');
});