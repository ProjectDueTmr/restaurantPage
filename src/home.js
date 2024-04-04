export default function home() {
    const content = document.getElementById('tab-content');
    const homeTab = document.createElement('div');
    homeTab.classList.add('tabContent', 'active');
    homeTab.setAttribute('id', 'home');
    homeTab.setAttribute('data-tab-content', '');
    content.append(homeTab);
    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('title2');
    homeTitle.textContent = 'Home';
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
}