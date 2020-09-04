const headerSlider = new Splide('.page-header__slider-container', {
  destroy: true,
  pagination: false,
  perPage: 1,
  type: 'fade',
  arrows: false,
  drag: false,
  autoplay: true,
  interval: 3000,
  speed: 1000,
  rewind: true,

  1280: {
    destroy: false,
  },
}).mount();


const exSlider = new Splide('.extended-films__slider', {
  rewind : true,
  pagination: false,
  speed: 125,
  gap: 25,
  perPage: 5,
  perMove: 1,
  padding: {
    left : 70,
    right: 70,
  },

  breakpoints: {
		1280: {
     destroy: true,
		},
  },
}).mount();


const digitalSlider = new Splide('.digital-release__slider', {
  rewind : true,
  gap: 25,
  speed: 125,
  pagination: false,
  perPage: 5,
  perMove: 1,
  padding: {
    left : 70,
    right: 70,
  },

  breakpoints: {
		1280: {
     destroy: true,
		},
  },
}).mount();


const fmsSlider = new Splide('.famous-movies__slider', {
  rewind : true,
  pagination: false,
  speed: 150,
  gap: 25,
  perPage: 3,
  perMove: 1,
  padding: {
    left : 70,
    right: 70,
  },

  breakpoints: {
		600: {
      pagination: true,
      speed: 400,
      perPage: 1,
      perMove: 1,
      padding: {
        left : 0,
        right: 0,
      },
    },

		1280: {
      pagination: true,
      speed: 400,
      perPage: 2,
      perMove: 2,
      gap: 20,
      padding: {
        left : 20,
        right: 20,
      },
		},
  },
}).mount();


const newsSlider = new Splide('.movie-news__slider', {
  arrows: false,
  destroy: true,
  pagination: false,

  breakpoints: {
		600: {
      pagination: true,
      perPage: 1,
      perMove: 1,
      rewind : true,
      gap: 25,
      padding: {
        left : 0,
        right: 0,
      },
    },

		1280: {
      destroy: false,
      pagination: true,
      perPage: 2,
      perMove: 2,
      gap: 20,
      padding: {
        left : 20,
        right: 20,
      },
		},
  },
}).mount();


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


digitalSlider.on( 'moved', function(newIndex, oldIndex, destIndex) {
  const edge = digitalSlider.Components.Controller.edgeIndex;

  console.log(`oldIndex ${oldIndex} | newIndex ${newIndex} | destIndex ${destIndex} | edge ${edge}`);

  if ( newIndex == 0 && oldIndex == 0 && destIndex == 0 ) {
    digitalSlider.go( '<' );
  }

  if ( oldIndex == edge && destIndex == edge ) {
    digitalSlider.go( '>' );
  }
});

fmsSlider.on( 'moved', function(newIndex, oldIndex, destIndex) {
  const edge = fmsSlider.Components.Controller.edgeIndex;

  console.log(`oldIndex ${oldIndex} | newIndex ${newIndex} | destIndex ${destIndex} | edge ${edge}`);

  if ( newIndex == 0 && oldIndex == 0 && destIndex == 0 ) {
    fmsSlider.go( '<' );
  }

  if ( oldIndex == edge && destIndex == edge ) {
    fmsSlider.go( '>' );
  }
});
