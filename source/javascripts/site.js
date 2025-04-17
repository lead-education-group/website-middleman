/**
 * Toggles the visibility of the navbar collapse element and related icons/styles
 * when the navbar toggler button is clicked.
 */
var toggleNavbar = function () {
  // Select all elements matching '.navbar-toggler'
  var togglerButtons = document.querySelectorAll('.navbar-toggler');
  // Select the element(s) to be toggled (usually just one)
  var collapseElements = document.querySelectorAll('.navbar-collapse');
  // Select the nav element(s)
  var navElements = document.querySelectorAll('nav');

  // Add a click listener to each toggler button found
  // Note: Using Array.prototype.forEach for compatibility if NodeList.forEach isn't supported (older browsers)
  // If supporting modern browsers only (IE11+), togglerButtons.forEach(...) is fine.
  Array.prototype.forEach.call(togglerButtons, function(button) {
    button.addEventListener('click', function() { // Using 'function' to preserve 'this' context

      // --- Replicate .slideToggle() ---
      // This requires CSS to handle the actual animation.
      // We toggle a class, e.g., 'show'.
      Array.prototype.forEach.call(collapseElements, function(element) {
        element.classList.toggle('show');
        // **Important:** You'll need CSS like this:
        // .navbar-collapse {
        //   max-height: 0;
        //   overflow: hidden;
        //   transition: max-height 0.35s ease-out; /* Adjust timing */
        // }
        // .navbar-collapse.show {
        //   max-height: 500px; /* Set high enough for content */
        // }
      });

      // --- Replicate toggling icons ---
      // Find the first <i> element *inside the clicked button*
      var innerIcon = this.querySelector('i'); // 'this' refers to the clicked button
      if (innerIcon) {
        innerIcon.classList.toggle('icon-times');
        innerIcon.classList.toggle('icon-bars');
      }

      // --- Replicate toggling nav background class ---
      Array.prototype.forEach.call(navElements, function(nav) {
        nav.classList.toggle('bg-nav-collasped');
      });

    });
  });
};

/**
 * Shows or hides the lead dropdown menu based on window width during resize.
 */
var showNavDropdownOnResize = function () {
  var dropdownMenus = document.querySelectorAll('.lead-dropdown-menu');

  // Function to check width and toggle display (using function expression)
  var checkWidthAndToggleDropdown = function() {
    var isDesktopWidth = window.innerWidth >= 768; // Use var
    // Use Array.prototype.forEach for broader compatibility
    Array.prototype.forEach.call(dropdownMenus, function(menu) {
      // .hide() sets display: none
      // .show() resets display (often to block or inline based on element type)
      // We set 'none' if desktop, otherwise reset style (letting CSS decide display type)
      menu.style.display = isDesktopWidth ? 'none' : '';
    });
  };

  // Add resize event listener to the window
  window.addEventListener('resize', checkWidthAndToggleDropdown);

  // **Optional but recommended:** Run the check once on load
  // to set the initial correct state.
  checkWidthAndToggleDropdown();
};

var updateFooterYear = function () {
  document.getElementById('footer-year').innerHTML = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', function() {
  updateFooterYear();
  toggleNavbar();
  showNavDropdownOnResize();
});