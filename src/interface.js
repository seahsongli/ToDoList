import { buttonLogic, closeModal, createStorageObject, priorityColoring } from "./logic";

const content = document.querySelector(".content");

let listOfItems = [];

function createHeader() {
    let header = document.createElement("div");
    header.innerText = "TO DO LIST";
    header.classList.add("header");
    content.append(header);
}


function createList(){
    let list = document.createElement("list")
    let listContents = document.createElement("div");
    list.classList.add("list");
    listContents.classList.add("listContents");
    list.append(listContents);
    content.append(list);
}


function createButton(){
    let addButton = document.createElement("button");
    addButton.innerText = "+Add";
    addButton.classList.add("addButton");
    let listContents = document.querySelector(".listContents");
    listContents.append(addButton);
}


function createOverLay(){
    let overlay = document.createElement("div");
    let listContents = document.querySelector(".listContents");
    overlay.classList.add("overlay");
    listContents.append(overlay);
}


function createPopUp(){
    let overlay = document.querySelector(".overlay");
    let popup = document.createElement("div");
    popup.classList.add("popup");


    let form = document.createElement("form");
    form.classList.add("form");
    form.setAttribute("method", "post");

    //Create a escape button for forms
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.setAttribute("type", "button");

    //Create an input element for title
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "Title");
    title.setAttribute("placeholder", "Title");

    //Create an input element for description
    let description= document.createElement("TEXTAREA");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "Description Of Task");
    description.classList.add("descriptionBox");

    //Create an input element for due date
    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "text");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("placeholder", "Date, e.g.22 Oct 22");

    //Create radio button for priority ranking
    let radioButtons = document.createElement("div");
    radioButtons.classList.add("radioButtons");

    //For Low Priority
    let lowPriorityDiv = document.createElement("div");
    let lowPriority = document.createElement("input")
    let lowPriorityText = document.createElement("div");
    lowPriorityText.innerText = "Low";
    lowPriorityText.classList.add("radioButtonText");
    lowPriority.setAttribute("type", "radio");
    lowPriority.setAttribute("name", "priority");
    lowPriority.setAttribute("value", "Low");
    lowPriorityDiv.classList.add("radioButtonDiv");
    lowPriorityDiv.append(lowPriority,lowPriorityText);
    
    //For Medium Priority
    let mediumPriorityDiv = document.createElement("div");
    let mediumPriority = document.createElement("input")
    let mediumPriorityText = document.createElement("div");
    mediumPriorityText.innerText = "Medium";
    mediumPriorityText.classList.add("radioButtonText");
    mediumPriority.setAttribute("type", "radio");
    mediumPriority.setAttribute("name", "priority");
    mediumPriority.setAttribute("value", "Medium");
    mediumPriorityDiv.classList.add("radioButtonDiv");
    mediumPriorityDiv.append(mediumPriority,mediumPriorityText);

    //For High Priority
    let highPriorityDiv = document.createElement("div");
    let highPriority = document.createElement("input")
    let highPriorityText = document.createElement("div");
    highPriorityText.innerText = "High";
    highPriorityText.classList.add("radioButtonText");
    highPriority.setAttribute("type", "radio");
    highPriority.setAttribute("name", "priority");
    highPriority.setAttribute("value", "High");
    highPriorityDiv.classList.add("radioButtonDiv");
    highPriorityDiv.append(highPriority,highPriorityText);

    radioButtons.append(lowPriorityDiv,mediumPriorityDiv,highPriorityDiv);

    //Create a submit button for forms
    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    submitButton.classList.add("submitButton");

    form.append(deleteButton, title, dueDate, description,radioButtons,submitButton);
    overlay.append(form);

}


function createTaskHeaders(){
    let listContents = document.querySelector(".listContents");
    let sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    let overall = document.createElement("div");
    overall.innerText = "Overall";
    overall.classList.add("taskHeaders");
    overall.setAttribute("id", "overall");

    let lowPriority = document.createElement("div");
    lowPriority.innerText = "Low Priority";
    lowPriority.classList.add("taskHeaders");
    lowPriority.setAttribute("id", "lowPriority");

    let mediumPriority = document.createElement("div");
    mediumPriority.innerText = "Medium Priority";
    mediumPriority.classList.add("taskHeaders");
    mediumPriority.setAttribute("id", "mediumPriority");

    let highPriority = document.createElement("div");
    highPriority.innerText = "High Priority";
    highPriority.classList.add("taskHeaders");
    highPriority.setAttribute("id", "highPriority");

    sidebar.append(overall, lowPriority, mediumPriority, highPriority);
    listContents.append(sidebar);
}


function createToDoContainer(){
    let listContents = document.querySelector(".listContents");
    let toDoContainer = document.createElement("div");
    toDoContainer.classList.add("toDoContainer");
    listContents.append(toDoContainer);
}


function createItem(){
    let form = document.querySelector(".form");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let toDoContainer = document.querySelector(".toDoContainer");

        let toDoItem = document.createElement("div");
        toDoItem.classList.add("toDoItem");
        toDoItem.style.display = "flex";

        toDoContainer.append(toDoItem);

        let itemContents = document.createElement("div");
        itemContents.classList.add("itemContents");
        toDoItem.append(itemContents);

        let name = e.target["Title"].value;
        let duedate = e.target["dueDate"].value;
        
        let detailOfItem = createStorageObject();
        listOfItems.push(detailOfItem);
        console.log(listOfItems);
        
        createItemDetails(itemContents,name,duedate);
        createDescription(e, itemContents);
        deleteToDoItem();
        priorityColoring(listOfItems);
    })

    return listOfItems;
}


function createItemDetails(itemContents, name , dueDate){
    let title = document.createElement("div");
    title.innerText = name;
    title.classList.add("title");

    let deadline = document.createElement("div");
    deadline.classList.add("dueDate");
    deadline.innerText = dueDate;

    itemContents.append(title,deadline);
}


function createDescription(e, itemContents){
    let toDoItem = Array.from(document.querySelectorAll(".toDoItem"));
    let descriptionButton = document.createElement("DETAILS");
    let description = document.createElement("p");
    description.innerText = e.target["description"].value;
    descriptionButton.classList.add("descriptionButton");
    descriptionButton.append(description);
    itemContents.append(descriptionButton);
}


function deleteToDoItem(){
    let toDoItem = Array.from(document.querySelectorAll(".toDoItem"));
    let toDoContainer = document.querySelector(".toDoContainer");
    let deleteToDoItemButton = document.createElement("button");
    deleteToDoItemButton.innerText = "X";
    deleteToDoItemButton.classList.add("deleteToDoItem");
    toDoItem.pop().append(deleteToDoItemButton);
    deleteToDoItemButton.addEventListener("click", (e)=>{
       e.target.parentNode.remove();
    })
}




export{createHeader, createList, createButton, createOverLay, createPopUp, createTaskHeaders, createToDoContainer,createItem};