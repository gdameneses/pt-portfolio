// Navbar script
const navbar = () => {
  // Sets variables based on the unique class name I given them
  const collapseButton = document.querySelector(".btn-collapse");
  const navigation = document.querySelector(".navigation");
  const navbar = document.querySelector(".navbar");

  // Defines expandNavbar function
  const expandNavbar = () => {
    navbar.classList.toggle("navbar-expanded");
    navigation.classList.toggle("navigation-active");
  };

  // Defines retract Navbar function
  const retractNavbar = () => {
    navigation.classList.remove("navigation-active");
    navbar.classList.remove("navbar-expanded");
  };

  // Adds both functions to navbar on specific events
  navbar.addEventListener("click", expandNavbar);
  navbar.addEventListener("mouseleave", retractNavbar);
};

const divisor = () => {
  // Set const with all .divisor elements
  const divisorArray = document.querySelectorAll(".divisor");

  // Define function to be executed when mouse is Scrolled
  const rollDivisor = () => {
    divisorArray.forEach(divisor => {
      divisor.style.width = `${120 + (scrollY / 2) }%`
    });
  };

  // Calls out scroll listener on window element with callback function
  window.addEventListener("scroll", rollDivisor);
}

// Calls out function when page is loaded.

divisor();
navbar();
