function sortArray() {
    let numbers = [];
    let input;
  
    for (let i = 0; i < 5; i++) {
      input = prompt(`Enter a number (${i+1}/5):`);
      while (isNaN(input)) {
        input = prompt(`Invalid input. Enter a number (${i+1}/5):`);
      }
      numbers.push(Number(input));
    }
  
    let descending = numbers.slice().sort((a, b) => b - a);
  
    let ascending = numbers.slice().sort((a, b) => a - b);
  
    document.write("Numbers: " + numbers.join(", ") + "<br>");
    document.write("Numbers Descending: " + descending.join(", ") + "<br>");
    document.write("Numbers Ascending: " + ascending.join(", "));
  }
  
  sortArray();