const inputE = document.getElementById('input');
const buttonE = document.getElementById('button');
const toDoListE = document.getElementById('todo-list');
const containerE = document.getElementById('container');

buttonE.addEventListener('click', onAddToDo);

function onAddToDo() {
  const text = inputE.value;
  const error = 'Please add some text to todo'
  if(!text.trim()) {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = error;
    containerE.append(div);
    setTimeout(() => div.remove(),1000);
    return;
  }
  const item = document.createElement('li');
  item.textContent = text;
  toDoListE.append(item);
  inputE.value = '';
  inputE.focus();
}