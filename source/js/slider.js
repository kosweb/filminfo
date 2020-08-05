const headerSlider = document.querySelector('.page-header__slider-container');
const extendedSlider = document.querySelector('.swiper-container');
const famousSlider = document.querySelector('.famous-movies__slider-container');

let mySwiperHead = new Swiper(headerSlider, {
	slidesPerView: 1,
	loop: true,
	effect: 'fade',
	speed: 500,
	autoplay: {
		delay: 2800,
  },
})

let mySwiperEx = new Swiper(extendedSlider, {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	pagination: {
    el: '.extended-pagination',
		type: 'bullets',
		clickable: true,
	},
})

let mySwiperFms = new Swiper(famousSlider, {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	pagination: {
    el: '.famous-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
