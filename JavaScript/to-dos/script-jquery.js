
$(document).ready(function(){

  const todoInput = $('#input-description');
  const addButton = $('#add-button');
  const errorText = $('#error-output');
  const activeList = $('#active-list');
  const completedList = $('#completed-list');
  
  itemCount = 0;
  
  addButton.click(() => {
    const description = todoInput.val().trim();
  
    if (!description) {
      errorText.text('Please provide a description of the to-do item');
      return
    }
  
    errorText.innerText = '';
    todoInput.value = '';
    itemCount++;
  
    const newItem = document.createElement('li');
    newItem.innerText = description;
    newItem.id = itemCount;
  
    generateButton(newItem, 'Complete', function() {
      completedList.append(this.parentElement);
    });
    generateButton(newItem, 'Delete', function() {
      this.parentElement.parentElement.removeChild(this.parentElement)
    });
  
    activeList.append(newItem);
  })
  
  function generateButton(item, text, handleClick) {
    const button = document.createElement('button');
    button.innerText = text;
    button.id = `${item.id}-${text.toLowerCase()}-button`;
    button.addEventListener('click', handleClick);
    item.appendChild(button);
  }
});
