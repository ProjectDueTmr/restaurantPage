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
homeTitle.classList.add('title2')
homeTitle.textContent = 'Home'
homeTab.append(homeTitle);

const discDiv = document.createElement('div');
discDiv.classList.add('discription');
homeTab.append(discDiv);
const discTitle = document.createElement('h2');
discTitle.classList.add('title3');
discTitle.textContent = 'Critic Reviews'
const discPara = document.createElement('p');
discPara.innerText = 'This is a 5 Star business. only the wealthiest of people can have access in.'
discDiv.append(discTitle, discPara);
   


const hoursDiv = document.createElement('div');
 hoursDiv.classList.add('hoursDiv');
 homeTab.append(hoursDiv);
const hoursTitle = document.createElement('h2');
hoursTitle.classList.add('title3');
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
 locationTitle.classList.add('title3');
 locationTitle.textContent = 'Where to find us';
 const locationPara = document.createElement('p');
 locationPara.innerText = '777 Seven Ave, Sevenville, Texas';
 locationDiv.append(locationTitle, locationPara);





    // MENU TAB

const menuTab = document.createElement('div');
menuTab.classList.add('menu', 'tab');
content.append(menuTab);
const menuTitle = document.createElement('h1')
menuTitle.classList.add('title2')
menuTitle.textContent = 'Menu'
menuTab.append(menuTitle);
//DRINKS
const drinks = document.createElement('h2');
drinks.classList.add('title3');
drinks.textContent = 'Drinks';
menuTab.append(drinks);

//drink 1
const drinkItem = document.createElement('h3');
drinkItem.classList.add('item-name');
drinkItem.textContent = 'pepsi';
const drinkDisc = document.createElement('p');
drinkDisc.classList.add('item-disc');
drinkDisc.textContent = '$3'
drinks.append(drinkItem, drinkDisc);

//drink2
const drinkItem2 = document.createElement('h3');
drinkItem2.classList.add('item-name');
drinkItem2.textContent = 'cola';
const drinkDisc2 = document.createElement('p');
drinkDisc2.classList.add('item-disc');
drinkDisc2.textContent = '$3'
drinks.append(drinkItem2, drinkDisc2);

//drink3
const drinkItem3 = document.createElement('h3');
drinkItem3.classList.add('item-name');
drinkItem3.textContent = 'Water';
const drinkDisc3 = document.createElement('p');
drinkDisc3.classList.add('item-disc');
drinkDisc3.textContent = '$2'
drinks.append(drinkItem3, drinkDisc3);

//FOOD
const food = document.createElement('h2');
food.classList.add('title3');
food.textContent = 'Food';
menuTab.append(food);

//food 1
const foodItem = document.createElement('h3');
foodItem.classList.add('item-name');
foodItem.textContent = 'Churro';
const foodDisc = document.createElement('p');
foodDisc.classList.add('item-disc');
foodDisc.textContent = '$5';


    // CONTACT TAB

    const contactTab = document.createElement('div');
    contactTab.classList.add('contact', 'tab');
    content.append(contactTab);

    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('title2');
    contactTitle.textContent = 'Contact';
    contactTab.append(contactTitle);

    const contactTitle2 = document.createElement('h2');
    contactTitle2.classList.add('title3');
    contactTitle2.textContent = 'Contact us here';

    const contactNum = document.createElement('p');
    contactNum.textContent = '(777)-777-7777'

    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'doesntexist@nowhere.com'
    contactTab.append(contactTitle2, contactNum, contactEmail);


console.log('hey');