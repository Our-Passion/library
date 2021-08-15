/*
let galaryArray = [
  'The-Testaments.jpg',
  'The-Handmaid-Tale.jpg',
];

  'it.jpg',
  'misery.jpg',
  'Practical-Magic.jpg',
  'The-World-That-We-Knew.jpg',
  'Morality-for-Beautiful-Girls.jpg',
  'The-Miracle-at-Speedy-Motors.jpg',
  'Murder-a-the-Vicarage.jpg',
  'The-Murder-of-Roger-Ackroyd.jpg',


];

/*
let publishedArray = [
  '10th 2019', ' 1985'
];
*/
/*
let allImg = [];

let previousImg = [];
const sectionOfImg = document.getElementById('imgHome');
let book1 = document.getElementById('book1');
let book2 = document.getElementById('book2');
//let book3 = document.getElementById('book3');

function ImgSrc(name, srcOfImg) {
 // ImgSrc.publishedArray.push(this),
  this.name = name;
  // this.img = `./img/${srcOfImg}`;
  this.img = srcOfImg;
  //this.show = show;
  //this.timeClike = timeClike;
  ImgSrc.allImg.push(this);
}

ImgSrc.allImg = [];

//ImgSrc.publishedArray;


for (let i = 0; i < galaryArray.length; i++) {
  new ImgSrc(galaryArray[i].split('.')[0], galaryArray[i]);
}
let book1random;
let book2random;
function render() {
  book1.src = `./img/${ImgSrc.allImg[book1random].img}`;
  book2.src = `./img/${ImgSrc.allImg[book2random].img}`;

  ImgSrc.allImg[book1random];
  ImgSrc.allImg[book2random];

}

render();
*/
/*
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let book1random ;
let book2random;
let book3random;
let book4random;
let book5random;
function render() {

  book1random = getRandomNumber(0, galaryArray.length - 1);
  book2random = getRandomNumber(0, galaryArray.length - 1);
  book3random = getRandomNumber(0, galaryArray.length - 1);
  book4random = getRandomNumber(0, galaryArray.length - 1);
  book5random = getRandomNumber(0, galaryArray.length - 1);
  */
/*
  do {
    book1random = getRandomNumber(0, galaryArray.length - 1);
    book2random = getRandomNumber(0, galaryArray.length - 1);
    book3random = getRandomNumber(0, galaryArray.length - 1);
    book4random = getRandomNumber(0, galaryArray.length - 1);
    book5random = getRandomNumber(0, galaryArray.length - 1);
  } while (book1random === book2random || book1random === book3random ||
           book3random === book2random ||
            previousImg.includes(book1random) ||
            previousImg.includes(book2random)||
            previousImg.includes(book3random));

  previousImg=[book1random,book2random,book3random];
  // image1.src = ImgSrc.allImg[image1random].img;
  // image2.src = ImgSrc.allImg[image2random].img;
  // image3.src = ImgSrc.allImg[image3random].img;
*/
/*
book1.src =`./img/${ImgSrc.allImg[book1random].img}` ;
  book2.src = `./img/${ImgSrc.allImg[book2random].img}` ;
  book3.src = `./img/${ImgSrc.allImg[book3random].img}` ;
  book4.src = `./img/${ImgSrc.allImg[book4random].img}` ;
  book5.src = `./img/${ImgSrc.allImg[book5random].img}` ;


  ImgSrc.allImg[book1random];
  ImgSrc.allImg[book2random];
  ImgSrc.allImg[book3random];
  ImgSrc.allImg[book4random];
  ImgSrc.allImg[book5random];

  // console.log(ImgSrc.allImg);
}
render();
*/
/*
sectionOfImg.addEventListener('click', clickOnimg);
function clickOnimg(e) {
  if((e.target.id === 'book1' || e.target.id === 'book2' || e.target.id === 'book3') ) {
    if (e.target.id === 'book1'){
      //ImgSrc.allImg[image1random].timeClike++;
      ImgSrc.allImg[book1random];
      console.log(ImgSrc.allImg);
    }
    else if ( e.target.id === 'book2') {
      // ImgSrc.allImg[image2random].timeClike++;
      ImgSrc.allImg[book2random];
    }
    else if ( e.target.id === 'book3') {
      // ImgSrc.allImg[image3random].timeClike++;
      ImgSrc.allImg[book3random];
    }

    render();

  }
}

*/
/*
const buttonRead = document.getElementById('read');
const paragraph = document.getElementById('paragraph');
const imgHome = document.getElementById('imgHome');
buttonRead.addEventListener('click', clickOnButton);
function clickOnButton() {

  const div = document.createElement('div');
  imgHome.appendChild(div);
  let figure = document.createElement('figure');
  figure.appendChild(div);

  let imgBook = document.createElement('img');

  for (let i = 0; i < galaryArray.length; i++) {


    imgBook.textContent = `${galaryArray[i]}`;
    figure.appendChild(imgBook);

  }
  for (let i = 0; i < galaryArray.length; i++) {
    let figcaption =document.createElement('figcaption');
    figcaption.textContent=`${ImgSrc.allImg[i].name} `;
    imgBook.appendChild(figcaption);


  }
}

clickOnButton();
*/

/////////////////////////////////////////////
/*

let bookCoverArray = [
  'The_War_of_the_Worlds.jpg',
  'the_idiot.webp',
];

let authorArray = [
  'H. G. Wells', 'Fyodor Dostoyevsky'
];
let allImg = [];

//const imgHome = document.getElementById('imgHome');
let book1 = document.getElementById('book1');
let book2 = document.getElementById('book2');

function ImgSrc(srcOfImg,name, author ) {

  this.name = name;
  this.img = `./bookimg/${srcOfImg}`;
  this.author=author;
  ImgSrc.allImg.push(this);
}

//ImgSrc.allImg = [];

//ImgSrc.publishedArray;


//for (let i = 0; i < bookCoverArray.length; i++) {
  //new ImgSrc(bookCoverArray[i].split('.')[0], bookCoverArray[i]);
//}

function render2() {
  book1.src = ImgSrc.allImg[book1].img;
 book2.src = ImgSrc.allImg[book2].img;


 console.log(ImgSrc.allImg);
}

render2();

ImgSrc.prototype.render=function(){
  const imgHome = document.getElementById('imgHome');
  let coverImg = document.createElement('img'),
  coverImg.textContent=this.img;
  imgHome.appendChild(coverImg)
  let titleBook =document.createElement('h2'),
  titleBook.textContent=this.name;
  imgHome.appendChild(titleBook);
  let autorBook=document.createElement('h3');
  authorBook.textContent=this.author;
  imgHome.appendChild(authorBook);

}

let the_idiot = new ImgSrc(book1.src,'The_War_of_the_Worlds','H. G. Wells' );

ImgSrc();
render();

*/

let galaryArray = [
  
  'The-Testaments.jpg',
  'The-Handmaid-Tale.jpg',
  'it.jpg',
  'misery.jpg',
  'Practical-Magic.jpg',
  'The-World-That-We-Knew.jpg',
  'Morality-for-Beautiful-Girls.jpg',
  'The-Miracle-at-Speedy-Motors.jpg',
  'Murder-a-the-Vicarage.jpg',
  'The-Murder-of-Roger-Ackroyd.jpg',


];


let allImg = [];

let previousImg = [];
const sectionOfImg = document.getElementById('imgHome');
let book1 = document.getElementById('book1');
let book2 = document.getElementById('book2');
let book3 = document.getElementById('book3');

function ImgSrc(name, srcOfImg) {
  // ImgSrc.publishedArray.push(this),
  this.name = name;
  // this.img = `./img/${srcOfImg}`;
  this.img = srcOfImg;
  //this.show = show;
  //this.timeClike = timeClike;
  ImgSrc.allImg.push(this);
}

ImgSrc.allImg = [];

//ImgSrc.publishedArray;


for (let i = 0; i < galaryArray.length; i++) {
  new ImgSrc(galaryArray[i].split('.')[0], galaryArray[i]);
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let book1random ;
let book2random;
let book3random;

function render() {


  do {
    book1random = getRandomNumber(0, galaryArray.length - 1);
    book2random = getRandomNumber(0, galaryArray.length - 1);
    book3random = getRandomNumber(0, galaryArray.length - 1);

  } while (book1random === book2random || book1random === book3random ||
           book3random === book2random ||
            previousImg.includes(book1random) ||
            previousImg.includes(book2random)||
            previousImg.includes(book3random));

  previousImg=[book1random,book2random,book3random];



  book1.src =`./img/${ImgSrc.allImg[book1random].img}` ;
  book2.src = `./img/${ImgSrc.allImg[book2random].img}` ;
  book3.src = `./img/${ImgSrc.allImg[book3random].img}` ;



  // console.log(ImgSrc.allImg);
}
render();


sectionOfImg.addEventListener('click', clickOnimg);
function clickOnimg(e) {
  if((e.target.id === 'book1' || e.target.id === 'book2' || e.target.id === 'book3') ) {
    if (e.target.id === 'book1'){
      //ImgSrc.allImg[image1random].timeClike++;
      ImgSrc.allImg[book1random];
      console.log(ImgSrc.allImg);
    }
    else if ( e.target.id === 'book2') {
      // ImgSrc.allImg[image2random].timeClike++;
      ImgSrc.allImg[book2random];
    }
    else if ( e.target.id === 'book3') {
      // ImgSrc.allImg[image3random].timeClike++;
      ImgSrc.allImg[book3random];
    }

    render();

  }
}
////////////////////////////////////////////////////
/*
function Mybook(books, authors ) {

  this.books = books;

  this.authors=authors;

}

const readbutton = document.getElementById('readbutton');
let readbook1 = document.getElementById('readbook1');


readbutton.addEventListener('click', clickOnButton);
function clickOnButton() {
  let titleOfBook =document.createElement('h2');
  titleOfBook.textContent=`${books}`;
  readbook1.appendChild(titleOfBook);

  let authorOfBook=document.createElement('h3');
  authorOfBook.textContent=`${authors}`;
  readbook1.appendChild(authorOfBook);


}
let the_idiot = new Mybook('The_War_of_the_Worlds','H. G. Wells' );


the_idiot.clickOnButton();
*/




function myFunction() {
  let x = document.getElementById('myDIV');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
myFunction();

function myFunction2() {
  let x = document.getElementById('myDIV2');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

myFunction2();


function myFunction3() {
  let x = document.getElementById('myDIV3');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
myFunction3();

function myFunction4() {
  let x = document.getElementById('myDIV4');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

myFunction4();



function myFunction5() {
  let x = document.getElementById('myDIV5');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
myFunction5();

