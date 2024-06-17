document.getElementById('add-list').addEventListener('click', function() {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.textContent = 'Новый элемент';
  li.addEventListener('click', handleListClick);
  ul.appendChild(li);
  document.getElementById('list-container').appendChild(ul);
});

function handleListClick(event) {
  const action = document.querySelector('input[name="action"]:checked').value;
  const textInput = document.getElementById('text-input').value;
  const li = event.target;

  switch (action) {
      case 'add-end':
          const newLi = document.createElement('li');
          newLi.textContent = textInput || 'Новый элемент';
          newLi.addEventListener('click', handleListClick);
          li.parentElement.appendChild(newLi);
          break;
      case 'insert':
          const insertLi = document.createElement('li');
          insertLi.textContent = textInput || 'Новый элемент';
          insertLi.addEventListener('click', handleListClick);
          li.parentElement.insertBefore(insertLi, li);
          break;
      case 'edit':
          li.textContent = textInput;
          break;
      case 'add-sublist':
          if (!li.querySelector('ul')) {
              const subUl = document.createElement('ul');
              const subLi = document.createElement('li');
              subLi.textContent = textInput || 'Новый элемент';
              subLi.addEventListener('click', handleListClick);
              subUl.appendChild(subLi);
              li.appendChild(subUl);
          }
          break;
      case 'delete':
          li.remove();
          break;
  }
}
