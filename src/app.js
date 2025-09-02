import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  showExcuse();
  //document.querySelector('#RandomExcuse').innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

const arrWho = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const arrAction = ['ate', 'peed', 'crushed', 'broke'];
const arrWhat = ['my homework', 'my phone', 'the car'];
const arrWhen = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//He cambiado la función para que devuelva el elemento aleatorio del array, sin usar return. Y he agregado más funciones para que se vea más ordenado.

//ANTES:
//  const generateExcuse = () => {

//  const whoIndex = Math.floor(Math.random () * arrWho.length);
//  const actionIndex = Math.floor(Math.random () * arrAction.length);
//  const whatIndex = Math.floor(Math.random () * arrWhat.length);
//  const whenIndex = Math.floor(Math.random () * arrWhen.length);

//    return arrWho [whoIndex] + ' ' + arrAction[actionIndex] + ' ' + arrWhat [whatIndex] + ' ' +  arrWhen[whenIndex]
// };

//AHORA:

function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Función que compila la excusa usando partes aleatorias de los array
function buildExcuse() {
  const who = getRandomElement(arrWho);
  const action = getRandomElement(arrAction);
  const what = getRandomElement(arrWhat);
  const when = getRandomElement(arrWhen);

  return `${who} ${action} ${what} ${when}`;
}


// Función que muestra la excusa
function showExcuse() {
  const excuse = buildExcuse();
  document.querySelector('#RandomExcuse').innerHTML = excuse;
}















