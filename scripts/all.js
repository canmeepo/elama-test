'use strict';

var Slider = function Slider() {
  var slider = document.querySelector('.slider');
  var sliderW = document.querySelector('.slider-wrapper');
  var sliderI = document.querySelectorAll('.slider-item');

  var index = 0;

  var init = function init() {
    createDots();
    bindEvents();
  };

  var setActive = function setActive(item, currentIndex) {
    for (var i = 0; i < sliderI.length; i++) {
      item[i].classList.remove('is-active');
    }
    item[currentIndex].classList.add('is-active');
  };

  var createDots = function createDots() {
    var dotsW = document.createElement('div');
    dotsW.setAttribute('class', 'slider-dots');

    for (var d = 0; d < sliderI.length; d++) {
      var dotItem = document.createElement('a');

      dotItem.setAttribute('data-index', d);
      dotItem.setAttribute('href', '#' + d);
      dotItem.setAttribute('class', 'slider-dots__item');

      dotsW.appendChild(dotItem);
    }

    sliderW.appendChild(dotsW);
  };

  var bindEvents = function bindEvents() {
    var dots = document.querySelectorAll('.slider-dots__item');

    sliderI[0].classList.add('is-active');
    dots[0].classList.add('is-active');

    dots.forEach(function (item, index) {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        setActive(sliderI, index);
        setActive(dots, index);
      });
    });
  };

  init();
};

var homeSlider = new Slider();