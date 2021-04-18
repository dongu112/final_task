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

let cart = localStorage.getItem('cart');
cart = JSON.parse(cart);
console.log(cart);

function renderTitle(item){
    return `
        <h2>Shopping Cart</h2>
        <p>(${item.length} products)</p>
    `
}

function renderCart(item, current) {
    return `
    <div class="item-detail" shit='3'>
        <img src="${item.image}" alt="">
        <div class="description">
            <a href="#">${item.title}</a>
        </div>
        <p>${item.prize}</p>
        <div class="quantity-control">
            <i class="far fa-minus-square minus" dataID='${item.dataID}'></i>
            <input type="text" name="quantities" value="${current.quantity}">
            <i class="far fa-plus-square plus" dataID='${item.dataID}'></i>
        </div>
        <p class="subPrize" shit='1'>$${((1 * item.prize.slice(1)) * (1 * current.quantity)).toFixed(2)}</p>
    </div>
    `
}

function subSum(){
    let sub = 0;
    cart.forEach(item => {
        sub += (1 * item.quantity) * (1 * item.prize.slice(1));
    })
    return sub.toFixed(2);
}

function renderTotal(value) {
    return `
        <h2 id="total">Total: $${value}</h2>
        <button>Checkout</button>
    `
}

$(document).ready(function() {
    $('.tag-name').append(renderTitle(cart));

    cart.forEach(value => {
        let subVar;
        if (value.type == 'poke'){
            subVar = pokeList.find(item => item.dataID == value.dataID);
        }
        else if (value.type == 'ygo'){
            subVar = YGOList.find(item => item.dataID == value.dataID);
        }

        $('.product-detail').append(renderCart(subVar, value));
    })

    $('.sub-total').append(renderTotal(subSum()));

    $('.plus').on('click', function() {
        let currentValue = $(this).parent().children('input').attr('value');
        currentValue = 1 + 1 * currentValue;
        $(this).parent().children('input').attr('value', currentValue);
        let newValue = cart.find(value => value.dataID == $(this).attr('dataID'));
        newValue.quantity = 1 * newValue.quantity + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        let newPrize = newValue.quantity * (1 * newValue.prize.slice(1));
        newPrize = newPrize.toFixed(2);
        $(this).parents('.item-detail').children('p.subPrize').text(`$${newPrize}`);
        $('#total').text(`Total: $${subSum()}`)
    })
    $('.minus').on('click', function() {
        let currentValue = $(this).parent().children('input').attr('value');
        currentValue = 1 * currentValue;
        if (currentValue > 1){
            currentValue -= 1;
            $(this).parent().children('input').attr('value', currentValue);
            let newValue = cart.find(value => value.dataID == $(this).attr('dataID'));
            newValue.quantity = 1 * newValue.quantity - 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            let newPrize = newValue.quantity * (1 * newValue.prize.slice(1));
            newPrize = newPrize.toFixed(2);
            $(this).parents('.item-detail').children('p.subPrize').text(`$${newPrize}`);
            $('#total').text(`Total: $${subSum()}`)
        }
    })
})

