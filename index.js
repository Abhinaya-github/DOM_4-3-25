
//1) Select an element by ID: Write a script that selects an element with a specific id and changesits background color.
var header=document.getElementById("H1");
console.log(header);
header.style.backgroundColor="purple";

//2) Select elements by class name: Use getElementsByClassName() to select all elements with a class and log them to the console.
 var Class=document.getElementsByClassName("First")
 console.log(Class);

 //3) Change text content: Select an element and change its text content using textContent or innerHTML.
 var header_1=document.getElementById("H");
 console.log(header_1)

 header_1.textContent="H2 after changing the content using innerHtml";
 
 //4) Create and append an element: Write a script that creates a new p element and appends it to a div.

 var container=document.createElement("div")
 console.log(container)

 var paragraph=document.createElement("p")
 paragraph.textContent="this is a paragragh in div element"
 container.append(paragraph)

 //5) Remove an element: Select an element by its id and remove it from the DOM.
 var header_2=document.getElementById("H2")
 header_2.remove()

 //6) Style an element: Use JavaScript tomodify the CSS style of an element  (e.g., change the font size, color, or margin).
  var H3_id=document.getElementById("h3_id")
  H3_id.style.color="red";
  H3_id.style.backgroundColor="aqua";
