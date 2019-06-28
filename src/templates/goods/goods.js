(function() {

  window.addEventListener('DOMContentLoaded', () => {
    const cartWrapper = document.querySelector('.cart__wrapper .goods'),
          btnGoods = document.querySelectorAll('.goods__btn'),
          btnMore = document.querySelector('.btn-more'),
          btnPlus = document.querySelectorAll('.btn-plus'),
          btnMinus = document.querySelectorAll('.btn-minus'),
          confirm = document.querySelector('.confirm'),
          empty = cartWrapper.querySelector('.empty'),
          products = document.querySelectorAll('.goods__item'),        
          productCount = document.querySelector('.bascket__count');
      
    let id = 1,
        totalProduct = 0;

    btnMore.addEventListener('click', showMoreProduct);

    btnGoods.forEach( function (btn, i) {
      btn.addEventListener('click', () => {
        let item = products[i].cloneNode(true),//клонирование i-го продукта в корзину
            trigger = item.querySelector('button'),
            btnRemove = document.createElement('div'),
            buttonMinus = item.querySelector('.btn-minus'),
            buttonPlus = item.querySelector('.btn-plus');

        btnRemove.classList.add('goods__item-remove');

        cartWrapper.appendChild(item);
        if (empty) {
          empty.remove();
        }

        item.firstElementChild.appendChild(btnRemove);
        trigger.remove();
        showCountProduct();
        showConfirm();
        removeFromCart();

        buttonPlus.addEventListener('click', clickPlus );
        buttonMinus.addEventListener('click', clickMinus );
      });
    });

    btnMinus.forEach( (btn) => {
      btn.addEventListener('click', clickMinus);
    });

    btnPlus.forEach( (btn) => {
      btn.addEventListener('click', clickPlus);
    });

    function clickMinus() {
      let counter = this.nextSibling.nextSibling,
          count = +counter.innerHTML;

      if (count <= 1) {
          console.log('минимальное количество позиций');
      } else {
        counter.innerHTML = --count;
      }
    };

    function clickPlus() {
      let counter = this.previousSibling.previousSibling,
          count = +counter.innerHTML;

      counter.innerHTML = ++count;     
    }; 

    function showConfirm() {    
      const id = setInterval( frame, 10);
      let counter = 100;

      confirm.style.display = 'block';

      function frame() {
        if( counter == 10) {
          clearInterval(id);
          confirm.style.display = 'none';
        } else {
          counter--;
          confirm.style.opacity = '.' + counter;//исчезание корзинки
          confirm.style.transform =`translateY(-${counter}px)`;//анимация корзинки, смещение вниз
        }            
      };
    };

    function showMoreProduct() {
      let nextProduct = document.querySelector(`#id${id}`);
      
      nextProduct.classList.remove('goods__wrapper_hidden');
      id++;
    };

    function showCountProduct() {
      const count = cartWrapper.querySelectorAll('.goods__item');

      if (count.length !== 0) {
        productCount.style.visibility='visible';      
      } else {
        productCount.style.visibility='hidden';
      };
    };
    
    function removeFromCart() {
      const btnRemove = cartWrapper.querySelectorAll('.goods__item-remove');
      btnRemove.forEach(function (btn) {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.remove();
          showCountProduct();
          // calcTotal();
        });
      });
    };

  });
} ());