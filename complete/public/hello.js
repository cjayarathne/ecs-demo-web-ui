
$(document).ready(function() {
	$("#submit").click(function() {
		var name = $('#text').val();
	    $.ajax({
	        url: "http://localhost:9000/greeting/?name=" + name
	        
	    }).then(function(data) {
	        
	       $('.greeting-content').append(data.id + " : " + data.content + "<br/>");
	       
	    }, function(data) {
	    	 $('.greeting-content').append("<font color=\"red\"> Oops... something went wrong. Try again. </font><br/>");
	    	
		});
	});
});
