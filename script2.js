function loadContent(page) {
   if (page == "About") {
    document.getElementById("main-content").innerHTML =
    "<object type='text/html'data='About.html'></object>";
   } else if (page =="Projects") {
    document.getElementById("main-content").innerHTML = 
    "<object type='text/html'data='Projects.html'></object>";
   } else if (page =="Contact") {
    document.getElementById("main-content").innerHTML = 
    "<object type='text/html'data='Contact.html'></object>";
   }
   