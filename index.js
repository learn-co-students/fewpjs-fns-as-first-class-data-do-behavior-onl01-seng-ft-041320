/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

handleClick;
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const split = string.split(':');
  console.log(split);
  const number = split[0] + split[1];
  console.log(number);
  const parsed = parseInt(number);
  console.log(parsed);
  if (parsed < 1200) {
    return 'Good Morning';
  } else if (parsed > 1200 && parsed < 1700) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = `${string}`
}