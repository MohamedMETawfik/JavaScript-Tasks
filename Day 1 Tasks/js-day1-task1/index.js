// show alert to welcome user
alert("Welcome to my site");

// ask user for their name using a prompt
var name = prompt("Please enter your name:");

// display personalized welcome message on the page
var welcomeMessage = document.createElement("h1");
welcomeMessage.textContent = "Welcome, " + name + "!";
document.body.appendChild(welcomeMessage);