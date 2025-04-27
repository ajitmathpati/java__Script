# Practicing JavaScript: `while` Loop

The `while` loop in JavaScript is used to execute a block of code as long as a specified condition evaluates to `true`.

## Syntax:
```javascript
while (condition) {
    // Code to execute
}
```

## Key Points:
- The condition is evaluated before the loop body is executed.
- If the condition is `false` initially, the loop body will not execute at all.
- Be cautious to avoid infinite loops by ensuring the condition eventually becomes `false`.

## Example:
```javascript
let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++; // Increment to avoid infinite loop
}
```

In this example:
- The loop runs as long as `count` is less than 5.
- The `count` variable is incremented in each iteration.

## Practice:
1. Write a `while` loop to print numbers from 1 to 10.
2. Use a `while` loop to calculate the sum of numbers from 1 to 100.
3. Experiment with breaking out of a `while` loop using the `break` statement.

Happy coding!