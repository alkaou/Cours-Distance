// A $( document ).ready() block.
$( document ).ready(function() {
    
	var msg_covid = $('.messages-covid');

	var colors = new Cycle(['green','yellow', 'red']);

	setInterval(function () {
	    msg_covid.css('color', colors.next());
	}, 2000);
	function Cycle(array) {
	    var i = 0;
	    this.next = function () {
	       i %= array.length;
	       return array[i++];
	    }
	}



	//Pour les videos
	var iframe = $('.cours-video-play');
	var videos_btn = $('.video-for-play');
	
	videos_btn.on('click', function (e) {
		var videos_source = $(this).data('video');
		iframe.attr("src", videos_source);
	});


});