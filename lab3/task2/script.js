const container = document.getElementById('list');

function createTask() {
    let newTask = document.createElement('div');
    newTask.innerHTML = `
    <div class="right-part">
        <input type="checkbox" class="checkbox">
        <div class="task">${getValue()}</div>
    </div>
    <div class="delete"">
        <img class = "delete-img" src="img/delete.png">
    </div>
    `;
    newTask.classList.add('elem');
    container.insertBefore(newTask, container.firstChild);
    container.style.border = '1px solid rgb(212, 212, 212)';
    addDeleteListener(newTask.querySelector('.delete-img'));
    addCheckListener(newTask.querySelector('.checkbox'));
}

function getValue(){
    let value = document.getElementById("text-input").value;
    clearInput();
    if(value == '') return 'New Task';
    return value;
}

function clearInput(){
    document.getElementById('text-input').value = '';
}

function addDeleteListener(btn){
    btn.addEventListener('click', 
    event => event.target.parentElement.parentElement.remove());
}

function addCheckListener(checkbox){
    checkbox.addEventListener('change', function(event){
        let taskText = checkbox.nextElementSibling;
        if(event.target.checked){
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    })
}

document.getElementById('text-input').addEventListener('keypress', function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        createTask();
    }
})