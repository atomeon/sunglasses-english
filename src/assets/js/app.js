import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import * as lazySizes from 'lazysizes';
import * as from from 'lazysizes/plugins/unveilhooks/ls.unveilhooks.js';

import "./modules/sliders";
import "./modules/lightgallery";

// window.addEventListener('touchmove', e => { e.preventDefault(); }, {passive:true});

$(document).foundation();
window.onload = function () {


	// window.addEventListener('touchmove', event => {}, {passive:true});
	lazySizes.init();
	document.querySelector('.preloader').remove();
	$('.header-nav .menu-x a, .mobile-menu ul a, .header__title a, .hero-logo').click(function (e) {
		e.preventDefault();
		let target = $(this).attr('href');
		if ($('.section-intro__navigation').innerWidth() < 768) {
			$('html, body').animate({
				scrollTop: $(target).offset().top - 61
			}, 800);
		} else {
			$('html, body').animate({
				scrollTop: $(target).offset().top - 80
			}, 800);
			$('#offCanvas').foundation('close');
		}
	});

	// Forms logic
	$('form').submit(function () {
		event.preventDefault();
		var form = $(this);
		$.ajax({
			type: $(this).attr('method'),
			url: $(this).attr('action'),
			contentType: false,
			cache: false,
			data: new FormData(this),
			processData: false,

			success: function () {
				// alert('SUCCESS')
				$('#succes-form').foundation('open');
				form.hide();
			}
		})
	});
}

