let prices;

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,litecoin,monero&vs_currencies=czk,eur,usd').then(response => {
   response.json().then(data => {
      prices = data;
   });;
});

const from = document.getElementById('convertFrom');
const to = document.getElementById('convertTo');
const amountFromInput = document.getElementById('input');
const amountToInput = document.getElementById('output');

let fromCurrency = from.value;
let toCurrency = to.value;
let amount = 0;

from.addEventListener('change', (event) => {
   fromCurrency = event.target.value;
   render();
});

to.addEventListener('change', (event) => {
   toCurrency = event.target.value;
   render();
});

amountFromInput.addEventListener('input', (event) => {
   amount = event.target.value;
   render();
});

function render(){
   const value = calculateValue();
   amountToInput.textContent = value;
}

function calculateValue(){
   return amount * prices[fromCurrency][toCurrency];
}
