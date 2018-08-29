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
import './modules/input-mask';
import './modules/validation';
import './modules/scroll-animate';
import './modules/map';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('../sw.js')
			.then(reg => console.log('REGISTERED'))
			.catch(err => console.log(`SW Error:  ${err}`))

	})
}