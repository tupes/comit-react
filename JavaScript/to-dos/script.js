
const todoInput = document.getElementById('input-description');
const addButton = document.getElementById('add-button');
const errorText = document.getElementById('error-output');
const activeList = document.getElementById('active-list');
const completedList = document.getElementById('completed-list');

itemCount = 0;

addButton.addEventListener('click', () => {
  const description = todoInput.value.trim();

  if (!description) {
    errorText.innerText = 'Please provide a description of the to-do item';
    return
  }

  errorText.innerText = '';
  todoInput.value = '';
  itemCount++;

  const newItem = document.createElement('li');
  newItem.innerText = description;
  newItem.id = itemCount;

  generateButton(newItem, 'Complete', function() {
    completedList.appendChild(this.parentElement);
  });
  generateButton(newItem, 'Delete', function() {
    this.parentElement.parentElement.removeChild(this.parentElement)
  });

  activeList.appendChild(newItem);
})

function generateButton(item, text, handleClick) {
  const button = document.createElement('button');
  button.innerText = text;
  button.id = `${item.id}-${text.toLowerCase()}-button`;
  button.addEventListener('click', handleClick);
  item.appendChild(button);
}