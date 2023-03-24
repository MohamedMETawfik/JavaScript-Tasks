function findLargestWord() {
    var str = prompt("Enter a string:");
  
    var words = str.split(' ');
  
    var largestWord = '';
    var largestLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length >= largestLength) {
        largestWord = words[i];
        largestLength = words[i].length;
      }
    }
  
    return largestWord;
  }
  
  console.log(findLargestWord());
  