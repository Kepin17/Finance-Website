const arrowIcon = document.getElementById("arrowIcon");

function changeArrowRotation() {
  arrowIcon.style.transform = "rotate(180deg)";
  showAboutNavbar();
}

function showAboutNavbar() {
  const aboutNav = document.getElementById("aboutNav");
  aboutNav.style.display = "block";
}

function destroyAboutNav() {
  arrowIcon.style.transform = "rotate(90deg)";
  aboutNav.style.display = "none";
}
