export default function menu() {
    const content = document.getElementById('tab-content');
    const menuTab = document.createElement('div');
menuTab.classList.add('tabContent');
menuTab.setAttribute('id', 'menu');
menuTab.setAttribute('data-tab-content', '')
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

}