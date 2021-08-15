
'use strict' ;

let srcimg = [
  'Agatha Christie.jpg',
  'Alexander McCall Smith.jpg',
  'alice hoffman.jpg',
  'Margaret.jpg',
  'Stephen King.jpg',
  'T-Albert.jpg',
  'Jon-Duckett.jpg',
  'H-G-Wells.jpg',
  'Fyodor-Dostoyevsky.jpg'
] ;
let book = [
  'The Murder of roger ackroyd.Murder at the vicarage'
  , 'Morality For Beautiful Girl.The Miracle at Speedy Motors'
  , 'Practical Magic.The world That We Knew'
  , 'The Handmaids Tale.The Testaments'
  , 'IT.Misery'
  , 'Are-We-There.Bully Pill'
  , 'HTML and CSS.JavaScript and JQuery'
  , 'The War of the Worlds.Tono Bungay'
  , 'The Idiot.Alittle Hero'
] ;
let puplish = [
  '2006.2006'
  , '2002.2008'
  , '2003.2019'
  , '1985.2019'
  , '1987.1988'
  , '2015.2021'
  , '2011.2008'
  , '1898.1908'
  , '2013.1849'
] ;

const picOne = document.getElementById('picOne') ;
const picTwo = document.getElementById('picTwo') ;
const picThree = document.getElementById('picThree') ;
const picFour = document.getElementById('picFour') ;
const picFive = document.getElementById('picFive') ;
const picSix = document.getElementById('picSix') ;
const picSeven = document.getElementById('picSeven') ;
const picEight = document.getElementById('picEight') ;
const picNine = document.getElementById('picNine') ;

const pOne = document.getElementById('author1') ;
const pTwo = document.getElementById('author2') ;
const pThree = document.getElementById('author3') ;
const pFour = document.getElementById('author4') ;
const pFive = document.getElementById('author5') ;
const pSix = document.getElementById('author6') ;
const pSeven = document.getElementById('author7') ;
const pEight = document.getElementById('author8') ;
const pNine = document.getElementById('author9') ;

let one = 0 ;
let two = 1 ;
let three = 2 ;
let four = 3 ;
let five = 4 ;
let six = 5 ;
let seven = 6 ;
let eight = 7 ;
let nine = 8 ;

// Random Number For Choosing Random Image :
do
{
  one = randNum( 0 , srcimg.length -1 ) ;
  two = randNum( 0 , srcimg.length -1 ) ;
  three = randNum( 0 , srcimg.length -1 ) ;
  four = randNum( 0 , srcimg.length -1 ) ;
  five = randNum( 0 , srcimg.length -1 ) ;
  six = randNum( 0 , srcimg.length -1 ) ;
  seven = randNum( 0 , srcimg.length -1 ) ;
  eight = randNum( 0 , srcimg.length -1 ) ;
  nine = randNum( 0 , srcimg.length -1 ) ;
} while (one === two || one === three || two === three ||
  one === four || one === five || four === five || five === three
|| two === four || three === four || two === five || four === six
|| one === eight || seven === nine || two === six || five === eight
|| seven === eight || five === seven || two === seven || two === eight
|| five === nine || six === eight || six === nine || eight === nine
|| one === nine || three === six || five === six || two === nine
|| four === eight || one === six || four === eight || three === seven
|| one === seven || six === seven || three === eight || three === nine
|| four === nine ) ;

function author (name , picSrc , book , puplish )
{
  this.name = name ;
  this.pic = picSrc ;
  this.publish = puplish ;
  this.books = book ;
  author.arr.push(this) ;
}

author.arr = [] ;

for (let i = 0 ; i < srcimg.length ; i++ )
{
  new author (srcimg[i].split('.')[0] , srcimg[i] , book[i] , puplish[i] );
}

option() ;
print() ;

//////////////////
const butOne = document.getElementById('but1') ;
const butTwo = document.getElementById('but2') ;
const butThree = document.getElementById('but3') ;
const butFour = document.getElementById('but4') ;
const butFive = document.getElementById('but5') ;
const butSix = document.getElementById('but6') ;
const butSeven = document.getElementById('but7') ;
const butEight = document.getElementById('but8') ;
const butNine = document.getElementById('but9') ;
const optionButton = document.getElementById('buttonOption') ;

butOne.addEventListener('click' , click) ;
butTwo.addEventListener('click' , click) ;
butThree.addEventListener('click' , click) ;
butFour.addEventListener('click' , click) ;
butFive.addEventListener('click' , click) ;
butSix.addEventListener('click' , click) ;
butSeven.addEventListener('click' , click) ;
butEight.addEventListener('click' , click) ;
butNine.addEventListener('click' , click) ;

optionButton.addEventListener('click' , clickOption) ;

///////////////////////////////////////////////////////////////////////////////////
// Functions :

// Function Search Button :
function clickOption(even)
{
  even.preventDefault() ;
  let name = document.getElementById('name') ;
  let picB = document.getElementById('picB') ;
  let info = document.getElementById('info') ;
  let info2 = document.getElementById('info2') ;

  let sel = document.getElementById('soption').value ;
  name.textContent = sel ;
  picB.src = ('./imgAuthor/' + sel + '.jpg') ;
  picB.width = '300' ;
  picB.height = '300' ;
  picB.style = 'border: 2px solid rgb(56, 168, 28) ;' + ' border-radius: 180px ;' + ' padding: 12px;' ;

  for (let i = 0 ; i < srcimg.length ; i++ )
  {
    if (sel === srcimg[i].split('.')[0])
    {
      info.textContent = 'Book 1. ( ' + book[i].split('.')[0] + ' )'
      + ' > Published in : ' + puplish[i].split('.')[0] ;
      info2.textContent = 'Book 2. ( ' + book[i].split('.')[1] + ' )'
      + ' > Published in : ' + puplish[i].split('.')[1] ;
    } }
}
// Function Random Number :
function randNum (min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}
// Function Print Image Randomly :
function print()
{
  picOne.src = ('./imgAuthor/' + author.arr[one].pic) ;
  pOne.textContent = author.arr[one].name ;

  picTwo.src = ('./imgAuthor/' + author.arr[two].pic) ;
  pTwo.textContent = author.arr[two].name ;

  picThree.src = ('./imgAuthor/' + author.arr[three].pic) ;
  pThree.textContent = author.arr[three].name ;

  picFour.src = ('./imgAuthor/' + author.arr[four].pic) ;
  pFour.textContent = author.arr[four].name ;

  picFive.src = ('./imgAuthor/' + author.arr[five].pic) ;
  pFive.textContent = author.arr[five].name ;

  picSix.src = ('./imgAuthor/' + author.arr[six].pic) ;
  pSix.textContent = author.arr[six].name ;

  picSeven.src = ('./imgAuthor/' + author.arr[seven].pic) ;
  pSeven.textContent = author.arr[seven].name ;

  picEight.src = ('./imgAuthor/' + author.arr[eight].pic) ;
  pEight.textContent = author.arr[eight].name ;

  picNine.src = ('./imgAuthor/' + author.arr[nine].pic) ;
  pNine.textContent = author.arr[nine].name ;
}
// Function options Fill The Author Name In option :
function option()
{
  let optio = document.getElementById('soption') ;
  for (let i = 0 ; i < srcimg.length ; i++)
  {
    let op = document.createElement('option') ;
    op.textContent = author.arr[i].name ;
    optio.appendChild(op) ;
  }
}
// Function Clicks On Button 'READ MORE...' :
function click(event)
{
  event.preventDefault() ;
  let butp1 = document.getElementById('butp1') ;
  let butp2 = document.getElementById('butp2') ;
  let butp3 = document.getElementById('butp3') ;
  let butp4 = document.getElementById('butp4') ;
  let butp5 = document.getElementById('butp5') ;
  let butp6 = document.getElementById('butp6') ;
  let butp7 = document.getElementById('butp7') ;
  let butp8 = document.getElementById('butp8') ;
  let butp9 = document.getElementById('butp9') ;

  if (event.target.id === 'but1')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[one].split('.')[0] + ' )';
    butp1.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[one].split('.')[0] ;
    butp1.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[one].split('.')[1] + ' )' ;
    butp1.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[one].split('.')[1] ;
    butp1.appendChild(li4) ;

    butOne.style.display = 'none' ;

  } else if (event.target.id === 'but2')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[two].split('.')[0] + ' )' ;
    butp2.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[two].split('.')[0] ;
    butp2.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[two].split('.')[1] + ' )';
    butp2.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[two].split('.')[1] ;
    butp2.appendChild(li4) ;

    butTwo.style.display = 'none' ;

  } else if (event.target.id === 'but3')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[three].split('.')[0] + ' )' ;
    butp3.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[three].split('.')[0] ;
    butp3.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[three].split('.')[1] + ' )' ;
    butp3.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[three].split('.')[1] ;
    butp3.appendChild(li4) ;

    butThree.style.display = 'none' ;

  } else if (event.target.id === 'but4')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[four].split('.')[0] + ' )' ;
    butp4.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[four].split('.')[0] ;
    butp4.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[four].split('.')[1] + ' )' ;
    butp4.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[four].split('.')[1] ;
    butp4.appendChild(li4) ;

    butFour.style.display = 'none' ;

  } else if (event.target.id === 'but5')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[five].split('.')[0] + ' )' ;
    butp5.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[five].split('.')[0] ;
    butp5.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[five].split('.')[1] + ' )' ;
    butp5.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[five].split('.')[1] ;
    butp5.appendChild(li4) ;

    butFive.style.display = 'none' ;
  }else if (event.target.id === 'but6')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book ( ' + book[six].split('.')[0] + ' )' ;
    butp6.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[six].split('.')[0] ;
    butp6.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[six].split('.')[1] + ' )' ;
    butp6.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[six].split('.')[1] ;
    butp6.appendChild(li4) ;
    butSix.style.display = 'none' ;
  }else if (event.target.id === 'but7')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book ( ' + book[seven].split('.')[0] + ' )' ;
    butp7.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[seven].split('.')[0] ;
    butp7.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[seven].split('.')[1] + ' )' ;
    butp7.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[seven].split('.')[1] ;
    butp7.appendChild(li4) ;
    butSeven.style.display = 'none' ;
  }else if (event.target.id === 'but8')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book ( ' + book[eight].split('.')[0] + ' )' ;
    butp8.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[eight].split('.')[0] ;
    butp8.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[eight].split('.')[1] + ' )' ;
    butp8.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[eight].split('.')[1] ;
    butp8.appendChild(li4) ;
    butEight.style.display = 'none' ;
  }else if (event.target.id === 'but9')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book ( ' + book[nine].split('.')[0] + ' )' ;
    butp9.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[nine].split('.')[0] ;
    butp9.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[nine].split('.')[1] + ' )' ;
    butp9.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[nine].split('.')[1] ;
    butp9.appendChild(li4) ;
    butNine.style.display = 'none' ;
  }
}

