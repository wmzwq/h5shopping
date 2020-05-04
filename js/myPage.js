$(function () {
	var k = $(window).height()
	$(".next").click(function(e){
		$.fn.fullpage.moveSectionDown()
	})
	$('#fullpage').fullpage({
		//是否显示项目目录，默认false
		navigation: true,
		// //项目目录位置，默认right
		// navigationPosition:'right',
		// //滚到最底部显示是否滚回顶部
		// loopBottom:true,
		//滚到速度，单位为毫秒
		scrollingSpeed: 600,
		//滚动前
		afterLoad: function (onchorLink, index) {
			var m=$(".goods-02").attr("style")
			if(m===""){
				m=undefined
			}
			if (index === 2&&m===undefined) {
				$(".next").fadeOut()
				$(".search").show().animate({ "right": 370 }, 1500, "easeOutBack",function () {
					//显示沙发
					$(".search-wrods").animate({ "opacity": 1 }, 500, function () {
						$(".search").hide();
						$(".search-02-1").show().animate({ "height": 30, "right": 250, "bottom": 452 }, 1000)
						$(".goods-02").show().animate({ "height": 218 }, 1000)
						$(".words-02").animate({ "opacity": 1 }, 1000,function(){
							$(".next").fadeIn()
						})
					})
				})
			}
		},

		//开始滚动屏幕
		onLeave: function (index, nextIndex, direction) {
			$(".next").fadeOut()
			if (index === 2 && nextIndex === 3) {
				$(".shirt-02").show().animate({ "bottom": -(k - 250), "width": 207, "left": 260 }, 2000,function(){
					$(".img-01-a").animate({"opacity":1},500,function(){
						$(".btn-01-a").animate({"opacity":1},500,function(){
							$(".next").fadeIn()
						})
					})
				})
				$(".cover").show()
			}
			if (index === 3 && nextIndex === 4){
				$(".shirt-02").hide()
				$(".t1f").show().animate({"bottom":-((k-250)+50),"left":260},2000,function(){
					$(this).hide()
					$(".car-img").show()
					$(".car").animate({"left":"150%"},3000,"easeInElastic",function(){
						$(".note").show()
						$(".note-img,.word-04-a").animate({"opacity":1},1000,function(){
							$(".next").fadeIn()
						})
					})
				})
			}
			if (index === 4 && nextIndex === 5){
				$(".hand-05").animate({"bottom":0},2000,function(){
					$(".mouse-05-a").animate({"opacity":1})
					$(".t1f-05").show().animate({"bottom":70},1000,function(){
                        $(".order-05").animate({"bottom":390},function(){
							$(".words-05").addClass("words-05-a")
							$(".next").fadeIn()
						})
					})
				})
			}
			if (index === 5 && nextIndex === 6){
			    $(".t1f-05").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function(){
					$(".t1f-05").hide()
				})
				$(".box-06").animate({"left":"38%"},1500,function(){
					$(".box-06").animate({"bottom":40},500,function(){
						$(".box-06").hide()
						//背景移动
						$(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
							$(".boy").animate({"height":305,"bottom":116},1000,function(){
								$(this).animate({"right":500},500,function(){
									$(".door").animate({"opacity":1},200,function(){
										$(".girl").show().animate({"right":350,"height":306},500,function(){
											$(".pop-07").show()
											$(".next").fadeIn()
										})
									})
								})
							})
						})
						$(".words-06-a").show().animate({"left":"50%"},2000,"easeOutElastic")
						$(".pop-06").show()
					})
				})
			}
			if (index === 6 && nextIndex === 7){
				setTimeout(function(){
					$(".t10").animate({"opacity":1},500,function(){
						$(".good-07").show()
						$(".next").fadeIn()
					})		
				},2000)	
			}
				// $(".beginShoping").mouseenter(function(e){
				// 	$(".btn-08-a").show()
				// }).mouseleave(function(e){
				// 	$(".btn-08-a").hide()
				// })
				$(".beginShoping").hover(function(){
					$(".btn-08-a").toggle()
				})
				$(document). mousemove(function(e){
					var x=e.pageX-$(".hand-08").width()/2;
					var y=e.pageY+10;
					var minY=k-449
					if(y<minY){
						y=minY
					}
					$(".hand-08").css({"left":x,"top":y})
				})
				$(".again").click(function(e){
					$.fn.fullpage.moveTo(1)
					//清除所有行内样式
					$("img,.move").attr("style","")
				})	
		}
	})  //fullpage 方法里面接收对象
})