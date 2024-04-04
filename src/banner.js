export default function banner(){
const header = document.querySelector('header');
header.classList.add('banner');

const title = document.createElement('h1');
title.textContent = "Seven";
title.classList.add('title');
header.prepend(title);
}