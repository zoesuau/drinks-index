
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
        $(".yellow_bubble").removeClass("container")
        $(".yellow_bubble ").addClass("mobile_container")
        console.log("泡泡-r-")
        console.log("泡泡+")
        
    } else {
        $(".yellow_bubble ").addClass("container")
        // $(".yellow_bubble ").removeClass("mobile_container")

        console.log("泡泡-")
        
    }
})
$(window).resize(function () {
    
    if ($(window).width() < 1300) {
        $("footer ").removeClass("container")
        $("footer ").addClass("mobile_container")
        console.log("頁尾--")
        console.log("頁尾+")
        
    } else {
        $("footer ").addClass("container")
        // $("footer ").removeClass("mobile_container")

        console.log("頁尾-")
        
    }
})
$(window).resize(function () {
    
    if ($(window).width() < 1300) {
        $(".store_box").removeClass("container")
        $(".store-box ").addClass("mobile_container")
        console.log("店鋪--")
        console.log("店鋪+")
        
    } else {
        $(".store_box").addClass("container")
        // $(".store_box").removeClass("mobile_container")

        console.log("店鋪-")
        
    }
})
$(window).resize(function () {
    
    if ($(window).width() < 1300) {
        $(".newsbox").removeClass("container")
        $(".newsbox").addClass("mobile_container")
        console.log("最新消息--")
        console.log("最新消息+")
        
    } else {
        $(".newsbox").addClass("container")
        // $(".newsbox").removeClass("mobile_container")

        console.log("最新消息-")
        
    }
})
$(window).on('load',function(){
    if ($(window).width() < 1300) {
        $(".store_box").removeClass("container")
        $(".newsbox").removeClass("container")
        $(".feature3").removeClass("container")
        $(".feature2").removeClass("container")
        $(".feature1").removeClass("container")
        $(".banner_active").removeClass("container")
        $("footer").removeClass("container")
        
        $(".yellow_bubble").removeClass("container")
        
        
    } else {
        
    
        
    }
    });
 // if (window.dialogArguments != null) {
    //     if ($.browser.msie == true) {
    //         $('body').css('overflow-y', 'auto');
    //         $('body').css('overflow-x', 'hidden');
    //         $('.working-content,.loading-content').css('margin-left', '220px');
    //     }
    // }  
$(window).resize(function () {
    
    if ($(window).width() < 1300) {
        $(".feature3").removeClass("container")
        $(".feature3 ").addClass("mobile_container")
        console.log("飲料版--")
        console.log("飲料版+")
        
    } else {
        $(".feature3").addClass("container")
        // $(".feature3").removeClass("mobile_container")
        
        console.log("飲料-")
        
    }
})
$(window).resize(function () {
    
    if ($(window).width() < 1300) {
        $(".feature2").removeClass("container")
        $(".feature2 ").addClass("mobile_container")
        console.log("女文版--")
        console.log("女文版+")

    } else {
        $(".feature2").addClass("-")
        // $(".feature2").removeClass("mobile_container")

        console.log("女版-")
        
    }
})
$(window).resize(function () {
    console.log("視窗寬度", $(window).width())
    if ($(window).width() < 1300) {
        $(".feature1").removeClass("container")
        $(".feature1 ").addClass("mobile_container")
        console.log("圖文版--")
        console.log("圖文版+")
        
    } else {
        $(".feature1").addClass("container")
        // $(".feature1").removeClass("mobile_container")

        console.log("圖文版-")
        
    }
})


$(window).resize(function () {
    console.log("視窗寬度", $(window).width())
    if ($(window).width() < 1300) {
        $(".banner_active").removeClass("container")
        $(".banner_active").addClass("mobile_container")
        console.log("飲料版--")
        console.log("飲料版+")
        
    } else {
        $(".banner_active").addClass("container")
        
        console.log("飲料版-")
        
    }
})



$('.slide-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 910,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
       
    ]
})

$('.slide-content1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 910,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
       
    ]
})

$('.re_news_img_box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 910,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    
]
})


// $(".store_box_img:last-child ").clone().prependTo(".store_box_slide")
// $(".store_box_img").eq(1).clone().appendTo(".store_box_slide")

// let store_offset =-1219
// $(".store_next").on("click",function(){
// //    
// //  
//    console.log(store_offset)


// if(store_offset != 8533){
//      $(".store_box_slide").animate({"margin-left":store_offset },400)
//   store_offset = store_offset-1219
// }else{
// //callback
// $(".store_box_slide").animate({"margin-left":store_offset },400, function () {
//     $(".store_box_slide").css({ "margin-left": -1219 })
//     })
//     //動畫執行完才執行
//     current_slide_offset = -1219
// }




//clone()複製元素

$(".store_box_img:last-child ").clone().prependTo(".store_box_slide")
$(".store_box_img").eq(1).clone().appendTo(".store_box_slide")
let current_slide_offset = -1060
let store_box_img_width =$(".store_box_img").width()


console.log(store_box_img_width,"text")

function prev() {
    current_slide_offset = current_slide_offset + 1060
    if (current_slide_offset == 0) {
        $(".store_box_slide").animate({ "margin-left": current_slide_offset }, 400, function () {
        $(".store_box_slide").css({ "margin-left": -6360 })
        })
        current_slide_offset = -6360
    } else {
        $(".store_box_slide").animate({ "margin-left": current_slide_offset }, 400)

    }
}  


function next() {

    console.log(current_slide_offset)
    current_slide_offset = current_slide_offset - 1060

    if (current_slide_offset != -6360) {
        $(".store_box_slide").animate({ "margin-left": current_slide_offset }, 400)
    } else {
        //callback
        $(".store_box_slide").animate({ "margin-left": current_slide_offset }, 400, function () {
        $(".store_box_slide").css({ "margin-left": -1060 })
        })
        //動畫執行完才執行
        current_slide_offset = -1060
    }
    // $(".slide_content").
}// #next click end

$("#prev").on("click", function () {

prev()
})   //#prev click end

$("#next").on("click", function () {
next()


})// #next click end

//loop function
function loop(){
//放了setInterval計時器，依照間格秒數執行 
 setInterval(function(){
     next()
 },6000)

}
//在畫面讀取完後執行一次
 loop()




// $(".store_prve").on("click",function(){
//     //    
//     //  
//        console.log(store_offset)
    
    
//     if(store_offset == 0){
//          $(".store_box_slide").animate({"margin-left":store_offset },400)
//       store_offset = store_offset + 1219
//     }else{
//     //callback
//     $(".store_box_slide").animate({"margin-left":store_offset },400, function () {
//         $(".store_box_slide").css({ "margin-left":-8533 })
//         })
//         //動畫執行完才執行
//         current_slide_offset = +1219
//     }
    
    
    
    
//     })