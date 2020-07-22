const searchButton = document.querySelector('.page-header__search-button');
const searchForm = document.querySelector('.page-header__search-wrapper');
const searchField = document.querySelector('.page-header__search-form-field');

searchButton.onclick = function(evt) {
	evt.preventDefault();
	searchButton.classList.toggle('page-header__search-button--open');
	searchForm.classList.toggle('page-header__search-wrapper--open');
	searchField.focus();
};
