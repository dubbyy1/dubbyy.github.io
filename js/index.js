$(document).ready(function () {
  $('a[href="/projects"]').on("click", function (e) {
    e.preventDefault();
    $("body").fadeOut(100, function () {
      window.location.href = "/projects";
    }); // Match the animation duration (0.6s)
  });

  $('a[href="/contact"]').on("click", function (e) {
    e.preventDefault();
    $("body").fadeOut(100, function () {
      window.location.href = "/contact";
    }); // Match the animation duration (0.6s)
  });

  $('a[href="/"]').on("click", function (e) {
    e.preventDefault();
    $("body").fadeOut(100, function () {
      window.location.href = "/";
      console.log("yo");
    }); // Match the animation duration (0.6s)
  });
});
