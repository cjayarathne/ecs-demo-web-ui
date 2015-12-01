
$(document).ready(function() {
	$("#submit").click(function() {
		var name = $('#text').val();
	    $.ajax({
	        url: "http://ecs-demo-api-94384319.us-east-1.elb.amazonaws.com/greeting/?name=" + name
	    }).then(function(data) {
	        
	       $('.greeting-content').append(data.id + " : " + data.content + "<br/>");
	       
	    }, function(data) {
	    	 $('.greeting-content').append("<font color=\"red\"> Oops... something went wrong. Try again. </font><br/>");
	    	
		});
	});
});
