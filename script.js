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
  },
];

const sectionCards = document.querySelector('.section-cards');

function createProjectCard(project) {
  const section = document.createElement('section');
  section.classList ='section1', '${project}';
  const projectHeading = document.createElement('h4');
  projectHeading.innerHTML='Profesional Art Printing Data';
  section.appendChild(projectHeading);
  const projectDesciption = document.createElement('p');
  projectDesciption.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard'
  section.appendChild(projectDesciption);

  const projectSkills = document.createElement('ul');
  const skills = ['html', 'bootstrap', 'Ruby'];

  for (let i = 0; i < skills.length; i++) {
    const projectSkillsList = document.createElement('li');
    projectSkillsListItem.textContent = skills[i];
    projectSkillsList.appendChild(projectSkillsListItem);
   }

   section.appendChild(projectSkillsList);

   const projectButton = document.createElement('button');
   projectButton.classList = 'see-project';
   projectButton.innerText = 'See project';

    section.appendChild(projectButton);

    return section;
  }

  const projects = ['one', 'two', 'three', 'four', 'five', 'six'];

  for(let i=0; i < projects.length; i++) {
    const project = createProjectCard(projects[i]);
    sectionCards.appendChild(project);
  }

const popup = {
  name: 'Multi Post Stories',
  techs: ['html', 'Bootstrap', 'Ruby on rails'],
  imgSrc: './images/#',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  liveSrc: '#',
  sourceLink: '#'
}

function window (){
const blurDiv = document.createElement('div')
blurDiv.classList.add('blur')
  
  let title = document.createElement('h3');
  title.innerHTML = projects.name;
  blurDiv.appendChild(title);
  
  
  document.body.appendChild(blurDiv) 
}
