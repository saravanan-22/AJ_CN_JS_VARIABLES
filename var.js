let name = prompt(`Enter the name`);

function functionName(params) {
  if (name == fruits) {
    let fruits = "mango, apple, greps";
    // console.log(fruits);
  } else {
    // console.log("enter the valid name");
    console.log("apple");
  }
}
functionName();


// let name = prompt(Enter the name);: This line uses the prompt() function to display a dialog box asking the user to enter a name. 
// The entered name is then stored in the variable name.

// function functionName(params) {: Here, a function named functionName is declared. 
// The params parameter is defined, but it's not used in the function body.

// if (name == fruits) {: This is an if statement that checks if the value stored in the variable name is equal to the value stored in the variable fruits. However, there's an issue here: fruits is not defined before this point, so this condition will not work as expected.

// let fruits = "mango, apple, greps";: This line tries to define a variable fruits with a string value containing a list of fruits. 
// However, this line of code is inside the if block, which means the variable fruits is only defined if the condition name == fruits is true. 
// Since fruits is not defined before this point, the condition will never be true.

// console.log("apple");: If the condition in the if statement is not met (i.e., name is not equal to fruits), this line will be executed, and the string "apple" will be printed to the console.

// }: This curly brace marks the end of the if block.

// } else {: This line begins the else block, which is executed if the condition in the if statement is not met.

// console.log("apple");: Inside the else block, this line will also print "apple" to the console. This line is redundant, as it's the same as the one in the if block.

// }: This curly brace marks the end of the else block.

// functionName();: This line calls the functionName function that you've defined earlier. Since the condition in the if statement involving fruits is not correctly defined, the output will be the same regardless of the user's input.