const menuIcon = document.querySelector('.ham-menu');

const navmenu = document.querySelector('.navmenu');

menuIcon.addEventListener('click', () => {
  navmenu.classList.toggle('change');
});