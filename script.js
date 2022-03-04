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

  // The popup window
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
  popupButton.textContent = 'See live';
  const buttonSpan = document.createElement('span');
  popupButton.appendChild(buttonSpan);
  const img1 = document.createElement('img');
  img1.src = './images/popup1.svg';
  popupButton.appendChild(img1);
  div2.appendChild(popupButton);

  const popupButton1 = document.createElement('a');
  popupButton1.textContent = 'See source';
  const buttonSpan1 = document.createElement('span');
  popupButton1.appendChild(buttonSpan1);
  const img2 = document.createElement('img');
  img2.src = './images/Github1.png';
  popupButton1.appendChild(img2);
  div2.appendChild(popupButton1);
}

creatPopupCard();

// Closing of the popup window
const popupWindow = document.getElementsByClassName('popup1')[0];
const windowClose = document.querySelectorAll('.see-button');

for (let i = 0; i < windowClose.length; i += 1) {
  windowClose[i].addEventListener('click', () => {
    popupWindow.classList.add('window-popup');
  });
}

const closeB = popupWindow.querySelector('img');
closeB.addEventListener('click', () => {
  popupWindow.classList.remove('window-popup');
});

// Client-Side-Validation
const form = document.getElementById('form');

const formEmail = document.getElementsByClassName('contact-email')[0];

const small = document.getElementById('error_message');
function textMsg() {
  small.innerHTML = 'Please Lower case only!';
}
small.classList.add('small-text');

function checking(str) {
  return !/[A-Z]/.test(str);
}

form.addEventListener('submit', (event) => {
  const correctEmail = checking(formEmail.value);
  if (!correctEmail) {
    event.preventDefault();
    textMsg();
  }
});

// localStorage
const formData = {};

Data = {
  fullName = 'name',
  emailAdd = 'email',
  textArea = 'message';
}

let myData = JSON.stringify(Data);
localStorage.setItem('txt');
let obj = JSON.parse(message);
console.log(obj);
