// document.addEventListener('DOMContentLoaded', () => {

// });


// ---- preloader
document.body.onload =function() {

  setTimeout(function() {
    const preloader = document.getElementById('page-preloader');
    if( !preloader.classList.contains('done'))
    {
      preloader.classList.add('done');
    }
  }, 1000);

};



// --------- jump to form


  var $page = $('html, body');
  $('a[href*="#form"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top-200
      }, 800);
      return false;
  });


// ------ search-mobile

document.querySelector('.search__mobile-btn').onclick = function(){
  document.querySelector('.search__window').classList.add('search-active');
  document.querySelector('.search__window-close').classList.remove('search-active');
}
document.querySelector('.search__window-close').onclick = function(){
  document.querySelector('.search__window').classList.remove('search-active');

}


// ------ menu 

// $('ul.header-nav__list li.list__item').hover(function() {
//   $(this).find('.white__list').stop(true, true).delay(200).fadeIn(500);
// }, function() {
//   $(this).find('.white__list').stop(true, true).delay(200).fadeOut(500);
// });

// ------- menu-icon

document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.header-nav__list').classList.toggle('header-nav__list--active');
  document.querySelector('.header-nav__phone').classList.toggle('header-nav__phone--hidden');
  document.querySelector('.serch__wrapper').classList.toggle('header-nav__phone--hidden');
  document.querySelector('body').classList.toggle('header-nav--fixed');
  document.querySelector('.curses-link').classList.remove('link__yellow');
  document.querySelector('.arrov_test-curses').classList.remove('arrow_test-yellow');
  document.querySelector('.dist-link').classList.remove('link__yellow');
  document.querySelector('.dist-arrow').classList.remove('arrow_test-yellow');
  document.querySelector('.target_link-color').classList.remove('link__yellow');
  document.querySelector('.target-arrow').classList.remove('arrow_test-yellow');
  document.querySelector('.smm-junior').classList.remove('link__yellow');
  document.querySelector('.smm-arrow').classList.remove('arrow_test-yellow');
  document.querySelector('.white__list').classList.remove('hidden');
  document.querySelector('.munu__link-list').classList.remove('hidden');
}


$("#oh").hover(function(){
  $('.submenu').addClass('menu-hidden');
  $('.smm-junior').addClass('link__yellow-light');
  // $('.smm-arrow').addClass('arrow_test-yellow');
},function(){
  $('.submenu').removeClass('menu-hidden'); 
  $('.smm-junior').removeClass('link__yellow-light'); 
  // $('.smm-arrow').removeClass('arrow_test-yellow');
});


$("#ah").hover(function(){
  $('.submenu-2').addClass('menu-hidden');
  $('.target_link-color').addClass('link__yellow-light');
  // $('.target-arrow').addClass('arrow_test-yellow');
},function(){
  $('.submenu-2').removeClass('menu-hidden'); 
  $('.target_link-color').removeClass('link__yellow-light'); 
  // $('.target-arrow').removeClass('arrow_test-yellow');
});

$("#hi").hover(function(){
  $('.submenu-3').addClass('menu-hidden');
  $('.smm__manager-links').addClass('link__yellow-light');
  // $('.smm__manager-arrow').addClass('arrow_test-yellow');
},function(){
  $('.submenu-3').removeClass('menu-hidden'); 
  $('.smm__manager-links').removeClass('link__yellow-light'); 
  // $('.smm__manager-arrow').removeClass('arrow_test-yellow');
});



$(".menu-icon-wrapper").click(function(){
  $('.header-nav__list').addClass('hidden');
},function(){
  $('.header-nav__list').removeClass('hidden');  
});


// открытие/закрытие мобильного под меню

document.querySelector('.smm-arrow--mobile').onclick = function(){
  if (document.querySelector('.submenu').classList.contains('hidden')) {
    document.querySelector('.submenu').classList.remove('hidden')
    document.querySelector('.smm-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.menu__link').classList.remove('link__yellow-light')
  } else {
    document.querySelector('.submenu').classList.add('hidden')
    document.querySelector('.submenu').classList.remove('menu-hidden')
    document.querySelector('.smm-arrow').classList.add('arrow_test-yellow')
    document.querySelector('.menu__link').classList.add('link__yellow-light')
    // при открытии submenu-2 закроется если было открыто
    document.querySelector('.submenu-2').classList.remove('hidden')
    document.querySelector('.target-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.target_link-color').classList.remove('link__yellow-light')
    // при открытии submenu-3 закроется если было открыто
    document.querySelector('.submenu-3').classList.remove('hidden')
    document.querySelector('.smm__manager-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.smm__manager-links').classList.remove('link__yellow-light')
  }
}

document.querySelector('.target-arrow--mobile').onclick = function(){
  if (document.querySelector('.submenu-2').classList.contains('hidden')) {
    document.querySelector('.submenu-2').classList.remove('hidden')
    document.querySelector('.target-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.target_link-color').classList.remove('link__yellow-light')
  } else {
    document.querySelector('.submenu-2').classList.add('hidden')
    document.querySelector('.submenu-2').classList.remove('menu-hidden')
    document.querySelector('.target-arrow').classList.add('arrow_test-yellow')
    document.querySelector('.target_link-color').classList.add('link__yellow-light')
    // при открытии submenu-1 закроется если было открыто
    document.querySelector('.submenu').classList.remove('hidden')
    document.querySelector('.smm-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.menu__link').classList.remove('link__yellow-light')
    // при открытии submenu-3 закроется если было открыто
    document.querySelector('.submenu-3').classList.remove('hidden')
    document.querySelector('.smm__manager-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.smm__manager-links').classList.remove('link__yellow-light')
  }
}

document.querySelector('.manager-arrow--mobile').onclick = function(){
  if (document.querySelector('.submenu-3').classList.contains('hidden')) {
    document.querySelector('.submenu-3').classList.remove('hidden')
    document.querySelector('.smm__manager-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.smm__manager-links').classList.remove('link__yellow-light')
  } else {
    document.querySelector('.submenu-3').classList.add('hidden')
    document.querySelector('.submenu-3').classList.remove('menu-hidden')
    document.querySelector('.smm__manager-arrow').classList.add('arrow_test-yellow')
    document.querySelector('.smm__manager-links').classList.add('link__yellow-light')
    // при открытии submenu-1 закроется если было открыто
    document.querySelector('.submenu').classList.remove('hidden')
    document.querySelector('.smm-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.menu__link').classList.remove('link__yellow-light')
    // при открытии submenu-2 закроется если было открыто
    document.querySelector('.submenu-2').classList.remove('hidden')
    document.querySelector('.target-arrow').classList.remove('arrow_test-yellow')
    document.querySelector('.target_link-color').classList.remove('link__yellow-light')
  }
}



// кнопка закрытия мeню на десктопе
document.querySelector('.menu__desc-close').onclick = function(){
  document.querySelector('.white__list').classList.remove('hidden');
  document.querySelector('.curses-link').classList.remove('link__yellow');
  document.querySelector('.arrov_test-curses').classList.remove('arrow_test-yellow');
  document.querySelector('.munu__link-list').classList.remove('hidden');
  document.querySelector('.dist-link').classList.remove('link__yellow');
  document.querySelector('.dist-arrow').classList.remove('arrow_test-yellow');
  document.querySelector('.menu__desc-close').classList.remove('menu__desc-active');

}


//  открытие меню курсы
function closeLink (click){
  document.querySelector('.white__list').classList.remove('hidden') 
  document.querySelector('.curses-link').classList.remove('link__yellow')
  document.querySelector('.arrov_test-curses').classList.remove('arrow_test-yellow');
  document.querySelector('.menu__desc-close').classList.remove('menu__desc-active'); 
  // document.querySelector('.dist-link').classList.remove('dist_link-margin');
}


document.querySelector('.link__wrapper-curses').onclick = function(){

  if (document.querySelector('.white__list').classList.contains('hidden')) {
    closeLink()
  } else {
    document.querySelector('.white__list').classList.add('hidden');
    document.querySelector('.curses-link').classList.add('link__yellow');
    document.querySelector('.arrov_test-curses').classList.add('arrow_test-yellow');
    document.querySelector('.menu__desc-close').classList.add('menu__desc-active'); 
    document.querySelector('.munu__link-list').classList.remove('hidden');
    document.querySelector('.dist-link').classList.remove('link__yellow');
    // document.querySelector('.dist-link').classList.add('dist_link-margin');
    document.querySelector('.dist-arrow').classList.remove('arrow_test-yellow'); 
}};



// открытие меню дистанционное обучение
function closeLink2 (){
  document.querySelector('.munu__link-list').classList.remove('hidden');
  document.querySelector('.dist-link').classList.remove('link__yellow');
  document.querySelector('.dist-arrow').classList.remove('arrow_test-yellow');
  document.querySelector('.menu__desc-close').classList.remove('menu__desc-active'); 
}


document.querySelector('.link__wrapper-dist').onclick = function(){

  if (document.querySelector('.munu__link-list').classList.contains('hidden')) {
    closeLink2()
  } else {
  document.querySelector('.munu__link-list').classList.add('hidden');
  document.querySelector('.dist-link').classList.add('link__yellow');
  document.querySelector('.dist-arrow').classList.add('arrow_test-yellow');
  // document.querySelector('.dist-link').classList.remove('dist_link-margin');
  document.querySelector('.menu__desc-close').classList.add('menu__desc-active');
  document.querySelector('.white__list').classList.remove('hidden');
  document.querySelector('.curses-link').classList.remove('link__yellow');
  document.querySelector('.arrov_test-curses').classList.remove('arrow_test-yellow');
}};


// открытие подменю 
// document.querySelector('.button-curses').onclick = function (){
//   document.querySelector('.white__list').classList.toggle('hidden');
//   document.querySelector('.curses-link').classList.toggle('link__yellow');
//   document.querySelector('.arrow_test').classList.toggle('arrow_test-yellow');
//   document.querySelector('.menu__desc-close').classList.toggle('menu__desc-active'); 
//   document.querySelector('.munu__link-list').classList.remove('hidden');
//   document.querySelector('.dist-link').classList.remove('link__yellow');
//   document.querySelector('.dist-arrow').classList.remove('arrow_test-yellow')
// }
// document.querySelector('.button-dist').onclick = function (){
//   document.querySelector('.munu__link-list').classList.toggle('hidden');
//   document.querySelector('.dist-link').classList.toggle('link__yellow');
//   document.querySelector('.dist-arrow').classList.toggle('arrow_test-yellow')
//   document.querySelector('.menu__desc-close').classList.toggle('menu__desc-active'); 
//   document.querySelector('.white__list').classList.remove('hidden');
//   document.querySelector('.curses-link').classList.remove('link__yellow');
//   document.querySelector('.arrow_test').classList.remove('arrow_test-yellow');
//   document.querySelector('.smm-arrow').classList.remove('arrow_test-yellow');
//   document.querySelector('.target-arrow').classList.remove('arrow_test-yellow');
// }









// ----- babble

const LiquidButton = class LiquidButton {
  constructor(svg) {
    const options = svg.dataset;
    this.id = this.constructor.id || (this.constructor.id = 1);
    this.constructor.id++;
    this.xmlns = 'http://www.w3.org/2000/svg';
    this.tension = options.tension * 1 || 0.4;
    this.width = options.width * 1 || 370;
    this.height = options.height * 1 || 370;
    this.margin = options.margin || 20;
    this.hoverFactor = options.hoverFactor || -0.3;
    this.gap = options.gap || 5;
    this.debug = options.debug || false;
    this.forceFactor = options.forceFactor || 0.2;
    this.color1 = options.color1 || '#36DFE7';
    this.color2 = options.color2 || '#8F17E1';
    this.color3 = options.color3 || '#BF09E6';
    this.svg = svg;
    this.layers = [{
      points: [],
      viscosity: 0.5,
      mouseForce: 100,
      forceLimit: 2 },
    {
      points: [],
      viscosity: 0.8,
      mouseForce: 150,
      forceLimit: 3 }];

    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;
      layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;
      layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;
      layer.path = document.createElementNS(this.xmlns, 'path');
      this.svg.appendChild(layer.path);
    }
    this.wrapperElement = options.wrapperElement || document.body;
    if (!this.svg.parentElement) {
      this.wrapperElement.append(this.svg);
    }

    this.svgText = document.createElementNS(this.xmlns, 'text');
    this.svgText.setAttribute('x', '50%');
    this.svgText.setAttribute('y', '50%');
    this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');
    this.svgText.setAttribute('font-size', ~~(this.height / 3));
    this.svgText.style.fontFamily = 'sans-serif';
    this.svgText.setAttribute('text-anchor', 'middle');
    this.svgText.setAttribute('pointer-events', 'none');
    this.svg.appendChild(this.svgText);

    this.svgDefs = document.createElementNS(this.xmlns, 'defs');
    this.svg.appendChild(this.svgDefs);

    this.touches = [];
    this.noise = options.noise || 0;
    document.body.addEventListener('touchstart', this.touchHandler);
    document.body.addEventListener('touchmove', this.touchHandler);
    document.body.addEventListener('touchend', this.clearHandler);
    document.body.addEventListener('touchcancel', this.clearHandler);
    this.svg.addEventListener('mousemove', this.mouseHandler);
    this.svg.addEventListener('mouseout', this.clearHandler);
    this.initOrigins();
    this.animate();
  }

  get mouseHandler() {
    return e => {
      this.touches = [{
        x: e.offsetX,
        y: e.offsetY,
        force: 1 }];

    };
  }

  get touchHandler() {
    return e => {
      this.touches = [];
      const rect = this.svg.getBoundingClientRect();
      for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
        const touch = e.changedTouches[touchIndex];
        const x = touch.pageX - rect.left;
        const y = touch.pageY - rect.top;
        if (x > 0 && y > 0 && x < this.svgWidth && y < this.svgHeight) {
          this.touches.push({ x, y, force: touch.force || 1 });
        }
      }
      e.preventDefault();
    };
  }

  get clearHandler() {
    return e => {
      this.touches = [];
    };
  }

  get raf() {
    return this.__raf || (this.__raf = (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {setTimeout(callback, 10);}).
    bind(window));
  }

  distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  update() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = layer.points;
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const point = points[pointIndex];
        const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
        const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
        const d = Math.sqrt(dx * dx + dy * dy);
        const f = d * this.forceFactor;
        point.vx += f * (dx / d || 0);
        point.vy += f * (dy / d || 0);
        for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
          const touch = this.touches[touchIndex];
          let mouseForce = layer.mouseForce;
          if (
          touch.x > this.margin &&
          touch.x < this.margin + this.width &&
          touch.y > this.margin &&
          touch.y < this.margin + this.height)
          {
            mouseForce *= -this.hoverFactor;
          }
          const mx = point.x - touch.x;
          const my = point.y - touch.y;
          const md = Math.sqrt(mx * mx + my * my);
          const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, mouseForce * touch.force / md));
          point.vx += mf * (mx / md || 0);
          point.vy += mf * (my / md || 0);
        }
        point.vx *= layer.viscosity;
        point.vy *= layer.viscosity;
        point.x += point.vx;
        point.y += point.vy;
      }
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const prev = points[(pointIndex + points.length - 1) % points.length];
        const point = points[pointIndex];
        const next = points[(pointIndex + points.length + 1) % points.length];
        const dPrev = this.distance(point, prev);
        const dNext = this.distance(point, next);

        const line = {
          x: next.x - prev.x,
          y: next.y - prev.y };

        const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

        point.cPrev = {
          x: point.x - line.x / dLine * dPrev * this.tension,
          y: point.y - line.y / dLine * dPrev * this.tension };

        point.cNext = {
          x: point.x + line.x / dLine * dNext * this.tension,
          y: point.y + line.y / dLine * dNext * this.tension };

      }
    }
  }

  animate() {
    this.raf(() => {
      this.update();
      this.draw();
      this.animate();
    });
  }

  get svgWidth() {
    return this.width + this.margin * 2;
  }

  get svgHeight() {
    return this.height + this.margin * 2;
  }

  draw() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      if (layerIndex === 1) {
        if (this.touches.length > 0) {
          while (this.svgDefs.firstChild) {
            this.svgDefs.removeChild(this.svgDefs.firstChild);
          }
          for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
            const touch = this.touches[touchIndex];
            const gradient = document.createElementNS(this.xmlns, 'radialGradient');
            gradient.id = 'liquid-gradient-' + this.id + '-' + touchIndex;
            const start = document.createElementNS(this.xmlns, 'stop');
            start.setAttribute('stop-color', this.color3);
            start.setAttribute('offset', '0%');
            const stop = document.createElementNS(this.xmlns, 'stop');
            stop.setAttribute('stop-color', this.color2);
            stop.setAttribute('offset', '100%');
            gradient.appendChild(start);
            gradient.appendChild(stop);
            this.svgDefs.appendChild(gradient);
            gradient.setAttribute('cx', touch.x / this.svgWidth);
            gradient.setAttribute('cy', touch.y / this.svgHeight);
            gradient.setAttribute('r', touch.force);
            layer.path.style.fill = 'url(#' + gradient.id + ')';
          }
        } else {
          layer.path.style.fill = this.color2;
        }
      } else {
        layer.path.style.fill = this.color1;
      }
      const points = layer.points;
      const commands = [];
      commands.push('M', points[0].x, points[0].y);
      for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
        commands.push('C',
        points[(pointIndex + 0) % points.length].cNext.x,
        points[(pointIndex + 0) % points.length].cNext.y,
        points[(pointIndex + 1) % points.length].cPrev.x,
        points[(pointIndex + 1) % points.length].cPrev.y,
        points[(pointIndex + 1) % points.length].x,
        points[(pointIndex + 1) % points.length].y);

      }
      commands.push('Z');
      layer.path.setAttribute('d', commands.join(' '));
    }
    this.svgText.textContent = this.text;
    this.svgText.style.fill = this.textColor;
  }

  createPoint(x, y) {
    return {
      x: x,
      y: y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0 };

  }

  initOrigins() {
    this.svg.setAttribute('viewBox', `0 0 ${this.svgWidth}  ${this.svgHeight}`)
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = [];
      for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
        points.push(this.createPoint(
        x + this.margin,
        this.margin));

      }
      for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
        const angle = Math.PI / ~~(this.height * 1.25) * alpha;
        points.push(this.createPoint(
        Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
        Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));

      }
      for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.gap) {
        points.push(this.createPoint(
        x + this.margin,
        this.margin + this.height));

      }
      for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
        const angle = Math.PI / ~~(this.height * 1.25) * alpha;
        points.push(this.createPoint(
        this.height - Math.sin(angle) * this.height / 2 + this.margin - this.height / 2,
        Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));

      }
      layer.points = points;
    }
  }};



const redraw = () => {
  button.initOrigins();
};

const buttons = document.getElementsByClassName('liquid-button', 'start__liquid-button');
for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
  const button = buttons[buttonIndex];
  button.liquidButton = new LiquidButton(button);
}


  // ----- accordion


  (function(){
    var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);
    
    skipClickDelay = function(e){
      e.preventDefault();
      e.target.click();
    }
  
      setAriaAttr = function(el, ariaType, newProperty){
      el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
      switch(expanded) {
        case "true":
          setAriaAttr(el1, 'aria-expanded', 'true');
          setAriaAttr(el2, 'aria-hidden', 'false');
          break;
        case "false":
          setAriaAttr(el1, 'aria-expanded', 'false');
          setAriaAttr(el2, 'aria-hidden', 'true');
          break;
        default:
          break;
      }
    };
  //function
  switchAccordion = function(e) {
    console.log("triggered");
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if(thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
      thisQuestion.classList.toggle('is-collapsed');
      thisQuestion.classList.toggle('is-expanded');
      thisAnswer.classList.toggle('is-collapsed');
      thisAnswer.classList.toggle('is-expanded');
    
      thisAnswer.classList.toggle('animateIn');
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
      if(touchSupported) {
        accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
      }
      if(pointerSupported){
        accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
      }
      accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
  })();

// ------- Owl-carusel



  $(".articles__wrapper").owlCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 20,
    loop: true,
    dots: false,
    nav: false,
    autoplay:true, 
    autoplayTimeout:9000, 
    smartSpeed: 3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
      0:{
        items:1.2,
        margin: 20,
      },
      420:{
        items:1.8,
        margin: 20,
      },
      720:{
        items:2.3,
        margin: 20,
      },
      880:{
        items:3,
        margin: 40,
      },
      1095:{
        items:3,
        margin: 20,
      }
    }
  });

  $(".feedback__slider").owlCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 50,
    loop: true,
    dots: true,
    nav: true,
    navText: [$('.slider__left'),$('.slider__right')],
    autoWidth:true,
    autoplay:false, 
    autoplayTimeout:9000, 
    smartSpeed: 5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
      0:{
        items:1,
        margin: 10,
      },
      420:{
        items:1,
        margin: 10,
      },
      720:{
        items:1,
        margin: 50,
      },
    }
  });



    



  


// Отправка заявки 
// $(document).ready(function() {
// 	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.js-overlay-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// });


  
// --------- Form-hiden

const buttonModal = document.querySelector('.button-modal');
const hystmodal = document.querySelector('.hystmodal');
const modalClose = document.querySelector('.modal-close');


document.querySelector('.form__btn').onclick = function(){
  document.querySelector('.form__block').classList.toggle('block-hiden');
  document.querySelector('.form__block-hiden').classList.toggle('form__block-hiden--active'); 
  document.querySelector('.hystmodal').classList.toggle('is-open');
}

function toggleModal() {
  hystmodal.classList.toggle('is-open');
}

buttonModal.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);




// -------- flip-card

// $(function(){

//   $('.skills__section').each(function(index){

//     var $t=$(this);

//     $t.viewportChecker({

//       callbackFunction:function(elem,action){ 

//         const cards = document.querySelectorAll('.flip-card--1');
//         let timerId = setTimeout(() => {
//           cards.forEach(card => {
//               card.classList.add('flip-card_flipped');
//               card.removeEventListener('mouseover', flipped);
//             });
//         }, 5000);

//         function flipped() {
//           clearTimeout(timerId);
          
//           cards.forEach(card => {
//               card.classList.add('flip-card_flipped');
//               card.removeEventListener('mouseover', flipped);
//             });
//         }
        
//         cards.forEach(card => card.addEventListener('mouseover', flipped));

//       }
//     });
//   });
// });



// -------- flip-card


  $('.skills__section').each(function(index){

    var $t=$(this);

    $t.viewportChecker({

      callbackFunction:function(elem){ 

        const cards = document.querySelectorAll('.flip-card--1');
        let timerId = setTimeout(() => {
          cards.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped);
            });
        }, 5000);

        const cards2 = document.querySelectorAll('.flip-card--2');
        let timerIdi = setTimeout(() => {
          cards2.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped2);
            });
        }, 5300);

        const cards3 = document.querySelectorAll('.flip-card--3');
        let timerIdm = setTimeout(() => {
          cards3.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped3);
            });
        }, 5600);

        const cards4 = document.querySelectorAll('.flip-card--4');
        let timerIda = setTimeout(() => {
          cards4.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped4);
            });
        }, 5900);

        const cards5 = document.querySelectorAll('.flip-card--5');
        let timerIdy = setTimeout(() => {
          cards5.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped5);
            });
        }, 6200);

        const cards6 = document.querySelectorAll('.flip-card--6');
        let timerIdr = setTimeout(() => {
          cards6.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped6);
            });
        }, 6500);





        function flipped() {
          clearTimeout(timerId);
          
          cards.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped);
            });
        }

        function flipped2() {
          clearTimeout(timerIdi);
          
          cards2.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped2);
            });
        }

        function flipped3() {
          clearTimeout(timerIdm);
          
          cards3.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped3);
            });
        }

        function flipped4() {
          clearTimeout(timerIda);
          
          cards4.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped4);
            });
        }

        function flipped5() {
          clearTimeout(timerIdy);
          
          cards5.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped5);
            });
        }

        function flipped6() {
          clearTimeout(timerIdr);
          
          cards6.forEach(card => {
              card.classList.add('flip-card_flipped');
              card.removeEventListener('mouseover', flipped3);
            });
        }
        
        cards.forEach(card => card.addEventListener('mouseover', flipped));
        cards2.forEach(card => card.addEventListener('mouseover', flipped2));
        cards3.forEach(card => card.addEventListener('mouseover', flipped3));
        cards4.forEach(card => card.addEventListener('mouseover', flipped4));
        cards5.forEach(card => card.addEventListener('mouseover', flipped5));
        cards6.forEach(card => card.addEventListener('mouseover', flipped6));
      }
    });
  });


  

  

  


  

  


  

  

