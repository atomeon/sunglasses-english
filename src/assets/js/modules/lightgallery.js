import 'lightgallery.js';
import 'lg-thumbnail.js';
import 'lg-hash.js';
import 'lg-zoom.js';

import { currentGlobalSlide } from './sliders';

let lightGalleryEvent = (e) => {
	// console.log(e);
	// console.log(e.this);
	let galleryTrigger = e.target;
	let galleryIndex = currentGlobalSlide;
	// let galleryIndex = e.path[2].dataset.slickIndex;

	lightGallery(galleryTrigger, {
		thumbnail: true,
		download: false,
		showThumbByDefault: true,
		hash: true,
		zoom: true,
		hideBarsDelay: 2000,
		fullScreen: false,

		dynamic: true,
		dynamicEl: window.galleryLocal,

		index: parseInt(galleryIndex)
	})
};

document.querySelector('.gallery-slider').addEventListener(('click'), lightGalleryEvent);