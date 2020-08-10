// EXTEND VIDEO BLOCK
const body = document.querySelector('body');

// VIDEO 1

let exTrailer1 = document.querySelector('.extended-films__trailer-play-1');
let exModal1 = document.querySelector('.modal__extended-1');
let exModalVideo1 = document.querySelector('.ex-modal__video-1');
let exModalClose1 = document.querySelector('.ex-modal__close-1');

exTrailer1.addEventListener('click', function(evt) {
  evt.preventDefault();
	exModal1.classList.add('modal__show');
	body.style.position = 'fixed';
	exModalVideo1.autoplay = true;
	exModalVideo1.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (exModal1.classList.contains('modal__show')) {
      evt.preventDefault();
			exModal1.classList.remove('modal__show');
			body.style.position = '';
			exModalVideo1.autoplay = false;
			exModalVideo1.load();
    }
  }
});

exModalClose1.addEventListener('click', function(evt) {
	if (exModal1.classList.contains('modal__show')) {
		evt.preventDefault();
		exModal1.classList.remove('modal__show');
		body.style.position = '';
		exModalVideo1.autoplay = false;
		exModalVideo1.load();
	}
});

// VIDEO 2

let exTrailer2 = document.querySelector('.extended-films__trailer-play-2');
let exModal2 = document.querySelector('.modal__extended-2');
let exModalVideo2 = document.querySelector('.ex-modal__video-2');
let exModalClose2 = document.querySelector('.ex-modal__close-2');

exTrailer2.addEventListener('click', function(evt) {
  evt.preventDefault();
	exModal2.classList.add('modal__show');
	body.style.position = 'fixed';
	exModalVideo2.autoplay = true;
	exModalVideo2.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (exModal2.classList.contains('modal__show')) {
      evt.preventDefault();
			exModal2.classList.remove('modal__show');
			body.style.position = '';
			exModalVideo2.autoplay = false;
			exModalVideo2.load();
    }
  }
});

exModalClose2.addEventListener('click', function(evt) {
	if (exModal2.classList.contains('modal__show')) {
		evt.preventDefault();
		exModal2.classList.remove('modal__show');
		body.style.position = '';
		exModalVideo2.autoplay = false;
		exModalVideo2.load();
	}
});

// VIDEO 3

let exTrailer3 = document.querySelector('.extended-films__trailer-play-3');
let exModal3 = document.querySelector('.modal__extended-3');
let exModalVideo3 = document.querySelector('.ex-modal__video-3');
let exModalClose3 = document.querySelector('.ex-modal__close-3');

exTrailer3.addEventListener('click', function(evt) {
  evt.preventDefault();
	exModal3.classList.add('modal__show');
	body.style.position = 'fixed';
	exModalVideo3.autoplay = true;
	exModalVideo3.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (exModal3.classList.contains('modal__show')) {
      evt.preventDefault();
			exModal3.classList.remove('modal__show');
			body.style.position = '';
			exModalVideo3.autoplay = false;
			exModalVideo3.load();
    }
  }
});

exModalClose3.addEventListener('click', function(evt) {
	if (exModal3.classList.contains('modal__show')) {
		evt.preventDefault();
		exModal3.classList.remove('modal__show');
		body.style.position = '';
		exModalVideo3.autoplay = false;
		exModalVideo3.load();
	}
});

// VIDEO 4

let exTrailer4 = document.querySelector('.extended-films__trailer-play-4');
let exModal4 = document.querySelector('.modal__extended-4');
let exModalVideo4 = document.querySelector('.ex-modal__video-4');
let exModalClose4 = document.querySelector('.ex-modal__close-4');

exTrailer4.addEventListener('click', function(evt) {
  evt.preventDefault();
	exModal4.classList.add('modal__show');
	body.style.position = 'fixed';
	exModalVideo4.autoplay = true;
	exModalVideo4.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (exModal4.classList.contains('modal__show')) {
      evt.preventDefault();
			exModal4.classList.remove('modal__show');
			body.style.position = '';
			exModalVideo4.autoplay = false;
			exModalVideo4.load();
    }
  }
});

exModalClose4.addEventListener('click', function(evt) {
	if (exModal4.classList.contains('modal__show')) {
		evt.preventDefault();
		exModal4.classList.remove('modal__show');
		body.style.position = '';
		exModalVideo4.autoplay = false;
		exModalVideo4.load();
	}
});

// VIDEO 5

let exTrailer5 = document.querySelector('.extended-films__trailer-play-5');
let exModal5 = document.querySelector('.modal__extended-5');
let exModalVideo5 = document.querySelector('.ex-modal__video-5');
let exModalClose5 = document.querySelector('.ex-modal__close-5');

exTrailer5.addEventListener('click', function(evt) {
  evt.preventDefault();
	exModal5.classList.add('modal__show');
	body.style.position = 'fixed';
	exModalVideo5.autoplay = true;
	exModalVideo5.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (exModal5.classList.contains('modal__show')) {
      evt.preventDefault();
			exModal5.classList.remove('modal__show');
			body.style.position = '';
			exModalVideo5.autoplay = false;
			exModalVideo5.load();
    }
  }
});

exModalClose5.addEventListener('click', function(evt) {
	if (exModal5.classList.contains('modal__show')) {
		evt.preventDefault();
		exModal5.classList.remove('modal__show');
		body.style.position = '';
		exModalVideo5.autoplay = false;
		exModalVideo5.load();
	}
});



// FAMOUS VIDEO BLOCK

// VIDEO 1

let fmsTrailer1 = document.querySelector('.famous-movies__trailer-play-1');
let fmsModal1 = document.querySelector('.modal__famous-1');
let fmsModalVideo1 = document.querySelector('.fms-modal__video-1');
let fmsModalClose1 = document.querySelector('.fms-modal__close-1');

fmsTrailer1.addEventListener('click', function(evt) {
  evt.preventDefault();
	fmsModal1.classList.add('modal__show');
	body.style.position = 'fixed';
	fmsModalVideo1.autoplay = true;
	fmsModalVideo1.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (fmsModal1.classList.contains('modal__show')) {
      evt.preventDefault();
			fmsModal1.classList.remove('modal__show');
			body.style.position = '';
			fmsModalVideo1.autoplay = false;
			fmsModalVideo1.load();
    }
  }
});

fmsModalClose1.addEventListener('click', function(evt) {
	if (fmsModal1.classList.contains('modal__show')) {
		evt.preventDefault();
		fmsModal1.classList.remove('modal__show');
		body.style.position = '';
		fmsModalVideo1.autoplay = false;
		fmsModalVideo1.load();
	}
});

// VIDEO 2

let fmsTrailer2 = document.querySelector('.famous-movies__trailer-play-2');
let fmsModal2 = document.querySelector('.modal__famous-2');
let fmsModalVideo2 = document.querySelector('.fms-modal__video-2');
let fmsModalClose2 = document.querySelector('.fms-modal__close-2');

fmsTrailer2.addEventListener('click', function(evt) {
  evt.preventDefault();
	fmsModal2.classList.add('modal__show');
	body.style.position = 'fixed';
	fmsModalVideo2.autoplay = true;
	fmsModalVideo2.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (fmsModal2.classList.contains('modal__show')) {
      evt.preventDefault();
			fmsModal2.classList.remove('modal__show');
			body.style.position = '';
			fmsModalVideo2.autoplay = false;
			fmsModalVideo2.load();
    }
  }
});

fmsModalClose2.addEventListener('click', function(evt) {
	if (fmsModal2.classList.contains('modal__show')) {
		evt.preventDefault();
		fmsModal2.classList.remove('modal__show');
		body.style.position = '';
		fmsModalVideo2.autoplay = false;
		fmsModalVideo2.load();
	}
});

// VIDEO 3

let fmsTrailer3 = document.querySelector('.famous-movies__trailer-play-3');
let fmsModal3 = document.querySelector('.modal__famous-3');
let fmsModalVideo3 = document.querySelector('.fms-modal__video-3');
let fmsModalClose3 = document.querySelector('.fms-modal__close-3');

fmsTrailer3.addEventListener('click', function(evt) {
  evt.preventDefault();
	fmsModal3.classList.add('modal__show');
	body.style.position = 'fixed';
	fmsModalVideo3.autoplay = true;
	fmsModalVideo3.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (fmsModal3.classList.contains('modal__show')) {
      evt.preventDefault();
			fmsModal3.classList.remove('modal__show');
			body.style.position = '';
			fmsModalVideo3.autoplay = false;
			fmsModalVideo3.load();
    }
  }
});

fmsModalClose3.addEventListener('click', function(evt) {
	if (fmsModal3.classList.contains('modal__show')) {
		evt.preventDefault();
		fmsModal3.classList.remove('modal__show');
		body.style.position = '';
		fmsModalVideo3.autoplay = false;
		fmsModalVideo3.load();
	}
});

// VIDEO 4

let fmsTrailer4 = document.querySelector('.famous-movies__trailer-play-4');
let fmsModal4 = document.querySelector('.modal__famous-4');
let fmsModalVideo4 = document.querySelector('.fms-modal__video-4');
let fmsModalClose4 = document.querySelector('.fms-modal__close-4');

fmsTrailer4.addEventListener('click', function(evt) {
  evt.preventDefault();
	fmsModal4.classList.add('modal__show');
	body.style.position = 'fixed';
	fmsModalVideo4.autoplay = true;
	fmsModalVideo4.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (fmsModal4.classList.contains('modal__show')) {
      evt.preventDefault();
			fmsModal4.classList.remove('modal__show');
			body.style.position = '';
			fmsModalVideo4.autoplay = false;
			fmsModalVideo4.load();
    }
  }
});

fmsModalClose4.addEventListener('click', function(evt) {
	if (fmsModal4.classList.contains('modal__show')) {
		evt.preventDefault();
		fmsModal4.classList.remove('modal__show');
		body.style.position = '';
		fmsModalVideo4.autoplay = false;
		fmsModalVideo4.load();
	}
});

// VIDEO 5

let fmsTrailer5 = document.querySelector('.famous-movies__trailer-play-5');
let fmsModal5 = document.querySelector('.modal__famous-5');
let fmsModalVideo5 = document.querySelector('.fms-modal__video-5');
let fmsModalClose5 = document.querySelector('.fms-modal__close-5');

fmsTrailer5.addEventListener('click', function(evt) {
  evt.preventDefault();
	fmsModal5.classList.add('modal__show');
	body.style.position = 'fixed';
	fmsModalVideo5.autoplay = true;
	fmsModalVideo5.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (fmsModal5.classList.contains('modal__show')) {
      evt.preventDefault();
			fmsModal5.classList.remove('modal__show');
			body.style.position = '';
			fmsModalVideo5.autoplay = false;
			fmsModalVideo5.load();
    }
  }
});

fmsModalClose5.addEventListener('click', function(evt) {
	if (fmsModal5.classList.contains('modal__show')) {
		evt.preventDefault();
		fmsModal5.classList.remove('modal__show');
		body.style.position = '';
		fmsModalVideo5.autoplay = false;
		fmsModalVideo5.load();
	}
});

// VIDEO 6

let fmsTrailer6 = document.querySelector('.famous-movies__trailer-play-6');
let fmsModal6 = document.querySelector('.modal__famous-6');
let fmsModalVideo6 = document.querySelector('.fms-modal__video-6');
let fmsModalClose6 = document.querySelector('.fms-modal__close-6');

fmsTrailer6.addEventListener('click', function(evt) {
  evt.preventDefault();
	fmsModal6.classList.add('modal__show');
	body.style.position = 'fixed';
	fmsModalVideo6.autoplay = true;
	fmsModalVideo6.load();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (fmsModal6.classList.contains('modal__show')) {
      evt.preventDefault();
			fmsModal6.classList.remove('modal__show');
			body.style.position = '';
			fmsModalVideo6.autoplay = false;
			fmsModalVideo6.load();
    }
  }
});

fmsModalClose6.addEventListener('click', function(evt) {
	if (fmsModal6.classList.contains('modal__show')) {
		evt.preventDefault();
		fmsModal6.classList.remove('modal__show');
		body.style.position = '';
		fmsModalVideo6.autoplay = false;
		fmsModalVideo6.load();
	}
});
