// Get information
const name = prompt("Please enter your name:");
const phoneNumber = prompt("Please enter your phone number (8 digits):");
const mobileNumber = prompt("Please enter your mobile number (11 digits starting with 010, 011, or 012):");
const email = prompt("Please enter your email address:");

// regular expressions
const nameRegex = /^[a-zA-Z]+$/;
const phoneNumberRegex = /^\d{8}$/;
const mobileNumberRegex = /^(010|011|012)\d{8}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validate user's information
const isNameValid = nameRegex.test(name);
const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);
const isMobileNumberValid = mobileNumberRegex.test(mobileNumber);
const isEmailValid = emailRegex.test(email);

// current date and month
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // getMonth() returns 0 for January, so we add 1

//  welcoming message
if (isNameValid && isPhoneNumberValid && isMobileNumberValid && isEmailValid) {
  console.log("Welcome dear guest:" + name + " \n Your telephone number is: " + phoneNumber + " \n your mobile number is: " + mobileNumber + " \n your email address is: " + email + " \n today is: " + day + " \n we are in month: " + month + ".");

} else {
  console.log("Please enter valid information.");
}