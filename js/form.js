let getdiv = document.getElementById('container');
let getform = document.getElementById('part');
let getpar = document.getElementById('par');
let getimg = document.getElementById('img');
let geta = document.getElementById('se');
let getget = document.getElementById('get');

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

function fx(){
  window.location.reload();
}
function render (x,firstName, lastName ){

  if (x === 'biography'){
    getget.style=" box-shadow: 25px 25px 30px #A19882;padding-top:50px;max-width: 600px;font-family:arial;height:570px;width: 500PX;padding-left: 100px;margin-bottom: 30px;    background-color: #9E7777;    border-radius: 5px;";
    getimg.style="height: 450px;width: 400px;";
    swal({
      title: `Dear ${firstName}  ${lastName}`,
      text: ' we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you',
      icon: 'success',
    });
    getpar.innerHTML='Book Name: The Handmaid Tale...<br> <br> Writen By: Margaret Atwood ... <br> <br> Puplished in:  1985';
    geta.href = './pageofbooks/The-Handmaid.html';
    getimg.src = './img/The-Handmaid-Tale.jpg';
  }

  if (x === 'novel'){

    getget.style=" box-shadow: 25px 25px 30px #A19882;padding-top:50px;max-width: 600px;font-family:arial;height:570px;width: 500PX;padding-left: 100px;margin-bottom: 30px;    background-color: #9E7777;    border-radius: 5px;";
    getimg.style="height: 450px;width: 400px;";

    swal({
      title: `Dear ${firstName}  ${lastName}`,
      text: ' we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you',
      icon: 'success',
    });
    getpar.innerHTML='Book Name:Practical Magic... <br> <br>Writen By: Alice Hoffman ... <br> <br> Puplished in:  2003';
    geta.href = './pageofbooks/Practical-Magic.html';
    getimg.src = './img/Practical-Magic.jpg';
  }
  if (x === 'story'){
    getget.style=" box-shadow: 25px 25px 30px #A19882;padding-top:50px;max-width: 600px;font-family:arial;height:570px;width: 500PX;padding-left: 100px;margin-bottom: 30px;    background-color: #9E7777;    border-radius: 5px;";
    getimg.style="height: 450px;width: 400px;";

    swal({
      title: `Dear ${firstName}  ${lastName}`,
      text: ' we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you',
      icon: 'success', });
    getpar.innerHTML =' Book Name: The World That We Knew...<br> <br> Writen By: Alice Hoffman ...<br> <br> Puplished in : 2019';
    geta.href = './pageofbooks/The-World.html';
    getimg.src = './img/The-World-That-We-Knew.jpg';
  }
  if (x === 'crime'){
    getget.style=" box-shadow: 25px 25px 30px #A19882;padding-top:50px;max-width: 600px;font-family:arial;height:570px;width: 500PX;padding-left: 100px;margin-bottom: 30px;    background-color: #9E7777;    border-radius: 5px;";
    getimg.style="height: 450px;width: 400px;";

    swal({
      title: `Dear ${firstName}  ${lastName}`,
      text: ' we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you',
      icon: 'success', });
    getpar.innerHTML=' Book Name: The Murder of Roger Ackroyd...<br> <br>Writen By: Agatha Christie ...<br> <br> Puplished in:  2006';
    geta.href = './pageofbooks/Murder.html';
    getimg.src = './img/The-Murder-of-Roger-Ackroyd.jpg';
  }

  if (x === 'challenge'){
    getget.style=" box-shadow: 25px 25px 30px #A19882;padding-top:50px;max-width: 600px;font-family:arial;height:570px;width: 500PX;padding-left: 100px;margin-bottom: 30px;    background-color: #9E7777;    border-radius: 5px;";
    getimg.style="height: 450px;width: 400px;";

    swal({
      title: `Dear ${firstName}  ${lastName}`,
      text: ' we are so excited that you are interested in this Reading topic  so its our Pleasure  to Recommend this book for you',
      icon: 'success', });
    getpar.innerHTML= ' Book Name: The Miracle at Speedy Motors...<br> <br> Writen By: Alexander McCall Smith ...<br> <br>Puplished in:  1985';
    geta.href = './pageofbooks/The-Miracle.html';
    getimg.src = './img/The-Miracle-at-Speedy-Motors.jpg';
  }

}
