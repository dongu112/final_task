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

let cart = sessionStorage.getItem('product');
cart = JSON.parse(cart);
let subType = cart[cart.length - 1].type;
let info;
if (subType == 'poke'){
    info = pokeList.find(value => value.dataID == cart[cart.length - 1].dataID);
}
else if(subType == 'ygo'){
    info = YGOList.find(value => value.dataID == cart[cart.length - 1].dataID);
}

function renderVar(item){
    return `
    <img src=${item.image} alt="">
    <div class="detail">
        <h2>${item.title}</h2>
        <div class="rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p>${item.prize}</p>
        <div class="quantity">
            <i class="far fa-minus-square" id="minus"></i>
            <input type="text" name="quantities" id="quantity" value="1">
            <i class="far fa-plus-square" id="plus"></i>
        </div>
        <div class="payment">
            <button class="add" dataID=${item.dataID} type=${item.type} prize=${item.prize}>Add to Cart</button>
            <a href="./cart.html">
                <button>
                    <i class="fas fa-shopping-cart"></i>
                    Cart
                </button>
            </a>
        </div>
    </div>
`
}


$(document).ready(function() {
    $('#content').append(renderVar(info))

    let currentValue = $('#quantity').attr('value');
    currentValue = 1 * currentValue;
    $('#plus').on('click', function(e) {
        currentValue += 1;
        $('#quantity').attr('value', currentValue)
    })
    $('#minus').on('click', function() {
        if (currentValue > 1){
            currentValue -= 1;
            $('#quantity').attr('value', currentValue)
        }
    })

    $('.add').on('click', function() {
        const dataID = $(this).attr('dataID');
        const type = $(this).attr('type');
        const quantity = $('#quantity').attr('value')
        const prize = $(this).attr('prize');
        const item = {
            type,
            dataID,
            quantity,
            prize
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
                findExist.quantity = 1 * findExist.quantity + 1 * quantity;
            }
            else{
                cart.push(item)
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    })
})