import { createItem,createItemDetails, deleteToDoItem} from "./interface";

function buttonLogic(){
    let addButton = document.querySelector(".addButton");
    addButton.addEventListener("click", ()=>{
        openModal();
    });
}


function openModal(){
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
};


function closeModal(){
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
};


function submitButtonLogic(){
    let submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", ()=>{
        closeModal();
    })
}


function deleteButtonLogic(){
    let deleteButton = document.querySelector(".deleteButton");
    deleteButton.addEventListener("click", ()=> {
        closeModal();

    })
}


function createStorageObject(toDoItem){
    let form = document.querySelector(".form");
    let object = {};
    let details = {};
    let radioButtons = Array.from(document.querySelectorAll('input[name="priority"]'))
    details.name = form["Title"].value;
    details.dueDate = form["dueDate"].value;
    details.description = form["description"].value;
    for (const radioButton of radioButtons){
        if (radioButton.checked) {
            details.priority = radioButton.value;
        }
    }
    object[toDoItem] = details;
    return details;
}


function priorityColoring(listOfItems){
    let toDoItems = Array.from(document.querySelectorAll(".toDoItem"));
    for(let i=0;i<toDoItems.length;i++){
        if (listOfItems[i]["priority"] === "Low") {
            toDoItems[i].style.borderRight = "15px solid yellow";
            toDoItems[i].setAttribute("id", "low");
        }

        else if (listOfItems[i]["priority"] === "Medium") {
            toDoItems[i].style.borderRight = "15px solid orange";
            toDoItems[i].setAttribute("id", "medium");
        }

        else {
            toDoItems[i].style.borderRight = "15px solid red";
            toDoItems[i].setAttribute("id", "high");
        }
        
    }
}


function switchTabLogic(){
    let headers = Array.from(document.querySelectorAll(".taskHeaders"));
    for (let tab of headers){
        tab.addEventListener("click", (e)=>{
            let allItems = Array.from(document.querySelectorAll(".toDoItem"));
            let allHeaders = Array.from(document.querySelectorAll(".taskHeaders"));

            // To reset any current selection
            for (let header of allHeaders){
                header.style.backgroundColor = "#101820FF";
                header.style.color = "white";
            }

            // When Low Priority is selected
            if(e.target.id === "lowPriority"){
                let lowPriorityTab = document.querySelector("#lowPriority");
                lowPriorityTab.style.backgroundColor = "rgb(235,236,240)";
                lowPriorityTab.style.color = "black";
                    for (let item of allItems){
                        if (item.id === "low") item.style.display = "flex";
                        else item.style.display = "none";
                    }
                }

            // When Medium Priority is selected
            else if(e.target.id === "mediumPriority"){
                let mediumPriorityTab = document.querySelector("#mediumPriority");
                mediumPriorityTab.style.backgroundColor = "rgb(235,236,240)";
                mediumPriorityTab.style.color = "black";
                for (let item of allItems){
                    if (item.id === "medium") item.style.display = "flex";
                    else item.style.display = "none";
                }
            }

            // When High Priority is selected
            else if(e.target.id === "highPriority"){
                let highPriorityTab = document.querySelector("#highPriority");
                highPriorityTab.style.backgroundColor = "rgb(235,236,240)";
                highPriorityTab.style.color = "black";
                for (let item of allItems){
                    if (item.id === "high") item.style.display = "flex";
                    else item.style.display = "none";
                }
            }

             // When Overall Tab is selected
             else {
                let overallTab = document.querySelector("#overall");
                overallTab.style.backgroundColor = "rgb(235,236,240)";
                overallTab.style.color = "black";
                for (let item of allItems){
                    item.style.display = "flex";
                }
             }

        })
    }
}

function getDate(){
    let listOfDates = Array.from(document.querySelectorAll(".dueDate"));
    let dueDates = [];
    for(let i=0;i<listOfDates.length;i++){
        dueDates.push(listOfDates[i].innerText);
    }
    console.log(dueDates);
    return dueDates;
}


function setStorage(name, detailOfItem){
    let detailOfItem_serialized = JSON.stringify(detailOfItem);
    localStorage.setItem(name, detailOfItem_serialized);
    console.log(localStorage);
}


function createStorageItems(name){
    let detailOfItem_deserialized = JSON.parse(localStorage.getItem(name));
    let toDoContainer = document.querySelector(".toDoContainer");

    let toDoItem = document.createElement("div");
    toDoItem.classList.add("toDoItem");
    toDoItem.style.display = "flex";

    toDoContainer.append(toDoItem);

    let itemContents = document.createElement("div");
    itemContents.classList.add("itemContents");
    toDoItem.append(itemContents);

    let title = detailOfItem_deserialized["name"];
    let duedate =  detailOfItem_deserialized["dueDate"];
    createItemDetails(itemContents,title,duedate);

    let descriptionButton = document.createElement("DETAILS");
    let description = document.createElement("p");
    description.innerText = detailOfItem_deserialized["description"];
    descriptionButton.classList.add("descriptionButton");
    descriptionButton.append(description);
    itemContents.append(descriptionButton);
        
    
    deleteToDoItem();
    let listOfStorageObject = []
    for(let j=0;j<localStorage.length;j++){
        listOfStorageObject.push(JSON.parse(localStorage[localStorage.key(j)]));
    }

    priorityColoring(listOfStorageObject);
    
       
}

function populateStorage(){
    if (localStorage.length>0){
        for (var i=0; i < localStorage.length; i++){
            createStorageItems(localStorage.key(i));
        }
    }
    return;
}





export{buttonLogic, openModal, closeModal,submitButtonLogic, deleteButtonLogic, createStorageObject, priorityColoring, switchTabLogic, getDate, setStorage,createStorageItems, populateStorage}

