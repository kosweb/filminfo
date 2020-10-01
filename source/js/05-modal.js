const body = document.querySelector('body');

// FAMOUS VIDEO BLOCK

let fmsModal = document.querySelectorAll('.modal__famous');
let fmsModalShow = document.querySelectorAll('.famous-movies__trailer-play');
let fmsModalVideo = document.querySelectorAll('.fms-modal__video');
let fmsModalClose = document.querySelectorAll('.fms-modal__close');

fmsModalShow.forEach(function(el, i) {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    fmsModal[i].classList.add('modal__show');
    body.style.overflow = 'hidden';
    fmsModalVideo[i].autoplay = true;
    fmsModalVideo[i].load();
  });
});

fmsModalClose.forEach(function(el, i) {
  el.addEventListener('click', function(evt) {
    if (fmsModal[i].classList.contains('modal__show')) {
      evt.preventDefault();
      fmsModal[i].classList.remove('modal__show');
      body.style.overflow = '';
      fmsModalVideo[i].autoplay = false;
      fmsModalVideo[i].load();
    };
  });
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    fmsModal.forEach(function(el, i) {
      if (el.classList.contains('modal__show')) {
        evt.preventDefault();
        fmsModal[i].classList.remove('modal__show');
        body.style.overflow = '';
        fmsModalVideo[i].autoplay = false;
        fmsModalVideo[i].load();
      };
    });
  };
});
