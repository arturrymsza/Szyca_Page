$(function() {
	var $open = $('.openB');
	var $close = $('.closeB');
	var $left = $('.left');
	var $right = $('.right');
	var $back = $('.back');
	var $tailor = $('#tailor');
	var $aboutUs = $('#about-us');
	var $otherImage = $('#other-image');
	var $aboutUsBottom = $('#about-us-bottom');
	var $sentenceText = $('.sentence-text');
	var $sentenceShape = $('.sentence-shape');


	$close.on('click', function(){
		setTimeout(function(){
			$left.removeClass('open');
		}, 250);
		$right.removeClass('open');
		setTimeout(function(){
			$back.removeClass('open');
		}, 600);
	});

	$tailor.hide();
	$aboutUs.hide();
	$otherImage.hide();
	$aboutUsBottom.hide();
	/*$sentenceShape.hide();*/

	window.onscroll = function() {show()};

	function show() {
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			$left.addClass('open');
			setTimeout(function(){
				$right.addClass('open');
			}, 250);
			setTimeout(function(){
				$back.addClass('open');
			}, 350);	
		}
    	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        	$tailor.show( "fold", {horizFirst: true}, 1000 );
        	$aboutUs.delay(1000).show("drop", {direction: "right"}, 1000);
        }
        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        	$otherImage.delay(1000).show("fold", {direction: "right"}, 1000);
        	$aboutUsBottom.show("drop", {direction: "left"}, 1000);
        }
        if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
        	$sentenceText.addClass('sentence-scale');
        	$sentenceShape.delay(2000).animate({width: "300px"}, 2000, "swing");
        }
    }
});