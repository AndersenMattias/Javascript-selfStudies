// form / table
let form = document.getElementById('form');
let table = document.getElementById('table');
let tableBody = document.querySelector('tbody');

// form values
let name = document.getElementById('name');
let age = document.getElementById('age');
let telephone = document.getElementById('telephone');
let email = document.getElementById('email');




function onAddContact(e) {
  e.preventDefault();
  tableBody.innerHTML += `
    <tr>
      <td>${form.toDo.value}</td>
      <td><button class="btn-edit">Edit</button></td>
      <td><button class="btn-delete">Delete</button></td>
    <tr>
  `;
}

function init() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())  
  .then((data) => {
    
    
    for(let i = 0; i < data.length; i++) { 
      
      tableBody.innerHTML += `      
      <tr>
        <td>userId: ${data[i].userId}</td>
        <td>id: ${data[i].id}</td>
        <td>title: ${data[i].title}</td>             
        <td>Completed: ${data[i].completed}</td>            
        <td><button class="btn-delete">Delete</button></td>
      <tr>
    `; 
    }

  });
}

// show contacts
// function displayContacts() {
//   table.style.display = 'block';
// }

// EventListeners
form.addEventListener('submit', onAddContact);

// Delete btn for contact
tableBody.addEventListener('click', (event) => {
  // remove contact -->
  const button = event.target;
  const tr = button.parentNode;
  if (event.target.classList.contains('btn-delete')) {
    if (confirm('Do you really want to remove this contact?')) {
      button.closest('tr').remove();
    } else {
      return false;
    }
  }

  // edit contact -->
  if ('TD' === event.target.tagName) {
    let value = event.target.textContent;

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', value);

    input.addEventListener('blur', (event) => {
      event.target.parentNode.textContent = event.target.value;
    });

    event.target.textContent = '';
    event.target.appendChild(input);
    input.select();
  }
});

init();



// GET API 
// fetch(apiURL).then((response) => response.json().then((json) => console.log(json)));



