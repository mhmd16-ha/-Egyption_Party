$("#slide i").click(function () {
  $("#slide").animate({ width: "0" }, 200);
  $("#homeItem").animate({ marginLeft: "0px" }, 200);
  // console.log("fff");
});
$("#open").click(function () {
  $("#slide").animate({ width: "250px" }, 200);
  $("#homeItem").animate({ marginLeft: "250px" }, 200);
  // $("#slide a ").fadeIn(100)
});
$(".singer").click(function () {
  $(".singerText").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
setInterval(() => {
  const d = new Date();
  const date = new Date(2021,10,1,11);
  let now = (d.getTime())/1000;
  let Todate = (date.getTime())/1000;
  diffrentDate=Todate-now;
  day=Math.floor(diffrentDate/(60*60*24)) 
  hours=Math.floor((diffrentDate-(day*24*60*60))/(60*60))
  minutes=Math.floor((diffrentDate-(day*24*60*60)-(hours*60*60))/(60))
  seconds=Math.floor((diffrentDate-(day*24*60*60)-(hours*60*60)-(minutes*60)))

 
  $(".day").text(day+`D`);
  $(".hour").text(hours+`H`);
  $(".minute").text(minutes+`M`);
  $(".second").text(seconds+`S`);

}, 1000);
var max = 100;
$("#message").keyup(function () {
  var length = $(this).val().length;
  var val = max - length;
  if (val <= 0) {
    $("#count").text("your available character finished");
  } else {
    $("#count").text(val);
  }
});
