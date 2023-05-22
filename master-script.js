window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  var navLinks = document.getElementsByClassName("nav-link");

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = '#ffffff';
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#193055";
    }
  } else {
    navbar.style.backgroundColor = 'transparent';
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#fff";
    }
  }
});

                        
