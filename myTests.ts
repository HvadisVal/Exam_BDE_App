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

// Test 2 - Division by zero


