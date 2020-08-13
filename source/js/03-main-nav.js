const navButton = document.querySelector('.page-header__nav-button');
const mainNav = document.querySelector('.page-header__nav-list');

navButton.onclick = function(evt) {
	evt.preventDefault();
	navButton.classList.toggle('page-header__nav-button--open');
	mainNav.classList.toggle('page-header__nav-list--show');
};
