import {createHeader, createList, createButton, createOverLay, createPopUp, createToDoContainer, createItem,createDescription} from "./interface";
import  "../src/styles/header.css";
import {buttonLogic, openModal, closeModal,submitButtonLogic, deleteButtonLogic} from "./logic";




createHeader();
createList();
createButton();
createOverLay();
createPopUp();
buttonLogic();
createToDoContainer();
createItem();
submitButtonLogic();
deleteButtonLogic();


// To Do List
// 1. include additional details for item [done]
// 2. include delete button for item [done]
// 3. Styling for items 
// 4. Maybe checklist?
// 5. Fix my delete button for forms (currently submitting)
// 6. Priority colouring.
// 7. Show only two details, Title and Due Date. [done]
