$("#slide i").click(function(){
    $("#slide").animate({width:'0'},200)
    $("#homeItem").animate({marginLeft:'0px'},200)
    // console.log("fff");
})
$("#open").click(function(){
    $("#slide").animate({width:'250px'},200)
    $("#homeItem").animate({marginLeft:'250px'},200)
    // $("#slide a ").fadeIn(100)
})
$(".singer").click(function(){
    $('.singerText').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})
