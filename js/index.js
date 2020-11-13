

// $("h1").click(function(){
//     $("h1").css("color","blue")
// });

// $("input").keypress(function(event){
//     $("h1").text(event.key)
// });
// $("div.menu-icon").on("click",function toggleBack(){
//     $("toggle").hide();
// })



$("nav").click(function(){
    $("aside").css("display","block");
})
$("aside").click(function(){
    $("aside").css("display","none")
})