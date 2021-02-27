new WOW().init();

$(function() {
  $(document).scroll(function() {
    var $nav = $("#mainNav");
    $nav.toggleClass("scrolled", $(this).scrollTop() >$nav.height());

  });
});

$("#toggler").click(function() {
  var $nav = $("#mainNav");
  $nav.toggleClass("scrolled");
});
