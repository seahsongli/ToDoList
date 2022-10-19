import {createHeader, createList, createButton, createOverLay, createPopUp, createToDoContainer, createItem} from "./interface";
import  "../src/styles/header.css";
import {buttonLogic, openModal, closeModal,submitButtonLogic} from "./logic";




createHeader();
createList();
createButton();
createOverLay();
createPopUp();
buttonLogic();
createToDoContainer();
createItem();
submitButtonLogic();

// To Do List
// 1. include additional details for item 
// 2. include delete button for item 
// 3. Styling for items 
// 4. Maybe checklist?
// 5. Fix my delete button for forms (currently submitting)
// 6. Priority colouring.
// 7. Show only two details, Title and Due Date.
