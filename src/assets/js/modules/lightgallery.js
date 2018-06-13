import 'lightgallery.js';
import 'lg-thumbnail.js';
import 'lg-hash.js';
import 'lg-zoom.js';

let lightGalleryEvent = (e) => {
	let galleryTrigger = e.target;
	let galleryIndex = e.path[2].dataset.slickIndex;
	// console.log(e);
	// console.log(e.path[2].dataset.slickIndex);
	// console.log(galleryIndex);

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
document.querySelector('.gallery-slider').addEventListener(('touchend'), lightGalleryEvent);