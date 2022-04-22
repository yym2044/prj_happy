const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDos = [];

const TODO_KEY = "todos";

function saveToDos(){
	localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function handleToDoDelete(event){
	const li = event.target.parentElement;
	
	li.remove();
	
}


function paintToDo(newToDo){

	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	
	button.innerText = "X";
	
	li.appendChild(span);
	li.appendChild(button);
	
	
	span.innerText = newToDo;
	
	toDoList.appendChild(li);
	
	button.addEventListener("click", handleToDoDelete);
		
	
}


function handleToDoSubmit(event){
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	paintToDo(newToDo);
	toDos.push(newToDo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODO_KEY);
console.log(savedToDos);
const parsedToDos = JSON.parse(savedToDos);
console.log(parsedToDos);
parsedToDos.forEach((item) => console.log("hello", item));

