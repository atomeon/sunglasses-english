import $ from 'jquery';
// window.addEventListener('touchmove', e => { e.preventDefault(); }, {passive:true});


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
