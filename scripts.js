//add selector cat button
const catButtonClick = document.querySelector('.catButton')
//const bodyAppender = document.querySelector('.bodyClass')
const catStarterDiv = document.querySelector('.catStart')
//const catOnScreen = document.querySelector('.catStartMeow')
let currentTop = 0;
let currentLeft = 0;
const documentHeight = document.documentElement.clientHeight;
const documentWidth = document.documentElement.clientWidth;
//eventlistener for catbuttonclick

catButtonClick.addEventListener('click', deleteCat)
catButtonClick.addEventListener('click', addCat)

//addcat function
function deleteCat(){
    document.querySelectorAll('.Meow').forEach(e => e.remove());
    //let catsOnScreen = document.querySelectorAll('.Meow')
    //console.log(catsOnScreen)
    //catsOnScreen.remove()
    //for (var i = 0; i < catsOnScreen.length; i++) {
    //must go back to document with document. to effect the element, otherwise it just clears array
       //delete catsOnScreen[0];
    //}
}
function addCat(){
    currentTop = Math.floor(Math.random()*documentHeight)+1;
    currentLeft = Math.floor(Math.random()*documentWidth)+1;
    let catSelection = Math.floor(Math.random()*10)
    console.log(currentLeft)
    catStarterDiv.style.top = currentTop+'px';
    console.log(catStarterDiv.style.top)
    catStarterDiv.style.left = currentLeft+'px';
    let randomCat = document.createElement('div');
    randomCat.classList.add('Meow');
    randomCat.innerHTML = `<img src="images/catPic${catSelection}.png" alt="cat" width="100" class="catStart">`;
    catStarterDiv.appendChild(randomCat);
}

//<style> .catDiv {position: absolute; top: ${random1}; left: ${random2}; } </style>