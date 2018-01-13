$(function() {
	var $open = $('.openB');
	var $close = $('.closeB');
	var $left = $('.left');
	var $right = $('.right');
	var $back = $('.back');

	$open.on('click', function(){
		$left.addClass('open');
		setTimeout(function(){
			$right.addClass('open');
		}, 250);
		setTimeout(function(){
			$back.addClass('open');
		}, 350);
	});

	$close.on('click', function(){
		setTimeout(function(){
			$left.removeClass('open');
		}, 250);
		$right.removeClass('open');
		setTimeout(function(){
			$back.removeClass('open');
		}, 600);
	});
});