const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageDisplay = document.getElementById("message");

submitButton.addEventListener("click", addTask);
tasks.addEventListener("click", handleTaskClick);

displayMessage("Azi am sa nu ceva de facut !");

const newTask = document.getElementById("newTask");

function addTask() {
  if (inputIsValid(newTask.value)) {
    tasks.innerHTML +=
      `<div class="d-flex bd-highligh">
       <li class="lista mt-3 list-group-item list-group-item-primary p-2 flex-grow-1 bd-highlight">` +
      newTask.value +
      `</li><button class="lista buttonDelete bd-highlight mt-3" onclick="Delete(this);">Delete</button></div>`;
    newTask.value = "";
    displayMessage("Azi chiar am ceva de facut!");
  } else {
    displayMessage("Te rugam completeaza spatiul gol !");
  }
}

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}

function displayMessage(message) {
  messageDisplay.innerText = message;
  //messageDisplay.style.visibility = "visible"; si sus as fi pus hidden
}
function handleTaskClick(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

const clearButton = document.getElementById("btnClear");
clearButton.addEventListener("click", deleteList);

function deleteList() {
  const tasksList = tasks.getElementsByClassName("lista");
  while (tasksList.length > 0) {
    tasksList[0].parentNode.removeChild(tasksList[0]);
  }
}
function Delete(event) {
  event.parentNode.parentNode.removeChild(event.parentNode);
}
