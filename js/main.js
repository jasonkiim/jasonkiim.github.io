$(document).ready(function(){
	setTimeout(function(){
		$('.intro').addClass('draw');	
	},10);
	
	setTimeout(function(){
		$('.intro').addClass('fill');
	},1500);
	setTimeout( function(){
		$('.sentence').removeClass('hidden');
	},3200);
})