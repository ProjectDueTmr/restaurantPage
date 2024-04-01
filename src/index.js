import _ from 'lodash';
import './style.css';

// BANNER
const header = document.querySelector('header');
header.classList.add('banner');

const title = document.createElement('h1');
title.textContent = "Seven";
title.classList.add('title');
header.prepend(title);

const content = document.getElementById('content');
// HOME TAB  

const homeTab = document.createElement('div');
homeTab.classList.add('home', 'tab');
content.append(homeTab);
const homeTitle = document.createElement('h1')
homeTitle.classList.add('title')
homeTitle.textContent = 'Home'
homeTab.append(homeTitle);

const discDiv = document.createElement('div');
discDiv.classList.add('discription');
homeTab.append(discDiv);
const discTitle = document.createElement('h2');
discTitle.classList.add('title2');
discTitle.textContent = 'Critic Reviews'
const discPara = document.createElement('p');
discPara.innerText = 'This is a 5 Star business. only the wealthiest of people can have access in.'
discDiv.append(discTitle, discPara);
   


const hoursDiv = document.createElement('div');
 hoursDiv.classList.add('hoursDiv');
 homeTab.append(hoursDiv);
const hoursTitle = document.createElement('h2');
hoursTitle.classList.add('title2');
hoursTitle.textContent = 'Work Hours';

 const weekDays = document.createElement('p');
 const weekends = document.createElement('p');
 weekDays.textContent = 'Monday - Thursday: 7:00 - 1:00';
 weekends.textContent = 'Friday - Sunday: 24/7';
 hoursDiv.append(hoursTitle, weekDays, weekends)

 const locationDiv = document.createElement('div');
 locationDiv.classList.add('location');
 homeTab.append(locationDiv);
 const locationTitle = document.createElement('h2');
 locationTitle.classList.add('title2');
 locationTitle.textContent = 'Where to find us';
 const locationPara = document.createElement('p');
 locationPara.innerText = '777 Seven Ave, Sevenville, Texas';
 locationDiv.append(locationTitle, locationPara);





    // MENU TAB

const menuTab = document.createElement('div');
menuTab.classList.add('menu', 'tab');
content.append(menuTab);
const menuTitle = document.createElement('h1')
menuTitle.classList.add('title')
menuTitle.textContent = 'Menu'
menuTab.append(menuTitle);

const drinks = document.createElement('h2');
drinks.classList.add('title2');
drinks.textContent = 'Drinks';
menuTab.append(drinks);

const food = document.createElement('h2');
food.classList.add('title2');
food.textContent = 'Food';
menuTab.append(food);



    // CONTACT TAB
console.log('hey');