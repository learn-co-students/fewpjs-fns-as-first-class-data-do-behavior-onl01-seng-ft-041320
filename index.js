/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const timeParsed = parseInt(time)
  if (timeParsed > 17) return "Good Evening"
  if (timeParsed > 12) return "Good Afternoon"
  return "Good Morning"
}

/* Write your implementation of displayMessage() */

function displayMessage(greet) {
  document.getElementById('greeting').innerText = `${greet}`
}