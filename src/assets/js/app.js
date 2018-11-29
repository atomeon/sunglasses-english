import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import * as lazySizes from 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks.js';

import "./modules/sliders";
import "./modules/lightgallery";
import './modules/input-mask';
import './modules/validation';
import './modules/scroll-animate';
// import './modules/map';

window.onload = function () {
	$(document).foundation();
	lazySizes.init();

	// document.querySelector('.preloader').remove();
	document.querySelector('.connect').classList.add('is-active');
	document.querySelector('.connect-mobile').classList.add('is-active');
}

// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker
// 			.register('../sw.js')
// 			.then(reg => console.log('REGISTERED'))
// 			.catch(err => console.log(`SW Error:  ${err}`))
// 	})
// }