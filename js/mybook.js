const form = document.querySelector('#suggestForm');
const input = document.querySelector('input');
const main = document.querySelector('.main');
const ul = document.querySelector('#suggestedList');
let suggestionarray = localStorage.suggestionarray ? JSON.parse(localStorage.suggestionarray) : [];

function createLi() {
 
  //return li;
  ul.innerHTML = '';

  for(let i=0; i< suggestionarray.length; i++){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = suggestionarray[i];
    const label = document.createElement('label');
    label.textContent = 'available';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
  
    li.appendChild(span);
    li.appendChild(label);
    label.appendChild(checkbox);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    ul.appendChild(li)
  
  }
}

createLi()

form.addEventListener('submit', (event) => {
  event.preventDefault();

 // const li = createLi();

  if (input.value === '') {
  } else {
    //ul.appendChild(li);
    
    suggestionarray = JSON.parse(localStorage.getItem("suggestionarray"))
    if (suggestionarray) {
      console.log(suggestionarray);
      suggestionarray.push(input.value)
      localStorage.setItem("suggestionarray", JSON.stringify(suggestionarray));
    }
    else {
      suggestionarray = []
      suggestionarray.push(input.value)
      localStorage.setItem("suggestionarray", JSON.stringify(suggestionarray));

    }
    createLi()
  }
});



ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if (checked) {
    li.className = 'checkedd';
  } else {
    li.className = '';
  }
});

ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if (button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});

const div = document.createElement('div');
div.className = 'showHide';
const filterLabel = document.createElement('label');
filterLabel.textContent = 'Hide those that are not available';
const filterCheckbox = document.createElement('input');
filterCheckbox.type = 'checkbox';

div.appendChild(filterLabel);
filterLabel.appendChild(filterCheckbox);
main.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  const lis = ul.children;

  if (isChecked) {
    for (let i = 0; i < lis.length; i++) {
      var li = lis[i];

      if (li.className === 'checkedd') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < lis.length; i++) {
      var li = lis[i];
      li.style.display = '';
    }
  }
});