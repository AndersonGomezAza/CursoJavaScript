/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log({
    p,h1,parrafito,pid,input
});//Como un objeto
console.log(
    p,h1,parrafito,pid,input
);//Como atributos

//ESCRIBIENDO HTML DESDE JS//
console.log(input.value);
console.log({h1,p,parrafito,pid,input,});
h1.innerHTML='Patito <br> Feo';
h1.innerText='Patito <br> Feo';
h1.classList.add('rojo');
h1.classList.remove('verde');
input.value="456"
const img=document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
pid.innerHTML="";
pid.appendChild(img);


//Eventos en JavaScript: interactuando con usuarios
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
function btnOnClick() {
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
} */

//AddEventListener
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* btn2.addEventListener('click', btnOnClick2);

function btnOnClick2() {
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    pResult2.innerText = "Resultado: " + sumaInputs;
} */

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  //console.log({event});
  //event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}