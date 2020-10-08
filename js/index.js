const burger = document.querySelector('.section__header-burger');
const menu = document.querySelector('.section__header-menu');
const cover = document.querySelector('.section__cover');
const h1 = document.querySelector('.section__content-info h1');
const h4 = document.querySelector('.section__content-info h4');
const ionIcon = document.querySelector('.ion-icon');

burger.addEventListener('click', function(){
   menu.classList.toggle('show');
   cover.classList.toggle("opasity");
   h1.classList.toggle("z0");
   h4.classList.toggle("z0");
   ionIcon.classList.toggle("z0");
});

// .section__content-info h1, .section__content-info h4