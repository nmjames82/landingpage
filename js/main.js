//Navigation global variable
const menuLink = document.querySelectorAll('menuLink');
//Sections global variable
const sectionsElements = document.querySelectorAll('section');
const ul = document.querySelector('ul');



//build a nav bar
function addNavSection() {
  const sections = [{
      text: 'Home',
      href: 'showcase-page',
    },
    {
      text: 'Services',
      href: 'services-page',
    },
    {
      text: 'About',
      href: 'about-page',
    },
    {
      text: 'Scientastic Discovery',
      href: 'scientific-disovery',
    }
  ];

  for (let section of sections) {
    let menuItem = document.createElement('li')
    menuItem.className = 'menuLink';
    menuItem.innerHTML = `<button type="button"><a href=#${section.href}>${section.text}</a></button>`;
    ul.appendChild(menuItem);
  }
}
addNavSection();


//Initial styling for navbar at home
function initNav() {
  const firstItem = document.getElementsByClassName('menuLink')[0];
  firstItem.classList.add('active');
};
initNav();

//Styling for acitve states when clicking on Nav Bar
let nav = document.querySelector('#navbar_list');
let button = nav.getElementsByClassName('menuLink');


//Styling for when the navbar is clicked
const onOff = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
      let press = document.getElementsByClassName('active');

      if (press.length > 0) {
        press[0].className = press[0].className.replace(" active", "")
      }
      this.className += ' active';
    });
  }
}
onOff();



//where the sections are in the veiwport
var isInViewport = function (section) {
    var bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//Adding active class to sections when they are in the viewport
const changer = () =>{
  window.addEventListener('scroll', function(e){
    for(section of sectionsElements){
      isInViewport(section);
      console.log(isInViewport(section));
      console.log(section);
      if (isInViewport(section)){
section.classList.add('active');
}else{
  section.classList.remove('active')
};

      }
    })
  };

changer();




/*
const changer = () =>{
  window.addEventListener('scroll', function(e){
    for(section of sectionsElements){
      isInViewport(section);
      console.log(isInViewport(section));
      console.log(section);
      if (isInViewport(section)){
section.classList.add('active');
}else{
  section.classList.remove('active')
};

      }
    })
  };

changer();


var isInViewport = function (section) {
    var bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
*/




// Scroll to anchor ID using scrollTO event
