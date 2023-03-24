// circle's radius
var radius = prompt("What is the value of your circle's radius?");

var area = Math.PI * Math.pow(radius, 2);

alert("Total area of the circle is " + area);

// square root
var value = prompt("What is the value you want to calculate it's square root?");

var sqroot = Math.sqrt(value);

alert("The square root of " + value + " is " + sqroot);

// cos angle
var angle = prompt("What is the value the angle you want to calculate its cosine value:?");

var radian = angle * (Math.PI / 180);
var cos = Math.cos(radian);

document.write(" cos " + angle + " is " + cos);