
var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");

var createNewTask = function(task){
console.log("Creating task...");

//SET UP THE NEW LIST ITEM
var listItem = document.createElement("li"); 
var checkBox = document.createElement("input");
var label = document.createElement("label");


label.innerText = task;

checkBox.type = "checkbox";

listItem.appendChild(checkBox);
listItem.appendChild(label);
//EVERYTHING PUT TOGETHER
return listItem;  

};

//ADD THE NEW TASK INTO ACTUAL INCOMPLETE LIST
var addTask = function(){
console.log("Adding task...");
//FOR CLARITY, GRAB THE INPUTTED TEXT AND STORE IT IN A VAR
var listItem = createNewTask(newTask.value);
//ADD THE NEW LIST ITEM TO LIST
toDoUl.appendChild(listItem); 
//CLEAR THE INPUT
newTask.value="";

//BIND THE NEW LIST ITEM TO THE INCOMPLETE LIST
bindIncompleteItems(listItem, completeTask);

};

var completeTask = function(){

//GRAB THE CHECKBOX'S PARENT ELEMENT, THE LI IT'S IN
var listItem = this.parentNode;

//CREATE AND INSERT THE DELETE BUTTON
var deleteBtn = document.createElement("button"); // <button>
deleteBtn.innerText ="Delete"; 
deleteBtn.className = "delete";
listItem.appendChild(deleteBtn);

//SELECT THE CHECKBOX FROM THE COMPLETED CHECKBOX AND REMOVE IT
var checkBox = listItem.querySelector("input[type=checkbox]");
checkBox.remove();

//PLACE IT INSIDE THE COMPLETED LIST
completeUl.appendChild(listItem); 

//BIND THE NEW COMPLETED LIST
bindCompleteItems(listItem, deleteTask);

};

//DELETE TASK FUNCTIONS
var deleteTask = function(){
console.log("Deleting task...");

var listItem = this.parentNode;
var ul = listItem.parentNode;

ul.removeChild(listItem);

};



var bindIncompleteItems = function(taskItem, checkBoxClick){  
console.log("Binding the incomplete list...");


var checkBox = taskItem.querySelector("input[type=checkbox]");

checkBox.onchange = checkBoxClick;  
}; 


var bindCompleteItems = function(taskItem, deleteButtonPress){
console.log("Binding the complete list...");

var deleteButton = taskItem.querySelector(".delete");

deleteButton.onclick = deleteButtonPress;

};


for(var i=0; i < toDoUl.children.length; i++) {
bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(var i=0; i < completeUl.children.length; i++) {
bindCompleteItems(completeUl.children[i], deleteTask);
}


addTaskBtn.addEventListener("click", addTask);


