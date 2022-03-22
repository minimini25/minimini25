'use strict';

const navbar = document.querySelector('#navbar');
//console.log(`${navbar}`)
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  //console.log(window.scrollY);
  //console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  //console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click',() => {
  scrollIntoView('#home');
});

/*
Work categories안에 있는 버튼이 클릭되면 버튼 안에 들어 있는 필터값에 따라서
그 data-type에 해당하는 아이들만 보여주도록 만든다
*/
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');//프로젝트를 배열로 받아옴
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  //console.log(filter);
  if(filter == null) return;
  projectContainer.classList.add('anim-out');
  //프로젝트 버튼 안에 숫자는 span이라서 button일때와 span일때를 분리해주어야 함
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  projects.forEach((project) => {
    //console.log(project);
    //console.log(project.dataset.type);
    if(filter === '*' || filter === project.dataset.type){
      project.classList.remove('invisible');
    }else{
      project.classList.add('invisible');
    }
  });
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// =====================  Skills ===================================
new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["HTML5", "CSS3", "Javascript", "JAVA","Fighting!"],
    datasets: [
      {
        label: "Skills",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850","red"],
        data: [90,90,70,60,100,0]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
    }
  }
});