let getdiv = document.getElementById('container');
let getform = document.getElementById('part');
let getpar = document.getElementById('par');
let getimg = document.getElementById('img');
let geta = document.getElementById('se');

console.log(getimg);

getform.addEventListener('submit', showRec);

function showRec (event){
  event.preventDefault();
  console.log(event);
  let firstName = event.target.name.value;
  let lastName = event.target.name2.value;
  let age = parseInt(event.target.age.value);
  let gender = event.target.gen.value;
  let category = event.target.cat.value;

  render (category, firstName, lastName);
}

function render (x,firstName, lastName ){

  if (x === 'biography'){
    swal({
      title: `Dear ${firstName}  ${lastName}`,
      text: ' we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you',
      icon: 'success',
    });
    const node = document.createTextNode(' Book Name: The Handmaid Tale... Writen By: Margaret Atwood ... and Puplished: in 1985');
    getpar.appendChild(node);
    geta.href = './pageofbooks/The-Handmaid.html';
    getimg.src = './img/The-Handmaid-Tale.jpg';
  }

  if (x === 'novel'){
    swal(`Dear ${firstName}  ${lastName}   we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you`);
    const node = document.createTextNode(' Book Name:Practical Magic... Writen By: Alice Hoffman ... and Puplished: in 2003');
    getpar.appendChild(node);
    geta.href = './pageofbooks/Practical-Magic.html';
    getimg.src = './img/Practical-Magic.jpg';
  }
  if (x === 'story'){
    swal(`Dear ${firstName}  ${lastName}   we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you`);
    const node = document.createTextNode(' Book Name: The World That We Knew... Writen By: Alice Hoffman ... and Puplished: in 2019');
    getpar.appendChild(node);
    geta.href = './pageofbooks/The-World.html';
    getimg.src = './img/The-World-That-We-Knew.jpg';
  }
  if (x === 'crime'){
    swal(`Dear ${firstName}  ${lastName}   we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you`);
    const node = document.createTextNode(' Book Name: The Murder of Roger Ackroyd... Writen By: Agatha Christie ... and Puplished: in 2006');
    getpar.appendChild(node);
    geta.href = './pageofbooks/Murder.html';
    getimg.src = './img/The-Murder-of-Roger-Ackroyd.jpg';
  }

  if (x === 'challenge'){
    swal(`Dear ${firstName}  ${lastName}   we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you`);
    const node = document.createTextNode(' Book Name: The Miracle at Speedy Motors... Writen By: Alexander McCall Smith ... and Puplished: in 1985');
    getpar.appendChild(node);
    geta.href = './pageofbooks/The-Miracle.html';
    getimg.src = './img/The-Miracle-at-Speedy-Motors.jpg';
  }

}
