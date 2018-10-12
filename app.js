// const input = document.getElementById("input");
// const addBtn = document.getElementById("btn");
// const ul = document.getElementById('incomplete-tasks');
// const secondUl = document.getElementById("completed-tasks");


// const deleteTask = (e) => {
//     console.log(e.target.parentNode)
//     e.target.parentNode.parentNode.removeChild(e.target.parentNode)
// }

// const moveItem = (e) => {
//     console.log(e.target.parentNode);
//     secondUl.appendChild(e.target.parentNode)
//     e.target.disabled = true;
//     e.target.parentNode.style.textDecoration = 'line-through'
// }

// const addTask = () => {
//     let li = document.createElement('li');
//     let deleteBtn = document.createElement('button');
//     let checkBox = document.createElement("input")
//     checkBox.setAttribute('type', 'checkbox');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     deleteBtn.textContent = "Delete";
//     deleteBtn.onclick = deleteTask;
//     li.appendChild(deleteBtn);
//     li.appendChild(checkBox);
//     checkBox.onclick = moveItem;
//     input.value = '';
// }



// addBtn.addEventListener('click', addTask);


let taskInput = $("#new-task");
let addBtn = $("#button");
let incompleteTaskHolder = $("#incomplete-tasks");
let completedTaskHolder = $("#completed-tasks");

let deleteTask = function(e){
    console.log(e.target.parentNode);
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}


let moveItem = function (e){
    console.log(e.target.parentNode);
    completedTaskHolder.appendChild(e.target.parentNode);
    e.target.disabled = true;
    e.target.parentNode.style.textDecoration = "line-through";
}

let addTask = function (taskString){
    let listItem = $("<li>");
    let deleteBtn = $("<button>");
    let checkBox = $("<input>");
    let label = $("<label>");
    
    deleteBtn.text("Delete");
    deleteBtn.click(deleteTask);

    listItem.append(deleteBtn);
    listItem.append(checkBox);
    listItem.append(label);

    checkBox.click(moveItem);
    taskInput.val("");

    label.html(taskString);
    checkBox.is("checkbox");
    incompleteTaskHolder.append(listItem)
}

$("#button").click(addTask);

// function addTask(){
//     listItem = createNewTaskElement(taskInput.value)
//     incompleteTaskHolder.appendChild(listItem,taskCompleted);
//     taskInput.value = "";
// }
// function createNewTaskElement(taskString){
//     let listItem = document.createElement('li');
//     let checkBox = document.createElement('input');
//     let label = document.createElement('label');
    

//         label.innerText = taskString;
//         checkBox.type = "checkbox";
        
        

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);
//     listItem.appendChild(deleteButton);
    
//     return listItem;