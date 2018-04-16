$(document).ready(function() {
	$("#hide").click(function() {
	  $("#left").hide();
	  $("#right").css("float:center");
	});
	$("#show").click(function() {
	  $("#left").show();
	  $("#right").css("float:right");
	});	
});