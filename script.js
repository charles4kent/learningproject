let userName = "John";  // String
let age = 30;  // Number
let isStudent = true;  // Boolean
let colors = ["red", "blue", "green"];  // Array
let person = { firstName: "John", lastName: "Doe" };  // Object

console.log(userName, age, isStudent, colors, person);

function greetUser(userName) {
    return "Hello, " + userName + "!";
}

console.log(greetUser(userName));

function changeText() {
    document.getElementById("message").innerHTML = "Text has been changed!";
}

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

console.log(userName);
console.log(age);
console.log(isStudent);
console.log(colors);

for (let i = 1; i <= 2; i++) {
    console.log("Number: " + i);
}
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = taskText;

    document.getElementById("taskList").appendChild(listItem);
    input.value = "";
}

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = taskText;

    document.getElementById("taskList").appendChild(listItem);
    input.value = "";
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}