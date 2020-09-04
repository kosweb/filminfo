let heart = document.querySelector('.page-footer__like-tap');
let likesNumber = document.querySelector('.page-footer__like-number');
let counter = 0;

heart.onclick = function () {
  if (heart.classList.contains('page-footer__like--added')) {
    counter--;
  } else {
    counter++;
  }
  heart.classList.toggle('page-footer__like--added');
};
