$(document).ready(function(){
	var myslider = $(".slider").bxSlider({
		auto:true, pager:false, controls:false
	});
	$(".nextBtn").click(function(){
		myslider.goToNextSlide();
	});
	$(".prevBtn").click(function(){
		myslider.goToPrevSlide();
	});
});
$(document).ready(function(){
	$(".sliderTwo").bxSlider({
		auto:true, controls:false
	});
});
$(document).ready(function(){
	var mysliderTwo = $(".sliderThree").bxSlider({
		mode:'vertical',pager:false,controls:false
	});
	$(".nextBtnTwo").click(function(){
		mysliderTwo.goToNextSlide();
	});
	$(".prevBtnTwo").click(function(){
		mysliderTwo.goToPrevSlide();
	});
});