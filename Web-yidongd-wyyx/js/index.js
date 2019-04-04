;(function($) {
	
	$(".my-div1-divv2>img").on("click",function(){
		$(".my-div1").hide();
		$(".my-hide").show();
		
	})
	$(".my-hide1-div1-div2").on("click",function(){
		$(".my-div1").show();
		$(".my-hide").hide();
		
	})
	
	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		loop: true, // 循环模式选项
		autoplay: true, //设置自动循环播放
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

//固定导航栏
//	var a = $(".nav"),
//		b = a.offset();
//	$(document).on('scroll', function() {
//		var c = $(document).scrollTop();
//		if(b.top <= c) {
//			a.css({ 'position': 'fixed', 'top': '0px' })
//		} else {
//			a.css({ 'position': 'relative', 'top': '0px' })
//		}
//	})

$(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 500) {
                    if (!$(".my-top").is(":visible")) {
                        try {
                            $(".my-top").slideDown();
                        } catch (e) {
                            $(".my-top").show();
                        }                      
                    }
                }
                else {
                    if ($(".my-top").is(":visible")) {
                        try {
                            $(".my-top").slideUp();
                        } catch (e) {
                            $(".my-top").hide();
                        }                       
                    }
                } 
            });
//	回到顶部
$(".my-top").on("click",function () {
		 document.body.scrollTop = document.documentElement.scrollTop = 0;
});

})($);