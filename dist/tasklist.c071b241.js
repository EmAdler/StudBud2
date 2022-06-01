// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
// Selector for the tasklist output
var tasklist = document.querySelector("#tasklist > ul");
// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
});
// Create global array to track tasks
var taskListArray = [];
// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
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
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}
// Function to display task on screen
function renderTask(task1) {
    // Call function - checks if a task has been added
    updateEmpty();
    //new section
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("style", "background-color: lightgray; padding: 10%;   border-radius:10px; border: solid .5px black;");
    taskDiv.setAttribute("draggable", "true");
    taskDiv.setAttribute("ondragstart", "onDragStart(event);");
    taskDiv.setAttribute("id", task1.id);
    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute("data-id", task1.id);
    item.innerHTML = "<p>Task Name: " + task1.taskDescription + "</p>" + "<p>" + "Due Date:" + " " + task1.dueDate + "</p>" + "<p>" + "Completion Time:" + " " + task1.completionTime + "</p>" + "<p>" + "Estimated Completion Time:" + " " + task1.estimatedTime + "</p>";
    taskDiv.appendChild(item);
    tasklist.appendChild(taskDiv);
    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Complete/Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute("data-id");
        let index = taskListArray.findIndex((task)=>task.id === Number(id)
        );
        removeItemFromArray(taskListArray, index);
        console.log(taskListArray);
        updateEmpty();
        item.remove();
    });
    // Clear the input form
    form.reset();
}
// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
}
// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) document.getElementById("emptyList").style.display = "none";
    else document.getElementById("emptyList").style.display = "block";
}
////new drag and drop section////
function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}
function onDragOver(event) {
    event.preventDefault();
}
function onDrop(event) {
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(event.target);
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}

//# sourceMappingURL=tasklist.c071b241.js.map
