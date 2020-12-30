let tableBody = document.querySelector('tbody');

function init() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())  
  .then((data) => {    
    
    for(let i = 0; i < 30; i++) {     
      console.log(data[i]);  
      tableBody.innerHTML += `      
      <td class="${data[i].completed === true ? 'completed' : 'active'}"><b>userId:</b>  ${data[i].userId}</td>
      <td class="${data[i].completed === true ? 'completed' : 'active'}"><b>id:</b> ${data[i].id}</td>
      <td class="${data[i].completed === true ? 'completed' : 'active'}"><b>title:</b> ${data[i].title}</td>             
      <td class="${data[i].completed === true ? 'completed' : 'active'}"><b>Completed:</b> ${data[i].completed}</td>       
      <td><button class="btn-done">Done!</button></td>         
      <td><button class="btn-delete">Delete</button></td>      
  `;             

  }
  
});

}

// Delete btn
tableBody.addEventListener('click', (event) => {
  const button = event.target;

  if (event.target.classList.contains('btn-delete')) {
    if (confirm('Do you really want to remove this contact?')) {
      button.closest('tr').remove();
    } else {
      return false;
    }
  }

  // edit value
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



