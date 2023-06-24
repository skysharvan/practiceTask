// you'll need to modify it to work without the prompt function.
//  One way to achieve this is by using the readline module in Node.js
// const readline = require('readline');

// // Create an interface for reading input
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt the user for their name
// rl.question('What is your name? ', function(name) {
//   // Display a personalized greeting in the console
//   console.log('Hello, ' + name + '! Welcome to the program.');

//   // Close the interface
//   rl.close();
// });

function myFunction() {
  let name = prompt("Please enter your name");
  console.log(name);
  if (name != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + name + "! How are you today?";
    console.log(
      (document.getElementById("demo").innerHTML =
        "Hello " + name + "! How are you today?")
    );
  }
}
