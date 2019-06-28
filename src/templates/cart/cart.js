(function() {
  const bascket = document.querySelector('.bascket'),
        cart = document.querySelector('.cart'),
        cartWrapper = document.querySelector('.cart__wrapper .goods'),
        wallet = document.getElementById('select-wallet'),
        slider = document.getElementById('slider-fill'),
        usesBonus = document.getElementById('uses-bonus'),
        valueSlider = document.getElementById('slider-value'),
        btnClear = document.querySelector('.cart__btn'),
        btnConfirm = document.querySelector(".cart__confirm");        

  const openCart = function() {
    cart.classList.toggle('cart__visible');
  };

  btnClear.addEventListener('click', clearCart);
  giveSumBonus();
  bascket.addEventListener('click', openCart);
  wallet.addEventListener('click', giveSumBonus);
  usesBonus.innerHTML = slider.value;
  btnConfirm.addEventListener('click', sendOrder);
  
  slider.addEventListener("change", function() {
    console.log(this.value);

    usesBonus.innerHTML = this.value;
  });

  function giveSumBonus() {
    let bonus = wallet.options[wallet.selectedIndex].value;

    slider.max = bonus;
    slider.value = bonus / 2;
    valueSlider.innerHTML = wallet.options[wallet.selectedIndex].innerHTML;
  };

  function sendOrder() {
    const send = document.querySelector(".send");

    send.style.visibility = 'visible';
    setTimeout(function() { send.style.visibility = 'hidden';}, 3000);
    clearCart();
  };

  function clearCart() {
    const iconCount = document.querySelector('.bascket__count');

    cartWrapper.innerHTML='';
    iconCount.style.visibility='hidden';
  };

  function calcProduct() {
    
  }


}());