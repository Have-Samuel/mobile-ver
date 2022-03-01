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

const allProjects = document.querySelector('.project');
const popup = document.querySelector('.popup-project');

const projects = [
  {
    projectId: 'projectOne',
    name: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or '
    + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  }
];

const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

function createProject(project, name) {
  const techItem = `
  <div class="${name}">
  <section class="section1 section-cards empty-card">
  <div id="post-container">
  <img class="image" src="${project.name}" alt ="portfolio">
  </div>
  <div class="section-paragragh">
  <h4 class="sectio"`
}

const projectDetails = {
  name: 'Multi Post Stories',
  techs: ['html', 'Bootstrap', 'Ruby on rails'],
  imgSrc: './images/#',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  liveSrc: '#',
  sourceLink: '#'
}
