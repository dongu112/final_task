// const p = document.getElementById('p');

// p.innerHTML = '<h1>Dongu</h1>';
// p.style.color = '#124521';

// data = '';
// for (let i = 1; i <= 5; i++){
//     data += `<h${i}> Dongu </h${i}>`;
// }
// p.innerHTML = data;


// let input = ["happy birthday","hawwy birthday"];
// let brokenKey = [];
// function exist(arr, x){
//   return arr.find((value) => value == x);
// }
// for (let i = 0; i < input[0].length; i++){
//   if (input[0][i] != input[1][i]){
//     if (!exist(brokenKey, input[0][i])){
//       brokenKey.push(input[0][i])
//     }
//   }
// }
// return brokenKey;


// @import './cardGame/_data'
import{pokeList} from './data';
console.log(pokeList);

const prod = document.getElementById('prod');

function renderList(list){
  return `
    <div class="product">
      <img src=${list.image} alt="">
      <p>${list.title}</p>
      <div class="prize">
        <p>Details</p>
        <p>${list.prize}</p>
        <i class="fas fa-cart-plus"></i>
      </div>
    </div>
  `
}

$(document).ready(function() {
  pokeList.forEach(value => $('#prod').append(renderList(value)))
})