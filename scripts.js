/* ---------------------------------------------------------------------------------------------------------------------------------------------
 #region: GECOMBINEERDE EVENT LISTENERS!
   Je kan event listeners combineren, zodat je bijvoorbeeld 
	een functie kan maken om ALLE muisklikken op te vangen 
	of ALLE mouse-overs op te vangen! Handig! Je kan dan de 
	CSS classes gebruiken van HTML elementen om aan te geven 
	op welke objecten geklikt of gehoverd moet worden!
*/

/* EENTJE OM TE LUISTEREN NAAR ALLE CLICKS OP HTML ELEMENTEN! */

document.addEventListener("click", function (event) {
	if (event.target.matches(".hello")) {
		document.querySelector(".post-it").textContent = "MUIS KLIK: Hallo!";
	}
	if (event.target.matches(".goodbye")) {
		document.querySelector(".post-it").textContent = "MUIS KLIK: Tot ziens!";
	}
});

/* EENTJE OM TE LUISTEREN NAAR ALLE MOUSEOVERS OP HTML ELEMENTEN! */

document.addEventListener("mouseover", function (event) {
	if (event.target.matches(".hello")) {
		document.querySelector(".post-it").textContent = "MUIS OVER: Hallo!";
	}
	if (event.target.matches(".goodbye")) {
		document.querySelector(".post-it").textContent = "MUIS OVER: Tot ziens!";
	}
});

/* ---------------------------------------------------------------------------------------------------------------------------------------------
 #region: SINGLE TRIGGER
   Als contrast met bovenstaande: Hier zie 
	je een eenmalige standaard "click" op een 
	HTML element om een ANDER HTML element 
	te manipuleren. Hier wordt een CSS animatie 
	"geplakt" op een ANDER HTML element.
*/
document.querySelector("#paarsblokje").addEventListener("click", function () {
	document.querySelector("#roodblokje").classList.toggle("beweging");
});

/* #endregion SINGLE TRIGGER */
