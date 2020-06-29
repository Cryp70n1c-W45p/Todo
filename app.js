const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search');

let template = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

  list.innerHTML += html;
    
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    let todo =  e.target.add.value.trim().toLowerCase();
    if(todo.length){
        template(todo)
        addForm.reset()
    }
})


//Delete

list.addEventListener('click',e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        
        
    }
})




//Search

let filterTodo = term => {
    Array.from(list.children).filter(todo => !todo.textContent.includes(term)).forEach(item => item.classList.add('filter'))    
    Array.from(list.children).filter(todo => todo.textContent.includes(term)).forEach(item => item.classList.remove('filter'))    


}



search.addEventListener('keyup', e => {
    let term = e.target.value.toLowerCase();
    filterTodo(term)
    
})