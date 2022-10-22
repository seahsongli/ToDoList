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

function createStorageObject(){
    let form = document.querySelector(".form")
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
    return details;
}



export{buttonLogic, openModal, closeModal,submitButtonLogic, deleteButtonLogic, createStorageObject};


