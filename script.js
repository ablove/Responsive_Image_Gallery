$(document).ready(function () {
  $(".gallery-image").on("click", function () {
    const src = $(this).attr("src");
    $("#lightbox-image").attr("src", src);
  });
});
