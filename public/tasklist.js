//TASK LIST JS

//REFERENCE//
//Tyler Potts. (2021, October 2). Build a Todo list app in HTML, CSS & JavaScript in 2021 | JavaScript for Beginners tutorial [Video]. YouTube. https://www.youtube.com/watch?v=MkESyVB4oUw
//W3schools. (n.d.). HTML Drag and Drop API. W3 Schools. Retrieved June 3, 2022, from https://www.w3schools.com/html/html5_draganddrop.asp

//DOM elements for form
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");

// This selects the tasklist output
var tasklist = document.querySelector("#tasklist > ul");

//Calls all the DOM elements from the tasklist inputs inside the form through the id element
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

//Event listener for submitting the form
//Pullling all the values from the inputs together
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  if (task) {
    addTask(
      task,
      dueDate,
      estimatedTime,
      priorityRating,
      completionTime,
      false
    );
  }
});

// Araay to track the tasks 
var taskListArray = [];

//Function 'addtask' allows the user to add a task through the form with parameters e.g. the year
//It calls an id for each task created that can be used to store the data 
function addTask(
  taskDescription,
  dueDate,
  estimatedTime,
  priorityRating,
  completionTime,
  completionStatus
) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    id: Date.now(),
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    estimatedTime,
    completionStatus,
  };

  taskListArray.push(task);
  //console log shows the id of the task followed by the infromation inside the console 
  console.log(taskListArray);
  renderTask(task);
}

// Function 'render task' shows the content on the screen for the user
function renderTask(task) {
  // Call function - checks if a task has been added
  updateEmpty();

  
//Makes the each task their own div to allow it to be moved around into the columns below
  let taskDiv = document.createElement("div");
  //Styling for the tasks 
  taskDiv.setAttribute("style", "background-color: lightgray; padding: 10%;   border-radius:10px; border: solid .5px black;");
  //Makes the task div draggable 
  taskDiv.setAttribute("draggable", "true");
  taskDiv.setAttribute("ondragstart", "onDragStart(event);");
  //calls the id
  taskDiv.setAttribute("id", task.id);
  
  

  // Create HTML elements
  // The disaply of the infromation on the screen from the data the user has put in
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  //each elements is using paragraph formating for the content show with text at the begininng to provide context for the user about what the content means e.g. task name:
  item.innerHTML =
    "<p>" +
    "Task Name:" +
    " " +
    task.taskDescription +
    "</p>" +
    "<p>" +
    "Due Date:" +
    " " +
    task.dueDate +
    "</p>" +
    "<p>" +
    "Completion Time:" +
    " " +
    task.completionTime +
    "</p>" +
    "<p>" +
    "Estimated Completion Time:" +
    " " +
    task.estimatedTime +
    "</p>";
    //appends it to item as well as into the task div to allow it to be dragable
  taskDiv.appendChild(item);
  tasklist.appendChild(taskDiv);

  // Buttons to allow the task to be deleted 
  let delButton = document.createElement("button");
  //text that says both complete or deleted as both would clear the content
  let delButtonText = document.createTextNode("Complete/Delete Task");
  //append the content to the button
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  // Event listener to clear the data if it has been deletged 
  delButton.addEventListener("click", function (event) {
    event.preventDefault();
    let id = event.target.parentElement.getAttribute("data-id");
    let index = taskListArray.findIndex((task) => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    //show content in the console
    console.log(taskListArray);
    updateEmpty();
    item.remove();
  });

  // Clear the input form once it has been filled out
  form.reset();
}

// Function to remove item from array if they have been deleted
function removeItemFromArray(arr, index) {
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

//Function that allows the text 'you haven't added any tasks' to appear if the users hasnt added any tasks then display when a task has been added
function updateEmpty() {
  if (taskListArray.length > 0) {
    document.getElementById("emptyList").style.display = "none";
  } else {
    document.getElementById("emptyList").style.display = "block";
  }
}


//DRAG AND DROP
//onDragStart allows the div to be moveable
function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
//onDragOver allow the div to move over other elemtns
function onDragOver(event) {
  event.preventDefault();
}
// OnDrop Where the content can be dropped and how it will be displayed 
function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  console.log(event.target);
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}

