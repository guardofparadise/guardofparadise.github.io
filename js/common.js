$(function() {

	// Custom JS

});
var mySwiper = new Swiper ('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

$(".card-body").equalHeights();

$("a").click(function(event){
	event.preventDefault();
});	
$(".button").click(function(){
	$("#callback h3").html($(this).text());
	$("#callback input[name=formname]").val($(this).text());
}).magnificPopup({
	type: 'inline',
	mainClass: 'mfp-forms'
});

$("ul li a").click(function(){
	$("#callback h3").html($(this).text());
	$("#callback input[name=formname]").val($(this).text());
}).magnificPopup({
	type: 'inline',
	mainClass: 'mfp-forms'
});

$(".toggle-mnu").click(function() {
	$(this).toggleClass('on');
	$(".navbar__navbar-wrap").slideToggle();
});

$(".top").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$(".arrow_down").click(function() {
	$("html, body").animate({scrollTop: $("header").height()}, "slow");
	return false;
});

$(".tab__switch-2").bind('click', function(){
	$(this).toggleClass('active');
	$(this).siblings('button').removeClass('active');
	$(".tab__body p").addClass("hidden");
	$(".p-txt").removeClass("hidden");
});

$(".tab__switch-1").bind('click', function(){
	$(this).toggleClass('active');
	$(this).siblings('button').removeClass('active');
	$(".tab__body p").removeClass("hidden");
	$(".p-txt").addClass("hidden");
});


