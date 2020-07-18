/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}
/* Write your implementation of displayMessage() */

function greet(time) {
  const hour = parseInt(time, 10);
  if (hour < 0) return "Time cannot be negative!"
  if (hour > 24) return "There aren't more than 24hrs in a day!"
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}