"use strict";
$(document).ready(function(){
	//картинка с классом image-link по клмку показывается в модальном окне
	$('.image-link').magnificPopup({type:'image'});

	// плавный переход по якорным ссылкам
	$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 20 + "px"})
	})

	//смена цвета активного пункта меню при скроле
	$(window).scroll(() => {
		let scrollDistance = $(window).scrollTop();
		$('section').each((i, el) => {
			if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance){
				$('nav a').each((i, el) => {
					if ($(el).hasClass("activeA")){
						$(el).removeClass("activeA");
					}
				});
				$('nav li:eq('+ i +')').find('a').addClass("activeA");
			}
		})
	});//end

	// отложенная анимация
	let options = {threshold:[0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i, el) => {
		observer.observe(el);
	});

// Type Image Zoom - картинка с анимацией
$('.image-popup-zoom').magnificPopup({
	type: 'image',
	zoom: {
		enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 }
});

// всалывающее окно через 10 сек
/*
var cookieOptions = { expires: 3, path: '/' };

    setTimeout(function() {
    $.magnificPopup.open({
    items: {
    src: $('#text-popup-load-window'), // может быть HTML строкой, jQuery объектом, или CSS селектором 
    },
    type: 'inline',
    removalDelay: 300
    });
  }, 10000);

  */
/*
function call()
        {
        	popup = $('#myModal')
           // popup = window.open('http://www.google.co.in');         
        }

        setTimeout(call, 8000);
        */

// всалывающее окно через 30 сек 
setTimeout(function(){
	let result = confirm("Привет!\nМы хотим с выми дружить...\nВас устроит скидка 50% на разработку первого сайта?");
	if(result){ MessageEmail(); }
},3000)
/*
setTimeout(function(){

  $('.offcanvas').show();
},1000)
*/


});// end ready
//*********************************************************

function modalWindow(){
	$("#getCodeModal").modal('show');
};

// отложенная анимация
function onEntry(entry){
	entry.forEach (change => {
		if (change.isIntersecting){
			change.target.classList.add('.show-animation');
		}
	})
};
// всалывающее окно через 30 сек 
function MessageEmail(){
	let email_adress = prompt("Да!\nОставте свой email и мы отправим вам образцы наших работ, чтобы вам было легче выбрать дизайн и тип сайта, а так же priceList. Долго ждать не придется ;)");

	if(email_adress != ""){
			//код отправки на почту
			console.log('email_adress = ' + email_adress);
			aletr(`На вашу почту ${email_adress} в ближайшее время будут отправоенны все материалы.\nРады с Вами сотрудничать!`);
		};
	}
// каклькулятор
let priseTypeSite = 0,
priseDesign = 0,
priseAdaptive = 0,
termTypeSite = 0,
termeDesign = 0,
termAdaptive = 0;

function funTypeSite() {
	let sel=document.getElementById('typeSite').selectedIndex;
	let options=document.getElementById('typeSite').options;
	priseTypeSite=options[sel].value;
	if (priseTypeSite == null) priseTypeSite = 1;
}

function funDesign() {
	let sel=document.getElementById('design').selectedIndex;
	let options=document.getElementById('design').options;
	priseDesign=options[sel].value;
	if (priseDesign == null) priseDesign = 1;
}

function funAdaptability() {
	let sel=document.getElementById('adaptability').selectedIndex;
	let options=document.getElementById('adaptability').options;
	priseAdaptive=options[sel].value;
	if (priseAdaptive == null) priseAdaptive = 1;

	let priceTotal = 0;
	let termTotal = 0;
	if (priseTypeSite == 1) {
		priseTypeSite = 2000;
		termTypeSite =1;
	}
	if (priseTypeSite == 2){
		priseTypeSite = 3000;
		termTypeSite =2;
	}
	if (priseTypeSite == 3){
		priseTypeSite = 4000;
		termTypeSite =3;
	} 

	if (priseDesign == 1){
		priseDesign = 2000;
		termeDesign =1;
	} 
	if (priseDesign == 2){
		priseDesign = 3000;
		termeDesign =2;
	} 
	if (priseDesign == 3){
		priseDesign = 4000;
		termeDesign =3;
	} 

	if (priseAdaptive == 1){
		priseAdaptive =2000;
		termAdaptive =1;
	}
	if (priseAdaptive == 2){
		priseAdaptive =3000;
		termAdaptive =2;	
	} 

	priceTotal = priseTypeSite + priseDesign + priseAdaptive;
	termTotal = termTypeSite + termeDesign + termAdaptive;

	document.getElementById("priceTotal").innerHTML = priceTotal + "руб";
	document.getElementById("termTotal").innerHTML = termTotal + "д.";
}
// каклькулятор end
// модальное окно для отправить заявку
$('#btnSendRequest').click(function(){
	let recipient_name = document.application_form.recipient_name.value;
	let email_adress = document.application_form.email_adress.value;
	let message_text =  document.application_form.message_text.value;

	$('#exampleModal').modal('hide');
	alert(`${recipient_name}, Ваша заявка\n${message_text}\nпринята.
		\nна электронный адрес ${email_adress}, ближайшее время будут отправоенны образцы оформления сайта и другая информация. Благодапим Вас за обращение к нам! Рады сотрудничать!`);
})
// модальное окно для отправить заявку end

// statistic number
$(function() {
	$({numberValue: 0}).animate({numberValue: 120}, {
			duration: 1000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			step: function(val) {
				$(".number_120").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
		});

});
$(function() {
	$({numberValue: 0}).animate({numberValue: 4600}, {
			duration: 1000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			step: function(val) {
				$(".number_4600").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
		});

});
$(function() {
	$({numberValue: 0}).animate({numberValue: 340}, {
		duration: 1000, 
		easing: "linear",
		step: function(val) {
			$(".number_340").html(Math.ceil(val)); 
		}
	});

});
$(function() {
	$({numberValue: 0}).animate({numberValue: 23}, {
			duration: 500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			step: function(val) {
				$(".number_23").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
		});

});








