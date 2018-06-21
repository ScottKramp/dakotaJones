
$(document).ready(adjustments); 
$(window).resize(adjustments);
// $(window).scroll(adjustments);

var height, width
// var scrollNum

// var bar = document.querySelector('.bar');
// var tcj = document.querySelector('.tcjContain');
// var sjk = document.querySelector('.sjkContain');
// var tag = document.querySelector('.tagContain');
// var sgr = document.querySelector('.sgrContain');
// var sjkMarginTop = parseInt(window.getComputedStyle(sjk).getPropertyValue("margin-top"));
// var tagMarginTop = parseInt(window.getComputedStyle(tag).getPropertyValue("margin-top"));
// var sgrMarginTop = parseInt(window.getComputedStyle(sgr).getPropertyValue("margin-top"));
function adjustments(){
	scrollNum = $(window).scrollTop()
	height = $(window).height();
	width = $(window).width();
  console.log("width : " + width + " - height : " + height)

	// tcjTop = tcj.offsetTop
	// tcjBottom = tcjTop + tcj.offsetHeight
	// sjkTop = sjk.offsetTop
	// sjkBottom = sjkTop + sjk.offsetHeight
	// tagTop = tag.offsetTop
	// tagBottom = tagTop + tag.offsetHeight
	// sgrTop = sgr.offsetTop
	// sgrBottom = sgrTop + sgr.offsetHeight
	
	// viewBottom = scrollNum + height

	// console.log('height : ' + sjkBottom + " - scroll : " + scrollNum)
	// console.log(sjk.getBoundingClientRect().bottom)
	// if($(document).scrollTop() > 600){
	// 	stickerTopRight = 200 - scrollNum/6;
	// 	stickerHeight = 400 - scrollNum/3;
	// 	stickerWidth = 1000 - scrollNum/1.2;
	// 	$(".sticker").css({'top': stickerTopRight, 'right' : stickerTopRight, 'height' : stickerHeight, 'width' : stickerWidth});	

	// }
	// if($(document).scrollTop() > 900){
	// 	$(".sticker").css({'top': "50px", 'right': "50px", 'height' : '100px', 'width' : '250px'});	

	// }
	// if(tcjBottom > scrollNum){
	// 	$(".bar1").css({"position" : 'relative'});	
	// 	// $(".bar1Placeholder").css({"height" : '0px'});	
	// 	$(".sjkContain").css({"margin-top" : sjkMarginTop + 'px'});	
	// 	console.log('alpha')
	// }
	// if(sjkBottom - bar.getBoundingClientRect().height > scrollNum && scrollNum > tcjBottom){
	// 	// $(".bar2Placeholder").css({"height" : '0px'});
	// 	// $(".bar1Placeholder").css({"height" : bar.getBoundingClientRect().height + 'px'});
	// 	$(".tagContain").css({"margin-top" : tagMarginTop + 'px'});	
	// 	$(".sjkContain").css({"margin-top" : sjkMarginTop + bar.getBoundingClientRect().height + 'px'});
	// 	$(".bar1").css({'top': "0px", "position" : 'fixed'});
	// 	$(".bar2").css({"position" : 'relative', 'top' : 'inherit'});
	// 	console.log('bravo')
	// }
	// // Begin SHOWS bumping SOUNDS
	// if(sjkBottom > scrollNum && scrollNum > sjkBottom - bar.getBoundingClientRect().height ){
	// 	bar2Top = sjk.offsetTop + sjk.getBoundingClientRect().height - scrollNum
	// 	bar1Top = sjk.offsetTop + sjk.getBoundingClientRect().height - bar.getBoundingClientRect().height - scrollNum
	// 	$(".bar2").css({'top': bar2Top, "position" : 'fixed'});	
	// 	$(".bar1").css({'top': bar1Top, "position" : 'fixed'});
	// 	// $(".bar2Placeholder").css({"height" : bar.getBoundingClientRect().height + 'px'});
	// 	// $(".bar1Placeholder").css({"height" : bar.getBoundingClientRect().height + 'px'});
	// 	$(".tagContain").css({"margin-top" : tagMarginTop + bar.getBoundingClientRect().height + 'px'});	
	// 	$(".sjkContain").css({"margin-top" : sjkMarginTop + bar.getBoundingClientRect().height + 'px'});
	// 	$(".sjkContain").css({"margin-bottom" : sjkMarginTop});
	// 	console.log('charlie')
	// }
	// if(tagBottom - bar.getBoundingClientRect().height > scrollNum && scrollNum > sjkBottom){
	// 	$(".bar2").css({'top': '0px', "position" : 'fixed'});	
	// 	// $(".bar2Placeholder").css({"height" : bar.getBoundingClientRect().height + 'px'});
	// 	// $(".bar1Placeholder").css({"height" : '0px'});
	// 	$(".tagContain").css({"margin-top" : tagMarginTop + bar.getBoundingClientRect().height + 'px'});	
	// 	$(".sjkContain").css({"margin-top" : sjkMarginTop +  'px'});
	// 	$(".bar1").css({"position" : 'relative', 'top' : 'inherit'});
	// 	$(".bar3").css({"position" : 'relative', 'top' : 'inherit'});
	// 	console.log('delta')
	// }
	// if(tag.getBoundingClientRect().bottom < bar.getBoundingClientRect().height && tag.getBoundingClientRect().bottom > 0){
	// 	bar3Top = tag.offsetTop + tag.getBoundingClientRect().height - scrollNum;
	// 	bar2Top = tag.offsetTop + tag.getBoundingClientRect().height - bar.getBoundingClientRect().height - scrollNum
	// 	$(".bar3").css({'top': bar3Top, "position" : 'fixed'});	
	// 	$(".bar2").css({'top': bar2Top, "position" : 'fixed'});	
	// 	console.log('echo')
	// }
	// if(tag.getBoundingClientRect().bottom <= 0 && sgr.getBoundingClientRect().bottom > bar.getBoundingClientRect().height){
	// 	$(".bar3").css({'top': '0px', "position" : 'fixed'});
	// 	$(".bar3Placeholder").css({"height" : bar.getBoundingClientRect().height + 'px'});
	// 	console.log('foxtrot')
	// }

}



// // $('.navItem').mouseenter(function(){
// // 	$(this).animate({'opacity': '1'})
// // })
// // $('.navItem').mouseleave(function(){
// // 	$(this).animate({'opacity': '.8'})
// // })




// // $('.stickyFoot').click(function(){
// // 	if($('.stickyFoot').hasClass('open')){
// // 		$('.stickyFoot').removeClass('open');
// // 		$('.stickyFoot').animate({height: 20});
// // 	}else{
// // 		$('.stickyFoot').addClass('open');
// // 		$('.stickyFoot').animate({height: height - 40});
// // 	}	
// // })







var stickyHeaders = (function() {

  var $window = $(window),
      $stickies;

  var load = function(stickies) {

    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

      $stickies = stickies.each(function() {

        var $thisSticky = $(this).wrap('<div class="followWrap" />');
  
        $thisSticky
            .data('originalPosition', $thisSticky.offset().top)
            .data('originalHeight', $thisSticky.outerHeight())
              .parent()
              .height($thisSticky.outerHeight()); 			  
      });

      $window.off("scroll.stickies").on("scroll.stickies", function() {
		  _whenScrolling();		
      });
    }
  };

  var _whenScrolling = function() {

    $stickies.each(function(i) {			

      var $thisSticky = $(this),
          $stickyPosition = $thisSticky.data('originalPosition');

      if ($stickyPosition <= $window.scrollTop()) {        
        
        var $nextSticky = $stickies.eq(i + 1),
            $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

        $thisSticky.addClass("fixed");

        if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

          $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
        }

      } else {
        
        var $prevSticky = $stickies.eq(i - 1);

        $thisSticky.removeClass("fixed");

        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };
})();

$(function() {
  stickyHeaders.load($(".followMeBar"));
});


