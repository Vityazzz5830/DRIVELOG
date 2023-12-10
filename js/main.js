$('.examplesec-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }],
  });


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});








/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");

const body = document.body;

const btn1 = document.getElementsByClassName('header_content-wrap-navmenu-servicessec')[0];
const btn2 = document.getElementsByClassName('header_content-wrap-navmenu-companysec')[0];
const btn3 = document.getElementsByClassName('header_content-wrap-navmenu-contactssec')[0];  
// Клонируем меню, чтобы задать свои стили для мобильной версии
/*const menu = document.querySelector("#menu").cloneNode(1);*/

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);


//hamb.addEventListener("mouseover", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}


if(btn1) {
  btn1.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn2) {
  btn2.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn3) {
  btn3.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}




window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});


const btnclose = document.querySelector("#modal_closebtn");
const order = document.querySelector("#modal-order");
var body1 = document.getElementsByTagName('body')[0];

btnclose.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal-order');
    order.classList.toggle("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
});


jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal"); // тут указываем ID элемента
    var divt2 = $(".modal-order"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

