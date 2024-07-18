// swiperJs

const swiper = new Swiper ('.swiper',{
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    deelay: 3000,
  },
});

// tabs

let tabsBtn = document.querySelectorAll('.tab-wrapper__button');
let tabsSlide = document.querySelectorAll('.step-slide');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tab-wrapper__button--active')});
    e.currentTarget.classList.add('tab-wrapper__button--active');

    tabsSlide.forEach(function(element){element.classList.remove('step-slide--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('step-slide--active');
  });
});

// accordion

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

document.getElementsByClassName ('faq-list__header').onclick = function() {
  document.getElementsByClassName ('accordion__control ').classList.add('accordion--active');
};