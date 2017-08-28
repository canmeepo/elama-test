const Slider = () => {
  const slider = document.querySelector('.slider');
  const sliderW = document.querySelector('.slider-wrapper');
  const sliderI = document.querySelectorAll('.slider-item');

  let index = 0;

  const init = () => {
    createDots();
    bindEvents();
  };

  const setActive = (item, currentIndex) => {
    for (let i = 0; i < sliderI.length; i++) {
      item[i].classList.remove('is-active');
    }
    item[currentIndex].classList.add('is-active');
  };

  const createDots = () => {
    const dotsW = document.createElement('div');
    dotsW.setAttribute('class', 'slider-dots');

    for (let d = 0; d < sliderI.length; d++) {
      const dotItem = document.createElement('a');

      dotItem.setAttribute('data-index', d);
      dotItem.setAttribute('href', '#' + d);
      dotItem.setAttribute('class', 'slider-dots__item');

      dotsW.appendChild(dotItem);
    }

    sliderW.appendChild(dotsW);
  };

  const bindEvents = () => {
    const dots = document.querySelectorAll('.slider-dots__item');

    sliderI[0].classList.add('is-active');
    dots[0].classList.add('is-active');

    dots.forEach((item, index) => {
      item.addEventListener('click', e => {
        e.preventDefault();

        setActive(sliderI, index);
        setActive(dots, index);
      });
    });
  };

  init();
};

const homeSlider = new Slider();
