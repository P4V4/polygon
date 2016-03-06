jQuery( document ).ready(function() {
	
	var anTime = 200;
	
	$("#receiptsButton").click(function() {
		$("#receipts").css({left: 414}).animate({left: 0}, anTime, "swing");
		$("#splash").animate({left: -414}, anTime, "swing");
	});

	$("#statsButton").click(function() {
		$("#stats").css({left: 414}).animate({left: 0}, anTime, "swing");
		$("#splash").animate({left: -414}, anTime, "swing");
	});
	
	$("#receiptsBack").click(function() {
		$("#receipts").animate({left: 414}, anTime, "swing");
		$("#splash").animate({left: 0}, anTime, "swing");
	});
	
	$("#box1").click(function() {
		$("#bill1").animate({left: 0}, anTime, "swing");
		$("#receipts").animate({left: -414}, anTime, "swing");
	});
	$("#box2").click(function() {
		$("#bill2").animate({left: 0}, anTime, "swing");
		$("#receipts").animate({left: -414}, anTime, "swing");
	});
	$("#box3").click(function() {
		$("#bill3").animate({left: 0}, anTime, "swing");
		$("#receipts").animate({left: -414}, anTime, "swing");
	});
	
	$("#billBack1").click(function() {
		$("#receipts").animate({left: 0}, anTime, "swing");
		$("#bill1").animate({left: 414}, anTime, "swing");
	});
	
	$("#billBack2").click(function() {
		$("#receipts").animate({left: 0}, anTime, "swing");
		$("#bill2").animate({left: 414}, anTime, "swing");
	});
	
	$("#billBack3").click(function() {
		$("#receipts").animate({left: 0}, anTime, "swing");
		$("#bill3").animate({left: 414}, anTime, "swing");
	});
	
	$("#statsBack").click(function() {
		$("#splash").animate({left: 0}, anTime, "swing");
		$("#stats").animate({left: 414}, anTime, "swing");
	});

});