//add selector cat button
const catButtonClick = document.querySelector('.catButton')
//const bodyAppender = document.querySelector('.bodyClass')
const catStarterDiv = document.querySelector('.catStart')
//const catOnScreen = document.querySelector('.catStartMeow')
let currentTop = 0;
let currentLeft = 0;
const documentHeight = document.documentElement.clientHeight;
const documentWidth = document.documentElement.clientWidth;
//eventlistener for catbuttonclicks

catButtonClick.addEventListener('click', deleteCat)
catButtonClick.addEventListener('click', addCat)

//cat functions

function playMeow() {
    var sound = document.getElementById("soundOfCats")
    sound.play()
}

function deleteCat() {
    document.querySelectorAll('.Meow').forEach(e => e.remove());
}
function addCat() {
    currentTop = Math.floor((Math.random() * documentHeight) / 2 + (documentHeight / 4)) + 1;
    currentLeft = Math.floor((Math.random() * documentWidth) / 3 + (documentWidth / 3)) + 1;
    let catSelection = Math.floor(Math.random() * 10)
    console.log(currentLeft)
    catStarterDiv.style.top = currentTop + 'px';
    console.log(catStarterDiv.style.top)
    catStarterDiv.style.left = currentLeft + 'px';
    let randomCat = document.createElement('div');
    randomCat.classList.add('Meow');
    randomCat.innerHTML = `<img src="images/catPic${catSelection}.png" alt="cat" width="100" class="catStart">`;
    catStarterDiv.appendChild(randomCat);
    playMeow();
}

//<style> .catDiv {position: absolute; top: ${random1}; left: ${random2}; } </style>