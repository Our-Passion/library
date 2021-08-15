'use strict';

let bookImages = [

'IT.jpg',
'Misery.jpg',
'Morality-for-Beautiful-Girls.jpg',
'The-Miracle-at-Speedy-Motors.jpg',
'Murder-a-the-Vicarage.jpg',
'The-Murder-of-Roger-Ackroyd.jpg',
'Practical-Magic.jpg',
'The-World-That-We-Knew.jpg',
'The-Handmaid-Tale.jpg',
'The-Testaments.jpg',


];

let authorImage = [


    'Stephen King.jpg',
    'Stephen King.jpg',
    'Alexander McCall Smith.jpg',
    'Alexander McCall Smith.jpg',
    'Agatha Christie.jpg',
    'Agatha Christie.jpg',
    'Alice Hoffman.jpg',
    'Alice Hoffman.jpg',
    'Margaret.jpg',
    'Margaret.jpg',

]


let finalArray = [];

let sourceBook =document.createElement('img')
let sourceAuthor=document.createElement('img')
let addSection = document.createElement('div').setAttribute('class','rating')
let star1 =document.createElement('i')
star1.setAttribute('class','rating__star far fa-star')
star1.setAttribute('id','one')
let star2 =document.createElement('i')
star2.setAttribute('class','rating__star far fa-star')
star2.setAttribute('id','two')
let star3 =document.createElement('i')
star3.setAttribute('class','rating__star far fa-star')
star3.setAttribute('id','three')
let star4 =document.createElement('i')
star4.setAttribute('class','rating__star far fa-star')
star4.setAttribute('id','four')
let star5 =document.createElement('i')
star5.setAttribute('class','rating__star far fa-star')
star5.setAttribute('id','five')











    
   
    
    
function BooksTable (cover , authorImg ,autherName, title,addSection){

       this.coverOfBook =cover ;
       this.imageOfAuthor = authorImg;
       this.nameOfAuther = autherName;
       this.title =title ;
     this .addSection =addSection

       this.newSplitArray =[];
       finalArray.push(this);
}








for (let i = 0 ; i<bookImages.length;i++){

new BooksTable(sourceBook.src,sourceAuthor.src, authorImage[i].split('.')[0],bookImages[i].split('.')[0],star1)

}









BooksTable.prototype.getSpliteArray = function(i) {
    
    
    sourceBook.src= '/img/' + bookImages[i] 
     sourceAuthor.src = '/imgAuthor/'+ authorImage[i]
     


     
this.newSplitArray.push(sourceBook.src,sourceAuthor.src, authorImage[i].split('.')[0],bookImages[i].split('.')[0],star2)
console.log(finalArray)
}
let parent = document.getElementById("myTable");
      let table = document.createElement("table");
      parent.appendChild(table);


function makeHeader() {
        let headerRow = document.createElement('tr');
        table.appendChild(headerRow);

        let firstTh = document.createElement('th');
        firstTh.textContent = 'COVER OF BOOK  ';
        headerRow.appendChild(firstTh);
         
        let secondTh = document.createElement('th');
        secondTh.textContent = 'AUTHOR IMAGE  ';
        headerRow.appendChild(secondTh);

        let thirdTh = document.createElement('th');
        thirdTh.textContent = 'AUTHER NAME  ';
        headerRow.appendChild(thirdTh);

        let fourthTh = document.createElement('th');
        fourthTh.textContent = 'BOOK TITLE  ';
        headerRow.appendChild(fourthTh);

        let fifthTh = document.createElement('th');
        fifthTh.textContent = 'RATE  ';
        headerRow.appendChild(fifthTh);
        


       

}

BooksTable.prototype.makeCells = function(j) {

let dataRow = document.createElement('tr');
         table.appendChild(dataRow); 

        


        for (let i = 0; i < 2; i++) {
            let tdElement = document.createElement('td');
            let img = document.createElement('img')
            img.src = this.newSplitArray[i];
            dataRow.appendChild(tdElement);
           tdElement.appendChild(img);
}


for (let i = 2; i < 4; i++) {



    let tdElement = document.createElement('td');
    tdElement.textContent=this.newSplitArray[i]
    dataRow.appendChild(tdElement);
   

}



let tdElement = document.createElement('td');
tdElement.textContent=this.newSplitArray[4]
dataRow.appendChild(tdElement);








     


    
   


}



makeHeader();


for (let i = 0; i < finalArray.length; i++) {
    
    finalArray[i].getSpliteArray(i);
    finalArray[i].makeCells(i);
}




let ratingStars = [ document.getElementsByClassName('rating__star far fa-star')];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    

    stars.map((star) => {
        star.onclick = () => {
           i = stars.indexOf(star);
  
           if (star.className===starClassInactive) {        
              for (i; i >= 0; --i) stars[i].className = starClassActive;
           } else {
              for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
           }
        };
     });
    }
console.log(addSection)