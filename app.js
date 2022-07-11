const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageDisplay = document.getElementById("message");

submitButton.addEventListener("click", addTask);
tasks.addEventListener("click", handleTaskClick);

displayMessage("Azi am sa nu ceva de facut ?");

const newTask = document.getElementById("newTask");
const rezult1 = document.getElementById("rezult1");

function addTask() {
  if (inputIsValid(newTask.value)) {
    list.push(newTask.value);
    tasks.innerHTML +=
      `<div class="d-flex bd-highligh">
       <div class="lista liste mt-3 list-group-item list-group-item-primary p-2 flex-grow-1 bd-highlight">` +
      newTask.value +
      `</div><button class="lista buttonDelete btn btn-danger mt-3" onclick="Delete(this,'` +
      newTask.value +
      `');">Delete</button></div>`;
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
function Delete(event, value) {
  var index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  }
  event.parentNode.parentNode.removeChild(event.parentNode);
}
const btnParticipant1 = document.getElementById("btnParticipant1");
const btnParticipant2 = document.getElementById("btnParticipant2");

let list = [];

function mixTasks(num, showRezultId) {
  document.getElementById(showRezultId).style.display = "block"; //insert text in div

  const shuffled = [...list].sort(() => 0.5 - Math.random()); // random mix

  let x = shuffled.slice(0, num);
  document.getElementById(showRezultId).innerHTML = x;
  return shuffled.slice(0, num);
}
