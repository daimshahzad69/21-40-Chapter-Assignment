// ----------Chapter 21 Changing Case---------

// ----------Question 1---------
var allLower = userInput.toLowerCase();

// ----------Question 2---------
x = x.toLowerCase();

// ----------Question 3---------
y = y.toUpperCase();

// ----------Question 4---------
var originalString = "Hello World";
var lowercaseString = originalString.toLowerCase();

// ----------Question 5---------
var myArray = ["Hello", "World"];
var lowercaseElement = myArray[0].toLowerCase();

// ----------Question 6---------
var myString = "Hello World";
alert(myString.toUpperCase());

// ----------Question 7---------
var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedCityName);

// ----------Chapter 22-25 Strings ---------

// ----------Question 1---------
var sameWords = "captain";
var slicedWords = sameWords.slice(2, 4);

console.log(slicedWords);

// ----------Question 2---------
var sameWords = "captain";
var numberOfCharacters = sameWords.length;

console.log(numberOfCharacters);

// ----------Question 3---------
var animal = "elephant";
var seg = animal.slice(2, 6);

console.log(seg);

// ----------Question 4---------
var myString = "Hello World";
var characterCount = myString.length;

console.log(characterCount);

// ----------Question 5---------
var myString = "exampleString";
var characterCount = myString.length;
var slicedString = myString.slice(1, characterCount - 3);

console.log(characterCount);
console.log(slicedString);

// ----------Question 6---------
var text = "To be or not to be.";
var indx = text.indexOf("be");

// ----------Question 7---------
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

// ----------Question 8---------
var text = "Let it go, let it go!";
var searchString = "go";
var lastIndex = text.lastIndexOf(searchString);
var indx = lastIndex !== -1 ? lastIndex : -1;

console.log(indx);

// ----------Question 9---------
if (myString.charAt(indexNum) !== "") {
    // Code block to be executed if the segment exists
} else {
    // Code block to be executed if the segment does not exist
}

// ----------Question 10---------
var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log(characterAtIndex2);

// ----------Question 11---------
var text = "Hello, World!";
var cha = text.charAt(9);

console.log(cha);

// ----------Question 12---------
var str = "Hello, World!";
var x = str.charAt(str.length - 1);

console.log(x);

// ----------Question 13---------
var input = "Hello, World!";
var cha = input.charAt(4);

console.log(cha);

// ----------Question 14---------
var myString = "example";
var desiredCharacter = "a";

if (myString.charAt(2) === desiredCharacter) {
    // Code block to be executed if the 3rd character is the desired character
} else {
    // Code block to be executed if the 3rd character is not the desired character
}

// ----------Question 15---------
var myString = "Hello";
var myArray = [];

for (var i = 0; i < myString.length; i++) {
    myArray[i] = myString.charAt(i);
}

console.log(myArray);

// ----------Question 16---------
var str = "I have 1 apple and 1 orange.";
var newStr = str.replace("1", "one");

console.log(newStr);

// ----------Question 17---------
var y = x.replace(/abc/g, "xyz");

// ----------Chapter 26 Rounding Numbers---------

// ----------Question 1---------
var number = 3.7;
var roundedNumber = Math.round(number);

// ----------Question 2---------
var origNum = 3.2;
var roundNum = Math.ceil(origNum);

// ----------Question 3---------
var origNum = 4.8;
var roundNum = Math.floor(origNum);

// ----------Question 4---------
var num = 3.7;
var roundedNum = Math.round(num);

// ----------Question 5---------
var num = 0.5;
var roundedNum = Math.round(num);

// ----------Chapter 27 Random Numbers---------

// ----------Question 1---------
var randomNumber = Math.random(); // Generate a random number between 0 and 1
var convertedNumber = Math.floor(randomNumber * 50) + 1; // Convert to a number in the range 1 to 50

console.log(convertedNumber);

// ----------Question 2---------
var randomNumber = Math.random();

console.log(randomNumber);

// ----------Question 3---------
// Function to simulate rolling a dice
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    return randomNumber;
}

// Roll the dice and get the result
var diceResult = rollDice();

console.log("The dice rolled: " + diceResult);

// ----------Question 4---------
// Function to simulate a coin toss
function tossCoin() {
    var randomNumber = Math.random(); // Generate a random number between 0 (inclusive) and 1 (exclusive)
    var result = (randomNumber < 0.5) ? "Head" : "Tail"; // Use conditional operator to determine the result
    
    return result;
}

// Toss the coin and get the result
var coinResult = tossCoin();

console.log("The coin landed on: " + coinResult);

// ----------Chapter 28-29 Converting Strings---------

// ----------Question 1---------
// Using ParseInt
var str = "42";
var num = parseInt(str);

console.log(num); // Output: 42

// Using Number
var str = "42";
var num = Number(str);

console.log(num); // Output: 42

// ----------Question 2---------
function convertToInteger(str) {
    var num = parseInt(str);
    return num;
}

// Call the function and pass the string "123"
var result = convertToInteger("123");

console.log(result); // Output: 123

// ----------Question 3---------
// Using Parsefloat
var str = "3.14";
var num = parseFloat(str);

console.log(num); // Output: 3.14

// Using Number
var str = "3.14";
var num = Number(str);

console.log(num); // Output: 3.14

// ----------Question 4---------
function canBeConvertedToNumber(str) {
    return !isNaN(str);
}

// Example usage
console.log(canBeConvertedToNumber("123"));    // Output: true
console.log(canBeConvertedToNumber("3.14"));  // Output: true
console.log(canBeConvertedToNumber("abc"));   // Output: false

// ----------Question 5---------
var number = 42;
var str = number.toString();

console.log(str); // Output: "42"

// ----------Question 6---------
function convertToString(number) {
    var str = number.toString();
    return str;
}

// Call the function and pass the number 42
var result = convertToString(42);

console.log(result); // Output: "42"

// ----------Question 7---------
var str = "3.14";
var num = parseInt(str);

console.log(num); // Output: 3

// ----------Chapter 30 Controlling the length of decimals---------

// ----------Question 1---------
var num = 3.141592653589793;
var newNum = num.toFixed(4).toString();

console.log(newNum); // Output: "3.1416"

// ----------Question 2---------
num = Number(num.toFixed(2));

// ----------Question 3---------
if (num.toFixed(2).toString().length > 4) {
    // Code to be executed if the condition is true
}

// ----------Question 4---------
var num = 3.14159265358979323846;
var roundedNum = num.toFixed(2).toString();

alert(roundedNum);

// ----------Chapter 31-34 Date & Time---------

// ----------Question 1---------
var dObj = new Date();

// ----------Question 2---------
var dStr = new Date().toString();

// ----------Question 3---------
var day = d.getDay();

// ----------Question 4---------
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayIndex = d; // Assuming the day of the week is assigned to variable `d`

alert(dayNames[dayIndex]);

// ----------Question 5---------
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Months are zero-based, so adding 1
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Example output:
// year: 2023
// month: 5
// day: 21
// hours: 12
// minutes: 30
// seconds: 45

// ----------Question 6---------
var later = new Date(2020, 11, 31);

// ----------Question 7---------
var myDate = new Date(1992, 1, 2);

// ----------Question 8---------
alert(new Date(1980, 0, 1).getTime());

// ----------Question 9---------
var myDate = new Date();
myDate.setFullYear(2022);

// ----------Question 10---------
function changeMonthToJanuary(date) {
    date.setMonth(0); // 0 represents January
}

// Usage example:
var myDate = new Date(); // Assuming you have a date object
console.log("Before:", myDate); // Output the date before the change
changeMonthToJanuary(myDate);
console.log("After:", myDate); // Output the date after changing the month to January

// ----------Question 11---------
var myDate = new Date("2023-05-23"); // Assuming the date is already set
myDate.setDate(myDate.getDate() - myDate.getDay() + 1 + desiredDayOfWeek);

// ----------Question 12---------
function changeMinutesToSpecificValue() {
    var timeString = prompt("Enter a time (HH:MM format):");
    var timeParts = timeString.split(":");
    
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    
    var specificMinutes = parseInt(prompt("Enter the specific minutes value:"));
    
    // Update the minutes to the specific value
    minutes = specificMinutes;
    
    // Ensure valid hour and minute values
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        console.log("Invalid time entered!");
        return;
    }
    
    // Format the updated time
    var updatedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    
    console.log("Updated time:", updatedTime);
}

// Call the function to test
changeMinutesToSpecificValue();

// ----------Question 13---------
function addHoursToTime() {
    var timeString = prompt("Enter a time (HH:MM format):");
    var timeParts = timeString.split(":");
    
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    
    var hoursToAdd = parseInt(prompt("Enter the number of hours to add:"));
    
    // Add the hours to the existing time
    hours += hoursToAdd;
    
    // Adjust the minutes if necessary
    if (hours >= 24) {
        hours %= 24;
    }
    
    // Format the updated time
    var updatedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    
    console.log("Updated time:", updatedTime);
}

// Call the function to test
addHoursToTime();

// ----------Question 14---------
function calculateAge() {
    var birthDate = prompt("Enter your birth date (YYYY-MM-DD):");
    var currentDate = new Date();
    
    var birthYear = parseInt(birthDate.slice(0, 4));
    var birthMonth = parseInt(birthDate.slice(5, 7)) - 1; // Month is zero-based
    var birthDay = parseInt(birthDate.slice(8, 10));
    
    var ageDate = new Date(currentDate.getFullYear(), birthMonth, birthDay);
    var age = currentDate.getFullYear() - birthYear;
    
    // Check if the birthday has already occurred this year
    if (currentDate < ageDate) {
        age--;
    }
    
    console.log("Your age is:", age);
}

// Call the function to calculate age
calculateAge();

// ----------Chapter 35-37 Functions---------

// ----------Question 1---------
function displayAlert() {
    alert("This is an alert!");
}

// ----------Question 2--------
function askName() {
    var userName = prompt("Enter name:");
    console.log("Hello, " + userName + "!");
}

// Call the function to prompt for the name
askName();

// ----------Question 3--------
function mainFunction() {
    // Call the first function
    function1();
    
    // Call the second function
    function2();
}

// Define the first function
function function1() {
    console.log("This is function 1");
}

// Define the second function
function function2() {
    console.log("This is function 2");
}

// Call the main function to invoke the other two functions
mainFunction();

// ----------Question 4--------
function displayName() {
    var name = prompt("Enter name:");
    alert("Hello, " + name + "!");
    }
    
    // Call the function
    displayName();
    
    // ----------Question 5--------
    var myVariable = 42;
    var myString = "Hello";
    var myNumber = 3.14;
    
    concat(myVariable, myString, myNumber);
    
    // ----------Question 6--------
    function concatenateStrings(string1, string2) {
        var result = string1 + string2;
        return result;
    }
    
    // Call the function and assign the result to a variable
    var concatenated = concatenateStrings("Hello", "World");
    console.log(concatenated); // Output: HelloWorld
    
    // ----------Question 7--------
    function multiplyNumbers(num1, num2, num3) {
        var result = num1 * num2 * num3;
        return result;
    }
    
    // Call the function and assign the result to a variable
    var multiplied = multiplyNumbers(2, 3, 4);
    console.log(multiplied); // Output: 24
    
    // ----------Question 8--------
    function calculateAverage(numbers) {
        var sum = 0;
        var count = numbers.length;
        
        for (var i = 0; i < count; i++) {
            sum += numbers[i];
        }
        
        var average = sum / count;
        return average;
    }
    
    // Example usage
    var numbers = [4, 7, 2, 9, 5];
    var result = calculateAverage(numbers);
    console.log(result); // Output: 5.4
    
    // ----------Question 9--------
    function calculateSum(num1, num2) {
        var sum = num1 + num2;
        return sum;
    }
    
    // Example usage
    var result = calculateSum(5, 3);
    console.log(result); // Output: 8
    
    // ----------Question 10--------
    function calculateAverage(numbers) {
        var sum = 0;
        var count = numbers.length;
        
        for (var i = 0; i < count; i++) {
            sum += numbers[i];
        }
        
        var average = sum / count;
        return average;
    }
    
    // Example usage
    var numbers = [4, 7, 2, 9, 5];
    var result = calculateAverage(numbers);
    console.log(result); // Output: 5.4
    
    // ----------Question 11--------
    function addNumbers(num1, num2) {
        return num1 + num2;
    }
    
    var result = addNumbers(5, 3);
    console.log(result); // Output: 8
    
    // ----------Question 12--------
    function countLetters(word) {
        var letterCounts = {};
        
        // Iterate over each character in the word
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            
            // If the letter is already a property in the object, increment its count
            if (letterCounts.hasOwnProperty(letter)) {
                letterCounts[letter]++;
            } else {
                // If the letter is not a property in the object, initialize its count to 1
                letterCounts[letter] = 1;
            }
        }
        
        return letterCounts;
        }
        
        // Example usage
        var word = "hello";
        var result = countLetters(word);
        console.log(result); // Output: { h: 1, e: 1, l: 2, o: 1 }
        
        // ----------Question 13--------
        function setYear(date, year) {
            date.setFullYear(year);
        }
        
        // Example usage
        var myDate = new Date();
        console.log(myDate); // Output: current date and time
        
        setYear(myDate, 2023);
        console.log(myDate); // Output: date and time with the year set to 2023
        
        // ----------Question 14--------
        function calculateAge(dateOfBirth) {
            var currentDate = new Date();
            var birthDate = new Date(dateOfBirth);
            
            var age = currentDate.getFullYear() - birthDate.getFullYear();
            var monthDiff = currentDate.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
                age--;
            }
            
            return age;
        }
        
        // Example usage
        var dateOfBirth = '1990-05-15';
        var age = calculateAge(dateOfBirth);
        console.log(age); // Output: the calculated age based on the current date
        
        // ----------Question 15--------
        function checkWordPresence(word, array) {
            return array.includes(word);
        }
        
        // Example usage
        var word = 'hassan';
        var wordsArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
        var isPresent = checkWordPresence(word, wordsArray);
        console.log(isPresent); // Output: true
        
        // ----------Question 16--------
        function repeatLetter(letter) {
            return letter.repeat(10);
        }
        
                // Example usage
                var letter = 'a';
                var repeated = repeatLetter(letter);
                console.log(repeated); // Output: "aaaaaaaaaa"
                
                // ----------Question 17--------
                function reverseArray(array) {
                    return array.reverse();
                }
                
                // Example usage
                var arr = ['a', 'b', 'c', 'd', 'e'];
                var reversed = reverseArray(arr);
                console.log(reversed); // Output: ['e', 'd', 'c', 'b', 'a']
                
    // ----------Chapter 38 Local VS Global Variables---------
    
    // ----------Question 1--------
    function greet(name) {
        var message = 'Hello, ' + name + '!'; // Local variable
        
        console.log(message); // Output: Hello, [name]!
    }
    
    // Example usage
    greet('John');
    
    // ----------Question 2--------
    var globalVariable = 'I am a global variable';
    
    function accessGlobalVariable() {
        console.log(globalVariable);
    }
    
    accessGlobalVariable(); // Output: I am a global variable
    
    // ----------Chapter 39 Switch Statements---------
        
    // ----------Question 1--------
    var fruit = 'apple';
    
    switch (fruit) {
        case 'apple':
            console.log('Selected fruit is apple.');
            break;
        case 'banana':
            console.log('Selected fruit is banana.');
            break;
        case 'orange':
                console.log('Selected fruit is orange.');
                break;
        default:
            console.log('Selected fruit is not apple, banana, or orange.');
             }
                    
                    
    // ----------Question 2--------
    var cityName = prompt("Enter the city name:");
var message;

switch (cityName) {
  case 'New York':
    message = 'The city is New York.';
    alert(message);
    break;
  case 'London':
    message = 'The city is London.';
    alert(message);
    break;
  case 'Paris':
    message = 'The city is Paris.';
    alert(message);
    break;
  default:
    message = 'The city is not New York, London, or Paris.';
    alert(message);
}
