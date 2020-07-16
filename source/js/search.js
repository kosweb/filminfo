const searchButton = document.querySelector('.page-header__search-button');
const searchField = document.querySelector('.page-header__search-wrapper');


searchButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	if (searchButton.classList.contains('page-header__search-button--open') & searchField.classList.contains('page-header__search-wrapper--open')) {
		searchButton.classList.remove('page-header__search-button--open');
		searchField.classList.remove('page-header__search-wrapper--open');
		} else {
			searchButton.classList.add('page-header__search-button--open');
			searchField.classList.add('page-header__search-wrapper--open');
		}
});
