/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, FreeMode } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.section-03__slider')) { 
		new Swiper('.section-03__slider', {
			modules: [Navigation, FreeMode],
			observer: true,
			observeParents: true,
			// spaceBetween: 0,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.section-03__btn.swiper-button-prev',
				nextEl: '.section-03__btn.swiper-button-next',
			},
			breakpoints: {
				300: {
					spaceBetween: 32,
					slidesPerView: 2,
					loop: true,
				},
				481: {
					spaceBetween: 42,
					slidesPerView: 'auto',
					loop: true,
				},
				769: {
					spaceBetween: 42,
					slidesPerView: 4,
					loop:false,
				},
			},
			// Події
			on: {

			}
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});