// const headerSlider = document.querySelector('.page-header__slider-container');
// const extendedSlider = document.querySelector('.extended-films__slider-container');
// const digitalSlider = document.querySelector('.digital-release__slider-container');
// const famousSlider = document.querySelector('.famous-movies__slider-container');
// const newsSlider = document.querySelector('.movie-news__slider-container');


const headerSlider = new Splide('.page-header__slider-container', {
  pagination: false,
  perPage: 1,
  type: 'fade',
  arrows: false,
  drag: false,
  // autoplay: true,
  interval: 3000,
  speed: 1000,
  rewind: true,
}).mount();


const exSlider = new Splide('.extended-films__slider', {
  rewind : true,
  pagination: false,
  gap: 40,
  perPage: 3,
  perMove: 1,
  padding: {
    left : 150,
    right: 150,
  },

  breakpoints: {
		1280: {
     destroy: true,
		},
  },
}).mount();


const digitalSlider = new Splide('.digital-release__slider', {
  rewind : true,
  gap: 40,
  pagination: false,
  perPage: 4,
  perMove: 1,
  padding: {
    left : 150,
    right: 150,
  },

  breakpoints: {
		1280: {
     destroy: true,
		},
  },
}).mount();


// const fmsSlider = new Splide('.famous-movies__slider-container', {
//   rewind : true,
//   pagination: false,
//   gap: 20,
//   perPage: 2,
//   perMove: 1,
//   padding: {
//     left : 150,
//     right: 150,
//   },

//   breakpoints: {
// 		1280: {
//      destroy: true,
// 		},
//   },
// }).mount();


exSlider.on( 'moved', function(newIndex, oldIndex, destIndex) {
  const edge = exSlider.Components.Controller.edgeIndex;

  console.log(`oldIndex ${oldIndex} | newIndex ${newIndex} | destIndex ${destIndex} | edge ${edge}`);

  if ( newIndex == 0 && oldIndex == 0 && destIndex == 0 ) {
    exSlider.go( '<' );
  }

  if ( oldIndex == edge && destIndex == edge ) {
    exSlider.go( '>' );
  }
});


// digitalSlider.on( 'moved', function(newIndex, oldIndex, destIndex) {
//   const edge = digitalSlider.Components.Controller.edgeIndex;

//   console.log(`oldIndex ${oldIndex} | newIndex ${newIndex} | destIndex ${destIndex} | edge ${edge}`);

//   if ( newIndex == 0 && oldIndex == 0 && destIndex == 0 ) {
//     digitalSlider.go( '<' );
//   }

//   if ( oldIndex == edge && destIndex == edge ) {
//     digitalSlider.go( '>' );
//   }
// });
