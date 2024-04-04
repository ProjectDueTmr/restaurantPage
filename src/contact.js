export default function contact() {
    const content = document.getElementById('tab-content');
    const contactTab = document.createElement('div');
    contactTab.classList.add('tabContent');
    contactTab.setAttribute('id', 'contact');
    contactTab.setAttribute('data-tab-content', '')
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
}