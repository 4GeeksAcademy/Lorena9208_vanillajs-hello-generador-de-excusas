import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  document.querySelector('#RandomExcuse').innerHTML = generateExcuse ();
  console.log("Hello Rigo from the console!");
};

const arrWho = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const arrAction = ['ate', 'peed', 'crushed', 'broke'];
const arrWhat = ['my homework', 'my phone', 'the car'];
const arrWhen = ['before the class', 'ArrWI was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const generateExcuse = () => {

const whoIndex = Math.floor(Math.random () * arrWho.length);
const actionIndex = Math.floor(Math.random () * arrAction.length);
const whatIndex = Math.floor(Math.random () * arrWhat.length);
const whenIndex = Math.floor(Math.random () * arrWhen.length);

  return arrWho [whoIndex] + ' ' + arrAction[actionIndex] + ' ' + arrWhat [whatIndex] + ' ' +  arrWhen[whenIndex]
};

