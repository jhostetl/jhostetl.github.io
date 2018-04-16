$(document).ready(function() {
	$("#hide").click(function() {
	  $("#left").hide();
	  $("#right").removeClass("image2");
	  $("#right").addClass("floatCenter");

	});
	$("#show").click(function() {
	  $("#left").show();
	  $("#right").addClass("image2");
	  $("#right").removeClass("floatCenter");
	});	
});