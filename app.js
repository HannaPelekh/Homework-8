const inputE = document.getElementById('input');
const buttonE = document.getElementById('button');
const toDoListE = document.getElementById('todo-list');
const containerE = document.getElementById('container');

buttonE.addEventListener('click', onAddToDo);
toDoListE.addEventListener('click', onToDoClic);

function onAddToDo() {
  const text = inputE.value;
  const element = `<div name = "todo" class="items">
  <span name = "delete" class="delete"><i class="fa-solid fa-xmark"></i></span>
  ${text} </div>`;
  const error = 'Please add some text to todo'  
  if(!text.trim() || !text.trim().lenght>3) {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = error;
    containerE.append(div);
    setTimeout(() => div.remove(),2000);
    return;
  }
  toDoListE.innerHTML += element;
  inputE.value = '';
  inputE.focus();  
}
function onToDoClic(e){
  [...e.target.attributes].forEach((el) => {
    if(el.value === 'delete'){
      onDelete(e.target);
    }
    console.log(e)
    if(el.value === 'todo'){
      compliteToDo (e.target);
    }
  });
  
}
function compliteToDo (elem){
  elem.classList.toggle('green');
}
function onDelete(elem){  
  elem.closest('.items').remove();
}
