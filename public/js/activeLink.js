window.addEventListener('load',()=>{
  let url = window.location.pathname

  links = document.getElementsByClassName("link");
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
  }

  document.getElementById(url).classList.add("active");
})