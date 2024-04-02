import _ from 'lodash';
import './style.css';



const tabs = document.querySelectorAll('[data-tab-target]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        target.classList.add('active');
    })
})




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
homeTab.setAttribute('id', 'home')
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
menuTab.setAttribute('id', 'menu');
content.append(menuTab);
const menuTitle = document.createElement('h1')
menuTitle.classList.add('title2')
menuTitle.textContent = 'Menu'
menuTab.append(menuTitle);
//DRINKS
const drinks = document.createElement('div');
const drinksTitle = document.createElement('h3');
drinksTitle.classList.add('title3');
drinksTitle.textContent = 'Drinks';
menuTab.append(drinks);
drinks.append(drinksTitle);

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
const food = document.createElement('div');
const foodTitle = document.createElement('h3');
foodTitle.classList.add('title3');
foodTitle.textContent = 'Food';
menuTab.append(food);
food.append(foodTitle);

//food 1
const foodItem = document.createElement('h3');
foodItem.classList.add('item-name');
foodItem.textContent = 'Escargot';
const foodDisc = document.createElement('p');
foodDisc.classList.add('item-disc');
foodDisc.textContent = '$25';
food.append(foodItem, foodDisc);

//food 2
const foodItem2 = document.createElement('h3');
foodItem2.classList.add('item-name');
foodItem2.textContent = 'Caviar';
const foodDisc2 = document.createElement('p');
foodDisc2.classList.add('item-disc');
foodDisc2.textContent = '$20';
food.append(foodItem2, foodDisc2);

//food 3
const foodItem3 = document.createElement('h3');
foodItem3.classList.add('item-name');
foodItem3.textContent = 'Churro';
const foodDisc3 = document.createElement('p');
foodDisc3.classList.add('item-disc');
foodDisc3.textContent = '$10';
food.append(foodItem3, foodDisc3);



    // CONTACT TAB

    const contactTab = document.createElement('div');
    contactTab.classList.add('contact', 'tab');
    contactTab.setAttribute('id', 'contact');
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