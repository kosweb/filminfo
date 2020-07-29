var multiItemSlider = (function () {
	return function (selector, config) {
		var
			_slider = document.querySelector(`.${selector}__slider`), // основный элемент блока
			_sliderContainer = _slider.querySelector(`.${selector}__slider-list`), // контейнер для .slider-item
			_sliderItems = _slider.querySelectorAll(`.${selector}__slider-item`), // коллекция .slider-item
			_sliderControls = _slider.querySelectorAll(`.${selector}__slider-control`), // элементы управления
			_currentPosition = 0, // позиция левого активного элемента
			_transformValue = 0, // значение транфсофрмации .slider_wrapper
			_itemsWidth = parseFloat(getComputedStyle(_sliderContainer).width), // ширина обёртки
			_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
			_transformStep = _itemWidth / _itemsWidth * 100, // величина шага (для трансформации)
			_itemsArray = [], // массив элементов
			_timerId,
			_indicatorItems,
			_indicatorIndex = 0,
			_indicatorIndexMax = _sliderItems.length - 1,
			_stepTouch = 50,
			_config = {
				isAutoplay: false, // автоматическая смена слайдов
				directionAutoplay: 'next', // направление смены слайдов
				delayAutoplay: 5000, // интервал между автоматической сменой слайдов
				isPauseOnHover: true // устанавливать ли паузу при поднесении курсора к слайдеру
			};

		// настройка конфигурации слайдера в зависимости от полученных ключей
		for (var key in config) {
			if (key in _config) {
				_config[key] = config[key];
			}
		}

		// наполнение массива _itemsArray
		for (var i = 0, length = _sliderItems.length; i < length; i++) {
			_itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
		}

		// переменная position содержит методы с помощью которой можно получить минимальный и максимальный индекс элемента, а также соответствующему этому индексу позицию
		var position = {
			getItemIndex: function (mode) {
				var index = 0;
				for (var i = 0, length = _itemsArray.length; i < length; i++) {
					if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {
						index = i;
					}
				}
				return index;
			},
			getItemPosition: function (mode) {
				return _itemsArray[position.getItemIndex(mode)].position;
			}
		};

		// функция, выполняющая смену слайда в указанном направлении
		var _move = function (direction) {
			var nextItem, currentIndicator = _indicatorIndex;
			if (direction === 'next') {
				_currentPosition++;
				if ((_currentPosition + _itemsWidth / _itemWidth - 1) === position.getItemPosition('max')) {
					nextItem = position.getItemIndex('min');
					_itemsArray[nextItem].position = position.getItemPosition('max') + 1;
					_itemsArray[nextItem].transform += (_itemsArray.length * 100);
					_itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
				}
				_transformValue -= _transformStep;
				_indicatorIndex = _indicatorIndex + 1;
				if (_indicatorIndex > _indicatorIndexMax) {
					_indicatorIndex = 0;
				}
			} else {
				_currentPosition--;
				if (_currentPosition === position.getItemPosition('min')) {
					nextItem = position.getItemIndex('max');
					_itemsArray[nextItem].position = position.getItemPosition('min') - 1;
					_itemsArray[nextItem].transform -= (_itemsArray.length * 100);
					_itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
				}
				_transformValue += _transformStep;
				_indicatorIndex = _indicatorIndex - 1;
				if (_indicatorIndex < 0) {
					_indicatorIndex = _indicatorIndexMax;
				}
			}
			_sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';
			_indicatorItems[currentIndicator].classList.remove('extended-films__dot--active');
			_indicatorItems[_indicatorIndex].classList.add('extended-films__dot--active');
		};

		// функция, осуществляющая переход к слайду по его порядковому номеру
		var _moveTo = function (index) {
			var i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';
			while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
				_move(direction);
				i++;
			}
		};

		// функция для запуска автоматической смены слайдов через промежутки времени
		var _startAutoplay = function () {
			if (!_config.isAutoplay) {
				return;
			}
			_stopAutoplay();
			_timerId = setInterval(function () {
				_move(_config.directionAutoplay);
			}, _config.delayAutoplay);
		};

		// функция, отключающая автоматическую смену слайдов
		var _stopAutoplay = function () {
			clearInterval(_timerId);
		};

		// функция, добавляющая индикаторы к слайдеру
		var _addIndicators = function () {
			var indicatorsContainer = document.createElement('div');
			indicatorsContainer.classList.add(`${selector}__dots-wrapper`);
			for (var i = 0, length = _sliderItems.length; i < length; i++) {
				var sliderIndicatorsItem = document.createElement('div');
				sliderIndicatorsItem.classList.add(`${selector}__dot`);

				if (i === 0) {
					sliderIndicatorsItem.classList.add(`${selector}__dot--active`);
				}
				sliderIndicatorsItem.setAttribute("data-slide-to", i);
				indicatorsContainer.appendChild(sliderIndicatorsItem);
			}
			_slider.appendChild(indicatorsContainer);
			_indicatorItems = _slider.querySelectorAll(`.${selector}__dots-wrapper > div`)
		};


		var _isTouchDevice = function () {
			return !!('ontouchstart' in window || navigator.maxTouchPoints);
		};

		// функция, осуществляющая установку обработчиков для событий
		var _setUpListeners = function () {
			var _startX = 0;
			if (_isTouchDevice()) {
				_slider.addEventListener('touchstart', function (e) {
					_startX = e.changedTouches[0].clientX;
					_startAutoplay();
				});
				_slider.addEventListener('touchend', function (e) {
					var
						_endX = e.changedTouches[0].clientX,
						_deltaX = _endX - _startX;
					if (_deltaX > _stepTouch) {
						_move('prev');
					} else if (_deltaX < -_stepTouch) {
						_move('next');
					}
					_startAutoplay();
				});
			} else {
				for (var i = 0, length = _sliderControls.length; i < length; i++) {
					_sliderControls[i].classList.add('slider__control_show');
				}
			}
			_slider.addEventListener('click', function (e) {
				if (e.target.classList.contains(`${selector}__slider-control`)) {

					e.preventDefault();
					_move(e.target.classList.contains(`${selector}__slider-control--next`) ? 'next' : 'prev');
					_startAutoplay();
				} else if (e.target.getAttribute('data-slide-to')) {
					e.preventDefault();
					_moveTo(parseInt(e.target.getAttribute('data-slide-to')));
					_startAutoplay();
				}
			});
			document.addEventListener('visibilitychange', function () {
				if (document.visibilityState === "hidden") {
					_stopAutoplay();
				} else {
					_startAutoplay();
				}
			}, false);
			if (_config.isPauseOnHover && _config.isAutoplay) {
				_slider.addEventListener('mouseenter', function () {
					_stopAutoplay();
				});
				_slider.addEventListener('mouseleave', function () {
					_startAutoplay();
				});
			}
		};

		var _initialSlideSetup = function () {
			var _nextItem = position.getItemIndex('max');
			_itemsArray[_nextItem].position = position.getItemPosition('min') - 1;
			_itemsArray[_nextItem].transform -= _itemsArray.length * 100;
			_itemsArray[_nextItem].item.style.transform = 'translateX(' + _itemsArray[_nextItem].transform + '%)';
		}

		// первоначальная настройка сллайдов
		_initialSlideSetup();
		// добавляем индикаторы к слайдеру
		_addIndicators();
		// установливаем обработчики для событий
		_setUpListeners();
		// запускаем автоматическую смену слайдов, если установлен соответствующий ключ
		_startAutoplay();

		return {
			// метод слайдера для перехода к следующему слайду
			next: function () {
				_move('next');
			},
			// метод слайдера для перехода к предыдущему слайду
			left: function () {
				_move('prev');
			},
			// метод отключающий автоматическую смену слайдов
			stop: function () {
				_config.isAutoplay = false;
				_stopAutoplay();
			},
			// метод запускающий автоматическую смену слайдов
			cycle: function () {
				_config.isAutoplay = true;
				_startAutoplay();
			}
		}
	}
}());

multiItemSlider('extended-films', {
	isAutoplay: true
});

multiItemSlider('famous-movies', {
	isAutoplay: true
});
