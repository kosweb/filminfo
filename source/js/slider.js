const extendedSlider = document.querySelector('.swiper-container');
const famousSlider = document.querySelector('.famous-movies__slider-container');

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
