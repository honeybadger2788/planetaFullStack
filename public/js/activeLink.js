/*function activeLink(evnt,tag) {
    evnt.preventDefault()
    const activeElement = document.getElementByClassName("active");
    activeElement.classList.remove("active");
    document.getElementById(tag).classList.add("active");
}*/

function activeLink(evt) {
    // Declare all variables
    var i, links;
  
    // Get all elements with class="tablinks" and remove the class "active"
    links = document.getElementsByClassName("link");
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += "active";
  }