$(document).ready(function() {
	alert("It's working");
});
	//By id - this adds a CSS class
$(function(){

	$('#example-one').addClass('highlight');

	//By class - we'll make two things change here.
	$('.example-two').css('border', '4px solid gray');
});
//By element
$('h5').click(function() {
	$('h5').fadeOut('slow','linear');
});

//https://jqueryui.com/draggable/
// $('#draggable').draggable();
$(function(){
	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();
});

//Anonymous functions because it's not  named
//(function(){})
$('li:contains("sad")').click(function(){
	$(this).hide()
});