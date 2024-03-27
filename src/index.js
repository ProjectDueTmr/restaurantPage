import _ from 'lodash';
import './style.css';


const header = document.querySelector('header');
header.classList.add('banner');

const title = document.createElement('h1');
title.textContent = "Seven";
title.classList.add('title');
const nav = document.querySelector('nav');
const parentElement = nav.parentNode;
parentElement.insertBefore(title, nav);

header.prepend(title);


console.log('hey');