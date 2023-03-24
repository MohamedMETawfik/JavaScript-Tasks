function writeHeaders() {
    let headers = "";
  
    for (let i = 1; i <= 6; i++) {
      headers += "<h" + i + ">" + "Welcome to my page" + "</h" + i + ">";
    }
  
    document.write(headers);
  }
  
  writeHeaders();