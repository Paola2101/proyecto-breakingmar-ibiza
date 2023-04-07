const prevBoton = document.querySelector("#prev");
const nextBoton = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
const bolas = document.querySelectorAll(".bola");

let actual = 0;
let maximo = slides.length - 1;

// recorremos el conjunto de imágenes(slides) y le aplicamos a cada una un valor de translateX para que se desplace.
slides.forEach((slide, indice) => {
	slide.style.transform = `translateX(${indice * 100}%)`;
});

//Activar la primera bola
/*bolas.forEach((bola,indice) =>{
	indice === 0 ? bola.classList.add("activa") : bola.classList.remove("activa");
});*/

colorear();

// funcion para colorear la bola:
function colorear(){
	bolas.forEach((bola,indice) => {
		indice === actual ? bola.classList.add("activa") : bola.classList.remove("activa");
	})
}

//mover diapositivas:
function mover() {
	slides.forEach((slide, indice) => {
		slide.style.transform = `translateX(${100 * (indice - actual)}%)`;
	});
}

// implementamos el botón de la derecha para que al hacer click se aplique el desplazamiento.
nextBoton.addEventListener("click",() => {
	if(actual === maximo) { //estamos en la ultima 
		actual = 0;
	} else {
		actual++;
	}
	mover();
	colorear();
});

// implementamos el botón de la izquierda para que al hacer click se aplique el desplazamiento.
prevBoton.addEventListener("click",() => {
	if(actual === 0) { //estamos en la ultima 
		actual = maximo;
	} else {
		actual--;
	}
	mover();
	colorear();
});

//añadir el evento de click a las bolas (que al hacer click en las bolas se desplace la imagen tb)
bolas.forEach((bola,indice) => {
	bola.addEventListener("click", () => {
		actual = indice;
		mover();
		colorear();
	});
});

//setInterval -- permite disparar una función en callback para que se ejecute según unos intervalos de tiempo:
setInterval(function(){
	if(actual === maximo) { //estamos en la ultima 
		actual = 0;
	} else {
		actual++;
	}
	mover();
	colorear();
},3000)