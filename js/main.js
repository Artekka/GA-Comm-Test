$(document).ready(function(){
	$('.nav-main > li').bind('mouseover mouseout', function () {
		$(this).find('ul').toggleClass('hidden');
	});	
});