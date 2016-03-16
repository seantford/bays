

//on nav clicks, show only relevant elements and adjust
//nav-bar formatting to highlight selected nav tab


//when the listen button is clicked...
$("#listen-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".store").hide();
	$(".news").hide();
	$(".contact").hide();
});


//when the store button is clicked...
$("#store-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".store").show();
	$(".news").hide();
	$(".contact").hide();
});


//when the news button is clicked...
$("#news-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".store").hide();
	$(".news").show();
	$(".contact").hide();
});


//when the contact button is clicked...
$("#contact-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".store").hide();
	$(".news").hide();
	$(".contact").show();
});











