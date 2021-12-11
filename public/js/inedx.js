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
    
    if ($(window).width() < 1300) {
        $(".feature3").removeClass("container")
        $(".feature3 ").addClass("mobile_container")
        console.log("飲料版remove container")
        console.log("飲料版+mobule_container")

    } else {
        $(".feature3").addClass("container")
        $(".feature3").removeClass("mobile_container")

        console.log("飲料add container")

    }
})
$(window).resize(function () {
    
    if ($(window).width() < 1300) {
        $(".feature2").removeClass("container")
        $(".feature2 ").addClass("mobile_container")
        console.log("女文版remove container")
        console.log("女文版+mobule_container")

    } else {
        $(".feature2").addClass("container")
        $(".feature2").removeClass("mobile_container")

        console.log("女版add container")

    }
})
$(window).resize(function () {
    console.log("視窗寬度", $(window).width())
    if ($(window).width() < 1300) {
        $(".feature1").removeClass("container")
        $(".feature1 ").addClass("mobile_container")
        console.log("圖文版remove container")
        console.log("圖文版+mobule_container")

    } else {
        $(".feature1").addClass("container")
        $(".feature1").removeClass("mobile_container")

        console.log("圖文版add container")

    }
})


$(window).resize(function () {
    console.log("視窗寬度", $(window).width())
    if ($(window).width() < 1300) {
        $(".banner_active").removeClass("container")
        $(".banner_active").addClass("mobile_container")
        console.log("飲料版remove container")
        console.log("飲料版add mobile_container")

    } else {
        $(".banner_active").addClass("container")
        
        console.log("飲料版add container")

    }
})
