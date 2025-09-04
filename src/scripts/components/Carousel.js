import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
        clickable: true,
      },
    };
    this.init();
  }

  init() {
    const swiper = new Swiper(this.element, this.options);
  }
}
