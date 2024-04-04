import contact from './contact.js';
import home from './home.js';
import menu from './menu.js';
import _ from 'lodash';
import './style.css';

const content = document.getElementById('tab-content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn= document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

home();
homeBtn.classList.add('active');

function viewChange(){
    while(content.children.length > 0) {
        content.removeChild(content.firstChild);
    }
}

homeBtn.addEventListener('click', () => {
    viewChange();
    home();
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.remove('active');
});
menuBtn.addEventListener('click', () => {
    viewChange();
    menu();
    homeBtn.classList.remove('active');
    menuBtn.classList.add('active');
    contactBtn.classList.remove('active');
});
contactBtn.addEventListener('click', () => {
    viewChange();
    contact();
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.add('active');
});


// const tabs = document.querySelectorAll('[data-tab-target]');
// const tabContents = document.querySelectorAll('[data-tab-content]');



// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.tabTarget);
//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active');
//         });
//         target.classList.add('active');
//     });
// });




// BANNER
const header = document.querySelector('header');
header.classList.add('banner');

const title = document.createElement('h1');
title.textContent = "Seven";
title.classList.add('title');
header.prepend(title);

// HOME TAB  






// MENU TAB


// CONTACT TAB

 