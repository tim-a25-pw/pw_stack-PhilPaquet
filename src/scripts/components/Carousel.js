import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {};
    this.init();
  }

  init() {
    const swiper = new Swiper(this.element, this.options);
  }
}
