// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".
function logButton(event) {
  const button = document.getElementById('auth')
  if (button.innerText === 'Log out') {
    button.innerText = 'Log In'
  }
  else { button.innerText = 'Log out' }
}
document.getElementById('auth').addEventListener('click', logButton)


// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

function alertMessage(event) {
  event.preventDefault();
  alert(document.querySelector('#alert-message').value);
}
document.querySelector('#send-alert').addEventListener('submit', alertMessage)


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code
function addItem(event) {
  const item = document.createElement('li');
  item.innerText = 'item';
  const list = document.querySelector('ol')
  list.append(item);
}
document.querySelector('#item-adder').addEventListener('dblclick', addItem)
// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code
function blueColor() {
  const list = document.getElementsByClassName('changes-colors');
  for (let i of list) {
    i.style.color = 'blue';
  }
}
document.querySelector('#blue').addEventListener('click', blueColor);

function redColor() {
  const list = document.getElementsByClassName('changes-colors');
  for (let i of list) {
    i.style.color = 'red';
  }
}
document.querySelector('#red').addEventListener('click', redColor);
// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code
function calculate(event) {
  event.preventDefault();
  let answer = 1;
  const n = document.querySelector('#factorial-input').value;
  if (n <= 1) {
    return n;
  }
  else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
  }
  document.querySelector('#result').innerText = answer
}

document.querySelector('#factorial-calculator').addEventListener('submit', calculate);

function clearResult() {
  document.querySelector('#result').innerText = 0;
}
document.querySelector('#clearButton').addEventListener('click', clearResult);
// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
function restrict(event) {
  event.preventDefault();
  const wordLen = document.querySelector('#word').value.length;
  const response = document.querySelector('.form-feedback');
  if (wordLen < 4) {
    response.innerText = 'The word must be at least 4 characters long.';
    response.style.color = 'red';

  }
  else {
    response.innerText = 'Thanks for your submission!';
    response.style.color = 'green';
  }
}
document.querySelector('#recommend-word').addEventListener('submit', restrict)

