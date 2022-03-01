const closeIcon = document.querySelector('.ham-menu');

const menuIcon = document.querySelector('.hambug');

const menuLinks = document.querySelector('.navmenu');

menuIcon.addEventListener('click', () => {
  menuLinks.classList.add('change');
});

closeIcon.addEventListener('click', () => {
  menuLinks.classList.remove('change');
});

const listItems = document.querySelectorAll('.nav_item');

listItems.forEach((element) => {
  element.addEventListener('click', () => {
    menuLinks.classList.remove('change');
  });
});
