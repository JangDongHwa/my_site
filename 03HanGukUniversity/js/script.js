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
	$(".sliderTwo").bxSlider({
		auto:true, controls:false
	});
	var mysliderTwo = $(".sliderThree").bxSlider({
		mode:'vertical',pager:false,controls:false
	});
	$(".nextBtnTwo").click(function(){
		mysliderTwo.goToNextSlide();
	});
	$(".prevBtnTwo").click(function(){
		mysliderTwo.goToPrevSlide();
	});
	$(".modal").colorbox({
		iframe:true, innerWidth:560, innerHeight:315
	});
});