// Day 1
// console.log("Day 1");

// Write a method, digital_root(num). It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.

// https://en.wikipedia.org/wiki/Digital_root#Congruence_formula

function digitalRoot(num) {
  if (num === 0) {
    return 0;
  }
  return num === 9 ? 9 : num % 9;
}

// function root(num){
//     var total = 0;
//     if(num.toString().length == 1){
//         var iNum = parseInt(num);
//         return iNum;
//     }else{
//         num.toString().split("").forEach( function(value){
//             var iValue = parseInt(value);
//             return total += iValue;
//         });
//         return root(total);
//     }
// }

console.log(digitalRoot(0));
console.log(digitalRoot(9));
console.log(digitalRoot(82));
console.log(digitalRoot(77));

// Write a function that takes a message and an increment amount and
// outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation. Preserve spaces.

// writing this with the assumption that there are no numbers
function genCharArray(charA, charZ) {
  let letters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
}

function caesarCipher(string, shift) {
  let alphabet = genCharArray("a", "z");
  let encodedStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      encodedStr += string[i];
    } else {
      let oldIndex = alphabet.indexOf(string[i]);
      let newIndex = (oldIndex + shift) % alphabet.length;

      encodedStr += alphabet[newIndex];
    }
  }
  return encodedStr;
}

// console.log(caesarCipher("abc def", 1));
// console.log(caesarCipher("abc def", 5));


// Day 2
console.log("Day 2");

// Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
// Solve it both iteratively and recursively.

function fibsIterative(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  let fibs = [0, 1];
  for (let i = fibs.length; i < num; i++) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs;
}
// console.log(fibsIterative(5));
// console.log(fibsIterative(2));
// console.log(fibsIterative(0));

function fibsRecursive(num) {
  if (num === 0) {
    return [];
  } else if (num === 1 ) {
    return [0];
  } else if (num === 2 ) {
    return [0, 1];
  }
  let prevFibs = fibsRecursive(num - 1);
  prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);

  return prevFibs;
}
// console.log(fibsRecursive(7));
// console.log(fibsRecursive(2));
// console.log(fibsRecursive(0));


// Write a JavaScript function that takes a string
// and returns true if it's a palindrome, false if it's not. Use JavaScript.
// This solution takes less time and memory than rebuilding the string backward
// and comparing the two.

function isPalindrome(string) {
  let length = string.length + 1;

  for (let i = 0; i < length/2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Write a method that takes a string as input.
// It should return true if the input is a valid IPv4 address
// (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).

// .match for regex

function validIP(string) {
  if (!string.match(/^\d+(\.\d+){3}$/)) {
    return false;
  }
  let nums = string.split(".").map(el => parseInt(el));
  return nums.every(num => num >= 0 && num <= 255);
}

// console.log(validIP("255.255.255.255"));
// console.log(validIP("25.2.2.2"));


// Day 3
console.log("Day 3");

// Implement the Array.prototype.map function in JavaScript.
// now map is very similar to each in that
// Array.each executes the given block for each element of the array, then returns the array itself
// whereas Array.map will also execute the given block for the element of the array but
// returns a new array whose values are the return values of each iteration of the block

// ES6
Array.prototype.myMap = function(blockFunction){
  let result = [];
  this.forEach((el) => {
    result.push(blockFunction(el));
  });
  return result;
};

// In a SQL db, you have two tables, an employees table and a departments table.
// Employees belong to only one department. Write a SQL query that, given a department name,
// finds all the employees in that department.
  // SELECT
  //   employee.*
  // FROM
  //   employees e
  // JOIN
  //   department d ON e.department_id = d.id
  // WHERE
  //   d.name = ?;

// SQL + ActiveRecord
// (from InstaCart) Write the following queries in SQL and in Rails:
//
// * a. "count all users",
// * b. "count all active users (you define what active means)",
// * c. "count all users who visited the site within a certain time period".

// * a.
// SQL
  SELECT
    COUNT(*)
  FROM
    users;
// ruby
  Users.count

// * b.
// SQL - assuming there is an 'active' column in the users table
  SELECT
    COUNT(*)
  FROM
    users
  WHERE
    users.active = true;
// ruby
  User.where(:active => "TRUE").count

// * c.
// SQL
  SELECT
    COUNT(*)
  FROM
    users
  WHERE
    users.last_login BETWEEN :time_period_start AND :time_period_end;
// ruby
  User.where(last_login: (time_period_start..time_period_end)).count

// folding Cipher
// Implement the Folding Cipher. It folds the alphabet in half and uses
// the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.

// JavaScript
function genCharArray(charA, charZ) {
  let letters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
}

function foldingCipher(string) {
  let alphabet = genCharArray("a", "z");
  let reversedAlphabet = alphabet.reverse();
  let foldedAlphabet = {};

  for (let i = 0; i < alphabet.length; i++) {
    foldedAlphabet[alphabet[i]] = reversedAlphabet[i]
  }

  string.split("").map(chr => foldedAlphabet[chr]).join("")
}

// Ruby
// Hash::[] creates a hash from a list of key-value pairs
// def folding_cipher(string)
//   folded_alphabet = Hash[('a'..'z').zip(('a'..'z').to_a.reverse)]
//   string.chars.map { |char| folded_alphabet[char] }.join
// end
