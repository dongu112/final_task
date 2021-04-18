const pokeList = [
    {
       image: './image/PokeTCG/BatSty.jpg',
       title: 'Sword & Shield Battle Styles Booster Pack',
       prize: '$4.88',
       dataID: 'Battle-Style',
       type: 'poke'
    },
    {
       image: './image/PokeTCG/ViVo.jpg',
       title: 'Sword & Shield Vivid Voltage Booster Pack',
       prize: '$7.96',
       dataID: 'Vivid-Voltage',
       type: 'poke'
    },
    {
       image: './image/PokeTCG/ReCla.jpg',
       title: 'Sword & Shield Rebel Clash Booster Pack',
       prize: '$5.99',
       dataID: 'Rebel-Clash',
       type: 'poke'
    },
    {
       image: './image/PokeTCG/DaAbla.jpg',
       title: 'Sword & Shield Darkness Ablaze Booster Pack',
       prize: '$6.99',
       dataID: 'Darkness-Ablaze',
       type: 'poke'
    },
    {
       image: './image/PokeTCG/HiFa.jpg',
       title: 'Sun & Moon Hidden Fates Booster Pack',
       prize: '$16.99',
       dataID: 'Hidden-Fates',
       type: 'poke'
    },
 ];


const YGOList = [
    {
       image: './image/YGOTCG/GhoPas.jpg',
       title: "Ghosts From The Past 3 Pack Collector's Set",
       prize: '$34.95',
       dataID: 'Ghost-Past',
       type: 'ygo'
    },
    {
       image: './image/YGOTCG/FreCha.jpg',
       title: 'Structure Deck: Freezing Chains 1st Edition',
       prize: '$9.95',
       dataID: 'Freezing-Chains',
       type: 'ygo'
    },
    {
       image: './image/YGOTCG/LeDue.jpg',
       title: "Legendary Duelists Season 2 Collector's Set of 2 Booster Packs",
       prize: '$21.99',
       dataID: 'Legend-Duelists',
       type: 'ygo'
    },
    {
       image: './image/YGOTCG/BlaVor.jpg',
       title: 'Blazing Vortex Booster Box of 24 1st Edition Packs',
       prize: '$64.99',
       dataID: 'Blazing-Vortex',
       type: 'ygo'
    },
    {
       image: './image/YGOTCG/SecCham.jpg',
       title: 'Structure Deck: Spirit Charmers 1st Edition',
       prize: '$8.48',
       dataID: 'Spirit-Charmers',
       type: 'ygo'
    },
 ];

/*
const pokeList = [
    {
       image: './image/PokeTCG/BatSty.jpg',
       title: 'Sword & Shield Battle Styles Booster Pack',
       prize: '$4.88'
    },
    {
       image: './image/PokeTCG/ViVo.jpg',
       title: 'Sword & Shield Vivid Voltage Booster Pack',
       prize: '$7.96'
    },
    {
       image: './image/PokeTCG/ReCla.jpg',
       title: 'Sword & Shield Rebel Clash Booster Pack',
       prize: '$5.99'
    },
    {
       image: './image/PokeTCG/DaAbla.jpg',
       title: 'Sword & Shield Darkness Ablaze Booster Pack',
       prize: '$6.99'
    },
    {
       image: './image/PokeTCG/HiFa.jpg',
       title: 'Sun & Moon Hidden Fates Booster Pack',
       prize: '$16.99'
    },
 ];
*/

   function renderList(list){
      return `
         <div class="product" dataID=${list.dataID} type=${list.type} prize=${list.prize}>
            <a href="./product.html">
               <img src=${list.image} alt="">
            </a>
            <a href="./product.html">${list.title}</a>
            <div class="prize">
               <p>Details</p>
               <p>${list.prize}</p>
               <i class="fas fa-cart-plus push"></i>
            </div>
         </div>
      `
   }
   
   $(document).ready(function() {
      pokeList.forEach(value => $('#poke').append(renderList(value)));
      YGOList.forEach(value => $('#ygo').append(renderList(value)));

      let quantity;
      $('.product').on('click', function(e) {
         const dataID = $(this).attr('dataID');
         const type = $(this).attr('type');
         const item = {
            type,
            dataID
         }
         let product = [];
         product.push(item);
         sessionStorage.setItem('product', JSON.stringify(product));
      })
      $('.push').on('click', function(e) {
         const dataID = $(this).parents('.product').attr('dataID');
         const type = $(this).parents('.product').attr('type');
         const prize = $(this).parents('.product').attr('prize');
         const item = {
            type,
            dataID,
            quantity,
            prize
         }
         if (!item.quantity){
            item.quantity = 1;
         }

         let cart = localStorage.getItem('cart');
         if (!cart){
            cart = [];
            cart.push(item);
         }
         else{
            cart = JSON.parse(cart);
            const findExist = cart.find(value => value.dataID === dataID)
            if (findExist){
               findExist.quantity = 1 * findExist.quantity + 1;
            }
            else{
               cart.push(item)
            }
         }
         console.log(cart);
         localStorage.setItem('cart', JSON.stringify(cart));
      })
   })

