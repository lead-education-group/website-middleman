const toggleNavbar = function () {
  $(".navbar-toggler").click(function() {
    $(".navbar-collapse").slideToggle();
  });
}

// const dropdownHover = function () {
//   $( ".nav-item.dropdown" ).hover(
//     function() {
//       if ( $(window).width() >= 768 ) {
//         $(this).find(".dropdown-hover").css('color', '#359df2');
//         $(this).find(".lead-dropdown-menu").fadeIn( 200 );
//         $(this).find(".js-caret").addClass("fa-caret-up");
//         $(this).find(".js-caret").removeClass("fa-caret-down");
//       }
//     }, function() {
//       if ( $(window).width() >= 768 ) {
//         $(this).find(".dropdown-hover").css('color', '#12344f');
//         $(this).find(".lead-dropdown-menu").fadeOut( 200 );
//         $(this).find(".js-caret").addClass("fa-caret-down");
//         $(this).find(".js-caret").removeClass("fa-caret-up");
//       }
//     }
//   );
// }

// <li class="nav-item dropdown">
            //   <a class="nav-link dropdown-hover" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //     What we do <i class="js-caret fas fa-caret-down"></i>
            //   </a>
            //   <div class="lead-dropdown-menu" aria-labelledby="navbarDropdown">
            //     <a class="lead-dropdown-item" href="sfax.html">
            //       <h3>International Academy of Sfax</h3>
            //       <p>Tunisian Educational Advancement</p>
            //     </a>
            //     <a class="lead-dropdown-item" href="#">
            //       <h3>Iniatives</h3>
            //       <p>This, that, the other</p>
            //     </a>
            //   </div>
            // </li>

const showNavDropdownOnResize = function () {
  $( window ).resize(function() {
    if ( $(this).width() >= 768 ) {
      $(".lead-dropdown-menu").hide()
    } else {
      $(".lead-dropdown-menu").show()
    }
  });
}

$(document).ready(function() {
  toggleNavbar();
  // dropdownHover();
  showNavDropdownOnResize();
});
