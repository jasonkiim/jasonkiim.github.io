var doc = document.documentElement;
var skillset = $('#skillset');

$(document).scroll(function(event) {
	var topScroll = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	var bottomScroll = topScroll + $(window).height();
	var paddingElement = parseInt(skillset.css('padding'));
	var topElement = skillset.offset().top - paddingElement;

	var heightElement = skillset.height();
	
	var bottomElement = heightElement + topElement;

	if(topElement<topScroll){
		skillset.removeClass('deactive');
	}else{
		skillset.addClass('deactive');
	}
});