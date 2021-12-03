


$(".menu_icon").on("click",function(){
console.log("hi")

$(this).parent().siblings().find(".left_menu").toggle()

if($(".mobile_menu_icon2").hasClass("openmobile_menu_icon2"))
{$(".mobile_menu_icon1").removeClass("openmobile_menu_icon1")
$(".mobile_menu_icon2").removeClass("openmobile_menu_icon2")
$(".mobile_menu_icon3").removeClass("openmobile_menu_icon3")
console.log("remove")
}else{
    $(".mobile_menu_icon1").addClass("openmobile_menu_icon1") 
    $(".mobile_menu_icon2").addClass("openmobile_menu_icon2") 
    $(".mobile_menu_icon3").addClass("openmobile_menu_icon3") 


}

})



// $(".menu_icon").on("click",function(){
//     console.log("hi")
    
//     $(this).parent().siblings().find(".left_menu").toggle()
//     if(){$(this).find(".mobile_menu_icon1").addClass("openmobile_menu_icon1")
//     $(this).find(".mobile_menu_icon2").addClass("openmobile_menu_icon2")
//     $(this).find(".mobile_menu_icon3").addClass("openmobile_menu_icon3")
    
//     }else{
    
//     }
    
    
//     $(this).find(".mobile_menu_icon1").removeClass("openmobile_menu_icon1")
//     $(this).find(".mobile_menu_icon2").removeClass("openmobile_menu_icon2")
//     $(this).find(".mobile_menu_icon3").removeClass("openmobile_menu_icon3")
//     })