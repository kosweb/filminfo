const navButton = document.querySelector('.page-header__nav-button');
const mainNav = document.querySelector('.page-header__nav-list');


navButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	if (navButton.classList.contains('nav-button--open') & mainNav.classList.contains('show-navigation')) {
		navButton.classList.remove('nav-button--open');
		mainNav.classList.remove('show-navigation');
		} else {
			navButton.classList.add('nav-button--open');
			mainNav.classList.add('show-navigation');
		}
});
