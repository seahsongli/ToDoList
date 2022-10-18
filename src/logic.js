function buttonLogic(){
    let addButton = document.querySelector(".addButton");
    addButton.addEventListener("click", ()=>{
        openModal();
    });
}

function openModal(){
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
};

function closeModal(){
    let overlay = document.getElementsByClassName("overlay");
    overlay.style.display = "none";
};

export{buttonLogic, openModal, closeModal};


