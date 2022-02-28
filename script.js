const closeIcon = document.querySelector('.ham-menu');

      menuIcon = document.querySelector('.hambug');

      menuLinks = document.querySelector('.navmenu');

      menuIcon.addEventListener('click', function() {
        menuLinks.classList.add('change');
      });

      closeIcon.addEventListener('click', function() {
        menuLinks.classList.remove('change')
      })




    // navmenu = document.querySelector('.navmenu');

// menuIcon.addEventListener('click', () => {
//   navmenu.classList.toggle('change');
// });