const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 250,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 400,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 650,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
}

const btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this)
    })
}
function plusOrMinus(el) {
    const parent = el.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        attribute = el.getAttribute('data-symbol')

    if (attribute == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Sum
    kkal.innerHTML = product[parentId].kkalSum
}


let imgBtn = document.querySelectorAll('.main__product-info');
let vieWindow = document.querySelector('.view');
let viewImg = document.querySelector('.view img');
let closeWindow = document.querySelector('.view__close');
for (let i = 0; i < imgBtn.length; i++) {
  imgBtn[i].addEventListener('click', function() {
    vieWindow.classList.add('active');
    view(this);
  })
    
}

closeWindow.addEventListener('click', function(){
    vieWindow.classList.remove('active');
})

function view(el){
    let div = el.closest('.main__product')
    let id = div.getAttribute('id')
    if (id == 'plainBurger'){
        viewImg.setAttribute('src', 'images/product2.jpg')
    }else if ( id == 'freshBurger'){
        viewImg.setAttribute('src', 'images/product1.jpg')
    }else if ( id == 'freshCombo'){
        viewImg.setAttribute('src', 'images/product3.jpg')
    }
}


let lv = document.querySelector('.header__timer-extra');
let timer = 100;
function  lvl(){
    
    if ( lv.innerHTML < 100){
        lv.innerHTML++
        if(lv.innerHTML <= 40){
            timer = 60  
        }else if ( lv.innerHTML <= 60){
            timer = 80 
        }else if ( lv.innerHTML <= 70){
            timer = 100
        }else if ( lv.innerHTML <= 85){
            timer = 120
        }
        
    }
    
    
    setTimeout(lvl,timer)
}
lvl()