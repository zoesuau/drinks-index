$(".menu_icon").on("click", function () {
    console.log("hi")

    $(this).parent().siblings().find(".left_menu").toggle()

    if ($(".mobile_menu_icon2").hasClass("openmobile_menu_icon2")) {
        $(".mobile_menu_icon1").removeClass("openmobile_menu_icon1")
        $(".mobile_menu_icon2").removeClass("openmobile_menu_icon2")
        $(".mobile_menu_icon3").removeClass("openmobile_menu_icon3")
        console.log("remove")
    } else {
        $(".mobile_menu_icon1").addClass("openmobile_menu_icon1")
        $(".mobile_menu_icon2").addClass("openmobile_menu_icon2")
        $(".mobile_menu_icon3").addClass("openmobile_menu_icon3")


    }

})



$(window).resize(function () {
    console.log("視窗寬度", $(window).width())
    if ($(window).width() < 1300) {
        $(".banner_active").removeClass("container")
        $(".banner_active").addClass("mobile_container")
        console.log("remove container")
        console.log("add container")

    } else {
        $(".banner_active").addClass("container")
        console.log("add container")

    }
})
