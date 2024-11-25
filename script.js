// ELEMENTI FORM

const nomeform = document.getElementById('nome');
const distanzaform = document.getElementById('chilometri');
const etàform = document.getElementById('età');
const form = document.querySelector('.gn-biglietto');

// ELEMENTI TARGET

const nome = document.querySelector ('.sp-nome');
const offerta = document.querySelector('.offerta')
const importo = document.querySelector('.importo')

  const kmCost = 0.21;
  const UrDiscount = 20;
  const OvDiscount = 40;


form.addEventListener('submit', function(event){
  event.preventDefault();
  nome.innerText = nomeform.value.trim();

  let prezzo = (parseInt(distanzaform.value) * kmCost)

  if(etàform.value == "Minorenne"){
    importo.innerText = (prezzo - (prezzo/100 * UrDiscount)).toFixed(2) + `€`
    offerta.innerText = `Offerta Junior`}
  else if (etàform.value == "Over 65"){
    importo.innerText = (prezzo -(prezzo/100 *OvDiscount)).toFixed(2) + `€`
    offerta.innerText = `Offerta Senior`} 
  else {
    importo.innerText = prezzo.toFixed(2) + "€"
    offerta.innerText = `Offerta Standard`

  }


})







// function calcoloprezzo(distanza,categoriaetà){
//   const kmCost = 0.21;
//   const UrDiscount = 20;
//   const OvDiscount = 40;
//   let price = distanza * kmCost;
//   if (categoriaetà = 'Minorenne'){
//     price = ( price - (price/ 100 * UrDiscount)) + `€`
//   } else if (categoriaetà = 'Over 65'){
//     price = ( price - (price/ 100 * OvDiscount))+`€`
//   } else if (categoriaetà = 'Adulto') {
//     price = price +`€`
//   }
    
//   return price
// }

// function tipologiaofferta(categoriaetà){
//   let offerta
//   if (categoriaetà = 'Minorenne'){
//     offerta = `Offerta Junior`
//   } else if (categoriaetà = `Over 65`){
//     offerta = 'Offerta Senior'
//   } else if (categoriaetà = `Adulto`){
//     offerta = `Offerta Standard`
//   }
    
//   return offerta
// }