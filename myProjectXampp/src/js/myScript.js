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
		$('.section').each((i, el) => {
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

	options = {threshold:[0.5]};
	observer = new IntersectionObserver(iCan_img_anime, options);
	elements = $('.iCan_img_anime');
	elements.each((i, el) => {
		observer.observe(el);
	});

	options = {threshold:[0.5]};
	observer = new IntersectionObserver(number_120, options);
	elements = $('.number_120');
	elements.each((i, el) => {
		observer.observe(el);
	});
		options = {threshold:[0.5]};
	observer = new IntersectionObserver(number_4600, options);
	elements = $('.number_120');
	elements.each((i, el) => {
		observer.observe(el);
	});
		options = {threshold:[0.5]};
	observer = new IntersectionObserver(number_340, options);
	elements = $('.number_120');
	elements.each((i, el) => {
		observer.observe(el);
	});
		options = {threshold:[0.5]};
	observer = new IntersectionObserver(number_23, options);
	elements = $('.number_120');
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

// всалывающее окно через 30 сек 
setTimeout(function(){
	$('.hideBtnFirstModal').click();
},30000)

//   ари аведение курсора на logo модальное окно
$('.btnFeedback').click(function(){
	$('.hideBtnFeedback').click();
});

// маска на input телефон
$.mask.definitions['9'] = false;
$.mask.definitions['5'] = "[0-9]";
$("#phone").mask("(996) 555-555-555");

// проверка на пустой input
$('form').submit(function(event){
	console.log('111');
	if ($('#emailFeedBack').val() == "" || $('#phone').val() == "" || $('#userNameFeedBack').val() == ""){
		event.preventDefault();

		alert('Все поля должны быть заполнены');
	}
})

// контроль за отправкой электронной почты
$('form').submit(function(event){
	event.preventDefault();
	$.ajax({
		type: "POST", 
		url: "php/mail.php", 
		data: $(this).serialize()
	}).done(function(){
		$(this).find("input").val("");
		alert('Успешно отправлено!');
		$('form').trigger('reset');
	})
	return false;
});

});// end ready
//*********************************************************

// отложенная анимация
function onEntry(entry){
	entry.forEach (change => {
		if (change.isIntersecting){
			change.target.classList.add('show-animation');
		}
	})
};
function iCan_img_anime(entry){
	entry.forEach (change => {
		if (change.isIntersecting){
			change.target.classList.add('show-animation');
		}
	})
};

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
//  Modal через 30 сек 
$('#btnSendFirstModal').click(function(){
	let user_name_firstModal = document.firstModal_form.user_name_firstModal.value;
	let email_adress_firstModal = document.firstModal_form.email_adress_firstModal.value;

	$('#firstModal').modal('hide');
	alert(`${user_name_firstModal},
		\nна электронный адрес ${email_adress_firstModal}, ближайшее время будут отправоенны образцы оформления сайта и другая информация. Благодапим Вас за обращение к нам! Рады сотрудничать!`);
})
// statistic number отложенная анимация
function number_120(){
	$(function() {
	$({numberValue: 0}).animate({numberValue: 120}, {
			duration: 1000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			step: function(val) {
				$(".number_120").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
		});
});
};

function number_4600(){
	$(function() {
	$({numberValue: 0}).animate({numberValue: 4600}, {
			duration: 1000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			step: function(val) {
				$(".number_4600").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
		});
});
};

function number_340(){
	$(function() {
	$({numberValue: 0}).animate({numberValue: 340}, {
		duration: 1000, 
		easing: "linear",
		step: function(val) {
			$(".number_340").html(Math.ceil(val)); 
		}
	});
});
};

function number_23(){
	$(function() {
	$({numberValue: 0}).animate({numberValue: 23}, {
			duration: 500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
			easing: "linear",
			step: function(val) {
				$(".number_23").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
		});
});
};









