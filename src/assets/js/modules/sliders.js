import $ from "jquery";
import 'slick-carousel';


$('.gallery-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: false,
	asNavFor: '.gallery-nav'
});
$('.gallery-nav').slick({
	slidesToScroll: 1,
	asNavFor: '.gallery-slider',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	slidesToShow: 5,
	prevArrow: $('.gallery-arrow--left'),
	nextArrow: $('.gallery-arrow--right'),
	// responsive: [
	// 	{
	// 		breakpoint: 1024,
	// 		settings: "unslick"
	// 	}
	// ]
	// responsive: [
	// 	{
	// 		breakpoint: 9999,
	// 		settings: {
	// 			slidesToShow: 5,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 1024,
	// 		settings: {
	// 			slidesToShow: 4,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 600,
	// 		settings: "unslick"
	// 	}
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	// ]
});