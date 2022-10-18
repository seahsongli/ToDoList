const content = document.querySelector(".content");

function createHeader() {
    let header = document.createElement("div");
    header.innerText = "TO DO LIST";
    header.classList.add("header");
    content.append(header);
}

function createList(){
    let listContents = document.createElement("div");
    listContents.classList.add("listContents");
    content.append(listContents);
}

function createButton(){
    let addButton = document.createElement("button");
    addButton.innerText = "Add To-Do-Item";
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
    form.setAttribute("method", "post");

    //Create an input element for title
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("Title", "Title");

    //Create an input element for description
    let description= document.createElement("TEXTAREA");
    description.setAttribute("type", "text");
    description.setAttribute("placeholder", "Description Of Task");

    //Create an input element for due date
    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "text");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("placeholder", "22 Oct 22");

    form.append(dueDate, description, title);
    overlay.append(form);
}


export{createHeader, createList, createButton, createOverLay, createPopUp};