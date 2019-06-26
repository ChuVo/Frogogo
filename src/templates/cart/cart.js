(function() {

  const bascket = document.querySelector('.bascket'),
        cart = document.querySelector('.cart');

  let openCart = function() {
    cart.classList.toggle('cart__visible');
  };

  bascket.addEventListener('click', openCart);

}());