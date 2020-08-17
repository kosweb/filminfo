const headerSlider = document.querySelector('.page-header__slider-container');
const extendedSlider = document.querySelector('.extended-films__slider-container');
const digitalSlider = document.querySelector('.digital-release__slider-container');
const famousSlider = document.querySelector('.famous-movies__slider-container');
const newsSlider = document.querySelector('.movie-news__slider-container');

let mySwiperHead = new Swiper(headerSlider, {
	slidesPerView: 1,
	loop: true,
	effect: 'fade',
  speed: 500,
	// autoplay: {
	// 	delay: 2000,
  // },
})

let mySwiperEx = new Swiper(extendedSlider, {
  slidesPerView: 'auto',
  spaceBetween: 0,
  cssMode: true,
  loop: false,

  breakpoints: {
    1280: {
      cssMode: false,
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }
})

let mySwiperDig = new Swiper(digitalSlider, {
  breakpoints: {
    1280: {
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }
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
	// navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
	// },
})


let mySwiperNews = new Swiper(newsSlider, {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	pagination: {
    el: '.news-pagination',
		type: 'fraction',
	},
})




// GLIDER CONFIG
