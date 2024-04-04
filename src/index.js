import contact from './contact.js';
import home from './home.js';
import menu from './menu.js';
import banner from './banner.js';
import _ from 'lodash';
import './style.css';

const content = document.getElementById('tab-content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn= document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');
banner()
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


