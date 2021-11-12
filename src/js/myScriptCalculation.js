"use strict";

let priseTypeSite = 0,
		priseDesign = 0,
		priseAdaptive = 0,
		termTypeSite = 0,
		termeDesign = 0,
		termAdaptive = 0;

		function calculation() {
			function calculationPriseTypeSite(){
				priseTypeSite = prompt("РАСЧЕТ СТОИМОСТИ\nВведите цифру и нажмите кнопку Ok\n1 - сайт-визитка стомость 2000 руб \n2 - карпоративный стоимость 3000 руб \n3 - информационный стоимость 4000 руб", [1]);
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
			let termTotal = 0;
			if (priseTypeSite == 1) priseTypeSite = 2000;
			if (priseTypeSite == 2) priseTypeSite = 3000;
			if (priseTypeSite == 3) priseTypeSite = 4000;
			if (termTypeSite == 1) termTypeSite =1;
			if (termTypeSite == 2) termTypeSite =2;
			if (termTypeSite == 3) termTypeSite =3;

			if (priseDesign == 1) priseDesign = 2000;
			if (priseDesign == 2) priseDesign = 3000;
			if (priseDesign == 3) priseDesign = 4000;
			if (termeDesign == 1) termeDesign =1;
			if (termeDesign == 2) termeDesign =2;
			if (termeDesign == 3) termeDesign =3;

			if (priseAdaptive == 1) priseAdaptive =2000;
			if (priseAdaptive == 2) priseAdaptive =3000;
			if (termAdaptive == 1) termAdaptive =1;
			if (termAdaptive == 2) termAdaptive =2;

			priceTotal = priseTypeSite + priseDesign + priseAdaptive;
			termTotal = termTypeSite + termeDesign + termAdaptive;
			alert(`стоимость сайта = ${priceTotal}
				\n срок исполнения ${termTotal} + рабочих дней');
		}
		calculation();