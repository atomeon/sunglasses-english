
function init() {
	// Создание карты.    
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчнию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [43.225224806884796, 76.93416048476224],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 18,
	});

	var polyline = new ymaps.Polyline([
		[43.2259741273382, 76.93342907058663],
		[43.2253190138179, 76.93431419956154],
		[43.22508756483128, 76.93399769889778],
		[43.22503656747794, 76.93407816516823]
	], {
			hintContent: "Цокольный этаж, в студии Аруна"
		}, {
			draggable: false,
			strokeColor: '#bc34ff',
			strokeWidth: 5,
			// Первой цифрой задаем длину штриха. Второй цифрой задаем длину разрыва.
			// strokeStyle: '1 4',
		});
	var myPlacemarkWithContent = new ymaps.Placemark([43.22504435492767, 76.93414439150816], {
		hintContent: 'Sunglasses English',
		balloonContent: 'Курсы английского языка для всех +7(700)3030692',
		iconContent: '<div style="width: 114px; background: #fff; padding: 5px 10px; border-radius: 20px;" >Sunglasses English</div>'
	}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'assets/img/sg-pin-ready.png',
			// Размеры метки.
			iconImageSize: [48, 97],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-24, -95],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [54, 10],
			// Макет содержимого.
			// iconContentLayout: MyIconContentLayout
		});

	myMap.geoObjects.add(polyline);
	myMap.behaviors.disable(['scrollZoom', 'drag']);
	myMap.geoObjects.add(myPlacemarkWithContent);
	myMap.controls.remove('trafficControl').remove('typeSelector').remove('searchControl').add('routeButtonControl');

	document.querySelector('#map').addEventListener('mousedown', function () {
		if (!(myMap.behaviors.isEnabled('drag'))) {
			myMap.behaviors.enable('drag');
		}
	})
}
ymaps.ready(init);









