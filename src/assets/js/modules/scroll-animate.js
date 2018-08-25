import $ from 'jquery';
// window.addEventListener('touchmove', e => { e.preventDefault(); }, {passive:true});

$(document).foundation();
window.onload = function () {
	// document.querySelector('.connect').style.display = 'block';
	document.querySelector('.connect').classList.add('is-active');
	document.querySelector('.connect-mobile').classList.add('is-active');

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
}