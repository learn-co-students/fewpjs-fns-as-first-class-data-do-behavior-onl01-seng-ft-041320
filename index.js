/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time) {
  let hour = parseInt(time.split()[0])
  if ( hour < 12 ) {
    return 'Good Morning'
  } else if (17 > hour && hour > 12 ) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }

}

/* Write your implementation of displayMessage() */

let greeting = document.getElementById('greeting')

function displayMessage(message) {
  greeting.innerText = `${message}`;
}
