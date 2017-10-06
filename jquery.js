$(document).ready(function(){
	$("#top").click(()=>{
		document.body.scrollTop = 0;
    	document.documentElement.scrollTop = 0;
	})
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        $('#top').css('display', 'block');
	    } else {
	        $('#top').css('display', 'none');
	    }
	}
})