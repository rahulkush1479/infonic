// const toggler = document.querySelector(".toggler");
// const navLinks = document.querySelector(".nav-links");

// toggler.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
//   toggler.classList.toggle("active");
// });




function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}





$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".myheader").addClass("fixheader");
    } else {
        $(".myheader").removeClass("fixheader");
    }
});






