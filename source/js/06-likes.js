let heart = document.querySelector('.page-footer__like-tap');
let likesNumber = document.querySelector('.page-footer__like-number');

heart.onclick = function () {
  if (heart.classList.contains('page-footer__like--added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('page-footer__like--added');
};
