import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Aqui inician los arrays para construir la excusa//
  let who = ['The dog', 'My grandma', 'The mailman', 'The bird', 'The police', 'My toxic ex', 'My neighbor'];
  let action = ['ate', 'burned', 'threw away', 'robbed', 'destroyed', 'broke'];
  let what = ['my homework', 'my flowers', 'my cables', 'my clothes', 'my toys', 'my shoes'];
  let when = ['before class', 'after yoga class', 'before I went to bed', 'while I was in the bathroom', 'while I was asleep', 'the other day']

  //Funcion para generar excusas//
  function generateExcuse() {
    return who[Math.floor(Math.random()* who.length)]+' '+
    action[Math.floor(Math.random()* action.length)]+' '+
    what[Math.floor(Math.random()* what.length)]+' '+
    when[Math.floor(Math.random()* when.length)];
  }

  //Boton//
  const button = document.getElementById('generate-btn');
  button.addEventListener('click', function(){
     document.getElementById('excuse').innerHTML = generateExcuse()
  });
}

