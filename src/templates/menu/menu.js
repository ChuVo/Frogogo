(function closeAsideMenu() {

  const asideMenu = document.querySelector('.menu__label'),
        menuItem = document.querySelectorAll( '.navigation__item'),
        chekMenu = document.getElementById('menu__check');

  document.body.addEventListener( 'click', (e) => {    
    
    if (chekMenu.checked) {

      if (e.target === asideMenu || e.target === chekMenu) {
        
      } else {
        chekMenu.checked = false;
      }
    }
  });

  let w = screen.width;
  
  if (w < 972) {
    menuItem.forEach( (i) => {

      i.addEventListener( 'click', () => {
        chekMenu.checked = false;
      });
    });
  };

}());