let galaryArray = [

  'the_idiot.jpg',
  'ARE-WE-THERE.jpg',
  'HTML and CSS.jpg',
  'The-Testaments.jpg',
  'The-Handmaid-Tale.jpg',
  'IT.jpg',
  'Misery.jpg',
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
let book4 = document.getElementById('book4');
let book5 = document.getElementById('book5');

function ImgSrc(name, srcOfImg) {
  this.name = name;
  this.img = srcOfImg;
  ImgSrc.allImg.push(this);
}

ImgSrc.allImg = [];

for (let i = 0; i < galaryArray.length; i++) {
  new ImgSrc(galaryArray[i].split('.')[0], galaryArray[i]);
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let book1random ;
let book2random;
let book3random;
let book4random;
let book5random;
//let book6random;
//let book7random;

function render() {


  do {
    book1random = getRandomNumber(0, galaryArray.length - 1);
    book2random = getRandomNumber(0, galaryArray.length - 1);
    book3random = getRandomNumber(0, galaryArray.length - 1);
    book4random = getRandomNumber(0, galaryArray.length - 1);
    book5random = getRandomNumber(0, galaryArray.length - 1);
    //book6random = getRandomNumber(0, galaryArray.length - 1);
    //book7random = getRandomNumber(0, galaryArray.length - 1);

  } while (book1random === book2random || book1random === book3random ||
           book1random === book4random ||book1random === book5random ||
           book2random === book3random ||book2random === book4random ||
           book2random === book5random ||
           
           book3random === book4random ||
           book3random === book5random ||book4random === book5random ||
           

            previousImg.includes(book1random) ||
            previousImg.includes(book2random)||
            previousImg.includes(book4random)||
            previousImg.includes(book5random)||
            previousImg.includes(book3random));

  previousImg=[book1random,book2random,book3random,book4random,book5random];



  book1.src =`./img/${ImgSrc.allImg[book1random].img}` ;
  book2.src = `./img/${ImgSrc.allImg[book2random].img}` ;
  book3.src = `./img/${ImgSrc.allImg[book3random].img}` ;
  book4.src = `./img/${ImgSrc.allImg[book4random].img}` ;
  book5.src = `./img/${ImgSrc.allImg[book5random].img}` ;
  //book6.src = `./img/${ImgSrc.allImg[book6random].img}` ;
  //book7.src = `./img/${ImgSrc.allImg[book7random].img}` ;
  //e.target.id === 'book6' || e.target.id === 'book7'

}
render();
console.log(render);

sectionOfImg.addEventListener('click', clickOnimg);
function clickOnimg(e) {
  if((e.target.id === 'book1' || e.target.id === 'book2' ||
   e.target.id === 'book3'|| e.target.id === 'book4' ||
    e.target.id === 'book5') )
  {
    if (e.target.id === 'book1'){
      ImgSrc.allImg[book1random];
      console.log(ImgSrc.allImg);
    }
    else if ( e.target.id === 'book2') {
      ImgSrc.allImg[book2random];
    }
    else if ( e.target.id === 'book3') {
      ImgSrc.allImg[book3random];
    }
    else if ( e.target.id === 'book4') {
      ImgSrc.allImg[book4random];
    }
    else if ( e.target.id === 'book5') {
      ImgSrc.allImg[book5random];
    }
    //else if ( e.target.id === 'book6') {
    //  ImgSrc.allImg[book6random];
    //}
    //else if ( e.target.id === 'book7') {
    // ImgSrc.allImg[book7random];
    //}

    render();

  }
}




