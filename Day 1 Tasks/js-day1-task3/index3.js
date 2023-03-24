function getValidName() {
    let name;
    do {
      name = prompt("Enter your name:");
    } while (!isNaN(name) || name === "");
    return name;
  }
  
  function getValidBirthYear() {
    let birthYear;
    do {
      birthYear = parseInt(prompt("Enter your birth year (must be a number and less than 2010):"));
    } while (isNaN(birthYear) || birthYear >= 2010);
    return birthYear;
  }
  
  function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  
  function displayUserInfo(name, birthYear, age) {
    let output = `Name: ${name}\nBirth year: ${birthYear}\nAge: ${age}`;
    alert(output);
  }
  
  function runContactPage() {
    let name = getValidName();
    let birthYear = getValidBirthYear();
    let age = calculateAge(birthYear);
    displayUserInfo(name, birthYear, age);
  }
    runContactPage();
