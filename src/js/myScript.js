"use strict";

let priseTypeSite = 0,
priseDesign = 0,
priseAdaptive = 0;


function calculation() {
	function calculationPriseTypeSite(){
		priseTypeSite = prompt("РАСЧЕТ СТОИМОСТИ\nВведите цифру и нажмите кнопку Ok\n1 - сайт-визитка стомость 2000 руб\n2 - карпоративный стоимость 3000 руб \n3 - информационный стоимость 4000 руб", [1]);
	}
	function calculationpriseDesign(){
		priseDesign = prompt("РАСЧЕТ СТОИМОСТИ\nВведите цифру и нажмите кнопку Ok\n1 - гибкий стомость 2000 руб \n2 - жесткий стоимость 3000 руб \n3 - смешаный стоимость 4000 руб", [1]);
	}
	function calculationpriseAdaptive(){
		priseAdaptive = prompt("РАСЧЕТ СТОИМОСТИ\nВведите цифру и нажмите кнопку Ok\n1 - адаптивный 2000 руб \n2 - не адаптивный стоимость 3000 руб", [1]);
	}


	calculationPriseTypeSite();
	if (priseTypeSite == null) return;
	while(priseTypeSite < 0 || priseTypeSite > 3){
		calculationPriseTypeSite();
		console.log(priseTypeSite);
	}
	if (priseDesign == null) return;
	calculationpriseDesign();
	while(priseDesign < 0 || priseDesign > 3){
		calculationpriseDesign();
	}
	if (priseAdaptive == null) return;
	calculationpriseAdaptive();
	while(priseAdaptive < 0 || priseAdaptive > 2){
		calculationpriseAdaptive();
	}

	let priceTotal = 0;
	if (priseTypeSite == 1) priseTypeSite = 2000;
	if (priseTypeSite == 2) priseTypeSite = 3000;
	if (priseTypeSite == 3) priseTypeSite = 4000;

	if (priseDesign == 1) priseDesign = 2000;
	if (priseDesign == 2) priseDesign = 3000;
	if (priseDesign == 3) priseDesign = 4000;

	if (priseAdaptive == 1) priseAdaptive =2000;
	if (priseAdaptive == 2) priseAdaptive =3000;

	priceTotal = priseTypeSite + priseDesign + priseAdaptive;

	alert(`стоимость сайта = ${priceTotal}`);
}

calculation();