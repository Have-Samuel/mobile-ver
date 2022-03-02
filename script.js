// The mobile menu
const closeIcon = document.querySelector('.ham-menu');

const menuIcon = document.querySelector('.hambug');

const menuLinks = document.querySelector('.navmenu');

menuIcon.addEventListener('click', () => {
  menuLinks.classList.add('change');
});
// click to appear
closeIcon.addEventListener('click', () => {
  menuLinks.classList.remove('change');
});

const listItems = document.querySelectorAll('.nav_item');
// click to disappear
listItems.forEach((element) => {
  element.addEventListener('click', () => {
    menuLinks.classList.remove('change');
  });
});

// project cards object
const projects = [
  {
    projectId: 0,
    title: 'Printing Data One',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 1,
    title: 'Printing Data Two',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 2,
    title: 'Printing Data Three',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/mobile-ver/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
];
// Calling the cards
const sectionCards = document.querySelector('.section-cards');

function createProjectCard(project) {
  const section = document.createElement('section');
  section.classList = 'section1';
  // <h4>
  const projectHeading = document.createElement('h4');
  projectHeading.innerHTML = project.title;
  section.appendChild(projectHeading);
  // <p>
  const projectDesciption = document.createElement('p');
  projectDesciption.textContent = project.description;
  section.appendChild(projectDesciption);
  // skills
  const projectSkills = document.createElement('ul');
  const skills = project.technologies;
  // looping the skills
  for (let i = 0; i < skills.length; i += 1) {
    const projectSkillsListItem = document.createElement('li');
    projectSkillsListItem.textContent = skills[i];
    projectSkills.appendChild(projectSkillsListItem);
    section.appendChild(projectSkills);
  }
  // <button>
  const projectButton = document.createElement('button');
  projectButton.classList = 'see-button';
  projectButton.innerText = 'See project';

  section.appendChild(projectButton);
  // when clicked shows Id
  projectButton.addEventListener('click', () => {
    console.log(project.projectId);
  });
  return section;
}

for (let i = 0; i < projects.length; i += 1) {
  const project = createProjectCard(projects[i]);
  sectionCards.appendChild(project);
}
// POPUP-WINDOW
const popup = {
  title: 'Multi Post Stories',
  techs: ['html', 'Bootstrap', 'Ruby on rails'],
  imgSrc: './images/popup.png',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  livelink: 'https://have-samuel.github.io/mobile-ver',
  sourceLink: 'https://github.com/Have-Samuel/mobile-ver',
};

// const popupWindow = document.querySelector('.popup1');

function creatPopupCard() {
  const popupWindow = document.createElement('section');
  document.body.appendChild(popupWindow);
  popupWindow.classList = 'popup1';
  const div = document.createElement('div');
  div.classList = 'head-img';
  popupWindow.appendChild(div);

  const popupHeading = document.createElement('h3');
  popupHeading.textContent = popup.title;
  div.appendChild(popupHeading);

  const popupClose = document.createElement('img');
  popupClose.src = './images/Close.png';
  div.appendChild(popupClose);

  const popupSkills = document.createElement('ul');

  for (let i = 0; i < popup.techs.length; i += 1) {
    const links = document.createElement('li');
    links.textContent = popup.techs[i];
    popupSkills.appendChild(links);
  }

  popupWindow.appendChild(popupSkills);

  const div1 = document.createElement('div');
  div1.classList = 'img-head';
  popupWindow.appendChild(div1);

  const img = document.createElement('img');
  img.src = './images/popup.png';
  div1.appendChild(img);

  const paragraph = document.createElement('p');
  paragraph.textContent = popup.description;
  div1.appendChild(paragraph);

  const div2 = document.createElement('div');
  div2.classList = 'button-pop';
  popupWindow.appendChild(div2);

  const popupButton = document.createElement('a');
  const img1 = document.createElement('img');
  popupButton.appendChild(img1);
  popupButton.textContent = 'See live';
  div2.appendChild(popupButton);

  const popupButton1 = document.createElement('a');
  const img2 = document.createElement('img');
  popupButton.appendChild(img2);
  popupButton1.textContent = 'See source';
  div2.appendChild(popupButton1);
}

creatPopupCard();

// function window() {
//   const blurDiv = document.createElement('div');
//   blurDiv.classList.add('blur');

//   const title = document.createElement('h3');
//   title.innerHTML = projects.name;
//   blurDiv.appendChild(title);

//   document.body.appendChild(blurDiv);
// }
