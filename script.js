// ELEMENTI FORM

const nomeform = document.getElementById('nome');
const distanzaform = document.getElementById('chilometri');
const etàform = document.getElementById('età');
const form = document.querySelector('.gn-biglietto');

// ELEMENTI TARGET

const nome = document.querySelector ('.sp-nome');
const offerta = document.querySelector('.offerta')
const importo = document.querySelector('.importo')

// Costanti prezzo del treno
const kmCost = 0.21;
const UrDiscount = 20;
const OvDiscount = 40;


form.addEventListener('submit', function(event){
  event.preventDefault();

  nome.innerText = nomeform.value.trim();
   // calcolo prezzo normale
  let prezzo = (parseInt(distanzaform.value) * kmCost)

  //calcolo prezzo scontato
  if(etàform.value == "Minorenne"){
    prezzo -=(prezzo * UrDiscount)/100
    offerta.innerText = `Offerta Junior`}
  else if (etàform.value == "Over 65"){
    prezzo -= (prezzo * OvDiscount)/100
    offerta.innerText = `Offerta Senior`} 
  else {
    offerta.innerText = `Offerta Standard`

  }

  importo.innertext = prezzo.toFixed(2) + `€`

})







