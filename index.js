/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let newTime = parseInt(time)
  if (newTime < 12) {
    return "Good Morning"
  }
  if (newTime > 17) {
    return "Good Evening"
  }
  return "Good Afternoon"
}

function displayMessage(greet) {
  const messageElement = document.getElementById('greeting')
  messageElement.innerText = greet
}

/* Write your implementation of displayMessage() */
