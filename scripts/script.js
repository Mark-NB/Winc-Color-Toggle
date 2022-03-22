const pageBody = document.querySelector('body');
const menuButton = document.querySelector('.color-menu__button');
const menuList = document.querySelector('.color-menu__list');
const menuItems = document.querySelectorAll('.color-menu__item');
const radioBtns = Array.from(document.getElementsByTagName('input')); //making array from grabbing all the radio buttons
const description = document.querySelector('.descriptive-text');
const colors = ['grey', 'red', 'green', 'blue', 'yellow']; //making array with all the colors needed

//making the menu list visible when hovering over the hamburger button
menuButton.addEventListener('mouseenter', function (e) {
    menuList.classList.remove('color-menu__list--visible');
});

//making the menu list dissapear when leaving mouse over with a 3 second delay
menuButton.addEventListener('mouseleave', function () {
    setTimeout(function () {
        menuList.classList.add('color-menu__list--visible');
    }, 3000)
});

//using foreach to itterate through all the menu items and assign event listeners
menuItems.forEach((item, index) => {
    item.addEventListener('click', arg => {
        radioBtns.forEach(btn => { //a foreach through all the radio buttons to reset their checked status
            btn.removeAttribute('checked');
        })
        pageBody.style.backgroundColor = colors[index]; //changing the background color from array based on current index
        description.innerHTML = `Now i'm ${colors[index]}`; //changing the descriptive text to match the color
        item.children[0].setAttribute('checked', 'true'); //checking the current radio button
        menuList.classList.toggle('color-menu__list--visible'); //making the menu disappear after color selection
    });
});

//listening for keydown's page wide to provide a alternative method to change colors
pageBody.addEventListener('keydown', event => {
    if (event.key > 0 && event.key < 6) { //responding only to numbers 1 through 5
        keyMinusOne = event.key - 1; //lowering key input by 1 for acurate index search
        pageBody.style.backgroundColor = colors[keyMinusOne]; //changing the background color from array based on current index
        description.innerHTML = `Now i'm ${colors[keyMinusOne]}!`; //changing the descriptive text to match the color
        radioBtns.forEach(button => { //a foreach through all the radio buttons to reset their checked status
            button.removeAttribute('checked');
        });
        menuItems[keyMinusOne].children[0].setAttribute('checked', 'true'); //checking the current radio button
    };
});