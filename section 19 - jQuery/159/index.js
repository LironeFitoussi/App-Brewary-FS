// $("button").on("click", function() {
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function() {
//     $("h1").hide();
// });

// $("button").on("click", function() {
//     $("h1").show();
// });

// $("button").on("click", function() {
//     $("h1").toggle();
// });

// $("button").on("click", function() {
//     $("h1").toggle(1000);
// });

// $("button").on("click", function() {
//     $("h1").hide();
// });

// $("button").on("click", function() {
//     $("h1").show();
// });

// $("button").on("click", function() {
//     $("h1").fadeIn();
// });

// $("button").on("click", function() {
//     $("h1").fadeOut();
// });

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function() {
//     $("h1").fadeTo(0, 0.5);
// });

// $("button").on("click", function() {
//     $("h1").slideUp();
// });

// $("button").on("click", function() {
//     $("h1").slideDown();
// });

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

// $("#start").on("click", function() {
//     $("h1").animate({
//         opacity: '0.5',
//         color: "red"
//     }, 2000);
// });

// $("#stop").on("click", function() {
//     $("h1").stop();
// });

// $("button").click(function () {
//   $("h1").hide("slow", function () {
//     alert("The paragraph is now hidden");
//   });
// });

$("button").click(function () {
  $("h1").toggle("slow").animate();
});
