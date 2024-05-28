/*24• More Conditional Tests: 

//• You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality  with strings*/
console.log("Equality test with strings: ", "Apple" === "Apple");

//• Tests for Inequality  with strings.
console.log("Inequality test with strings: ", ("Apple" as string) != "orange");

//• Tests using the lower case function.
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

//• Numerical tests involving equality ,
console.log("Equality test with numbers:", 11 === 11 );

//• Numerical tests involving Inequality.
console.log("Inquality test with numbers:", (11 as number )!=  35 );

//• Greater than.
console.log("Greater than test: ", 25 > 13);

//• Less than.
console.log("Less than test: ", 30 < 40);

//• Greater than or equal to.
console.log("Greater than or equal to test: ", 12 >= 13);

//• Less than or equal to.
console.log("Less than or equal to test: ", 8 <= 9);

//• Test using "and" operators.
console.log("And operator test: ", 7 === 7 && 5 > 3);

//• Test using "or" operators.
console.log("OR operator test: ", 25 === 25 || 8 < 3);

//• Test whether an item is in a array.
let fruits : string[] = ['Orange','Apple','Water Melon'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));

//• Test whether an item is not in a array.
console.log('Test "Banana" in the array: ', !fruits.includes("Banana"));


