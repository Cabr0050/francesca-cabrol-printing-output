//Task 1
//Declare the variables a, b, and c
//let a, b, c; 

//If has value 3, b has value 5, and c doesn't have a value
let a = 3; 
let b = 5;
let c; // variable does not have value 

// alert( "description of alerted_value: " + alerted_value ); Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
let output = '';
output += 'let a = 3\n';
output += 'let b = 5\n';
output += 'let c = undefined\n';
output += '------\n';
output += 'a + b = ' + (a + b) + '\n'; 
output += 'a - b = ' + (a - b) + '\n'; 
output += 'a * b = ' + (a * b) + '\n'; 
output += 'a / b = ' + (a / b) + '\n'; 
output += 'a % b = ' + (a % b) + '\n'; 
output += '(a += b): ' + (a += b) + '\n'; 
output += '(a -= b): ' + (a -= b) + '\n'; 
output += '(a *= b): ' + (a *= b) + '\n';
output += '(a /= b): ' + (a /= b) + '\n';
output += '(a %= b): ' + (a %= b) + '\n';
output += '(a == b): ' + (a == b) + '\n';
output += '(a != b): ' + (a != b) + '\n';
output += '(a > b): ' + (a > b) + '\n';
output += '(a < b): ' + (a < b) + '\n';
output += '(!a && !c ): ' + (!a && !c ) + '\n';
output += '(!a || !c ): ' + (!a || !c ) + '\n';
alert(output); 

/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

//Task 2 
//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";

let first_name = 'Francesca'; 
let last_name = 'Cabrol'; 
let email = 'Cabr0050@algonquinlive.com'; 

output += '---------\n';
output += 'My name is' + ' ' + first_name + ' ' + last_name + '. ' + 'You can contact me at ' + email 

alert(output); 

