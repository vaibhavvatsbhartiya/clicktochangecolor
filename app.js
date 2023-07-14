const btn = document.querySelector('button');

const body = document.querySelector('body');

body.style.backgroundColor = 'orange';

const color = ['red', 'orange', 'green', 'white', 'yellow', 'purple', 'voilet', 'pink', 'brown'];


btn.addEventListener('click' , ChangeBGclr)

function ChangeBGclr(){
    const clrIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[clrIndex];
    console.log('The current background color of your screen after clicking is: ' + color[clrIndex]);
}