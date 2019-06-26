(function() {
  const buttonMore = document.querySelector('.btn-more'),
        cartWrapper = document.querySelector('.cart__wrapper .goods'),
        cart = document.querySelector('.cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        clearBtn = document.querySelector('.cart__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        productCount = document.querySelector('.bascket__count'),
        empty = cartWrapper.querySelector('.empty');
      
  let id = 1;

  buttonMore.addEventListener('click', showMoreProduct);

  clearBtn.addEventListener('click', clearCart);

  goodsBtn.forEach( function (btn, i) {
    btn.addEventListener('click', () => {
        let item = products[i].cloneNode(true),//клонирование i-го продукта в корзину
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div');

        trigger.remove();
        showConfirm();

        removeBtn.classList.add('goods__item-remove');

        cartWrapper.appendChild(item);
        if (empty) {
            empty.remove();
        }

        item.firstElementChild.appendChild(removeBtn);

        calcGoods();
        removeFromCart();
    });
});

function showConfirm() {
  confirm.style.display = 'block';
  let counter = 100;
  const id = setInterval( frame, 10);

  function frame() {
    if( counter == 10) {
        clearInterval(id);
        confirm.style.display = 'none';
    } else {
        counter--;
        confirm.style.opacity = '.' + counter;//исчезание корзинки
        confirm.style.transform = `translateY(-${counter}px)`;//анимация корзинки, смещение вниз
    }            
  };
};

function showMoreProduct() {
  let nextProduct = document.querySelector(`#id${id}`);
  
  nextProduct.classList.remove('goods__wrapper_hidden');
  id++;
};

function clearCart() {
  cartWrapper.innerHTML = '';
  calcGoods();
};

function calcGoods() {
  const count = cartWrapper.querySelectorAll('.goods__item');

  if (count.length !== 0) {
    console.log(count.length + ">0");
    productCount.style.visibility = 'visible';
    productCount.innerHTML = count.length;
    
  } else {
    console.log(count.length + '= 0');
    productCount.style.visibility = 'hidden';
  }         
};

function removeFromCart() {
  const removeBtn = cartWrapper.querySelectorAll('.goods__item-remove');
  removeBtn.forEach(function (btn) {
      btn.addEventListener('click', () => {
          btn.parentElement.parentElement.remove();
          calcGoods();
          // calcTotal();
      });
  });
};


} ());