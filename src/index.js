import {
  createHeader,
  createList,
  createButton,
  createOverLay,
  createPopUp,
  createToDoContainer,
  createItem,
  createDescription,
  createTaskHeaders,
} from "./interface";
import "../src/styles/header.css";
import {
  buttonLogic,
  openModal,
  closeModal,
  submitButtonLogic,
  deleteButtonLogic,
  priorityColoring,
  switchTabLogic,
  populateStorage,
  createStorageItems,
} from "./logic";

createHeader();
createList();
createOverLay();
createPopUp();
createTaskHeaders();
createToDoContainer();
createButton();
buttonLogic();
createItem();
submitButtonLogic();
deleteButtonLogic();
switchTabLogic();
populateStorage();

// for(let name in localStorage) {
//     populateStorage(name);
// }

// To Do List
// 1. include additional details for item [done]
// 2. include delete button for item [done]
// 3. Styling for items
// 4. Maybe checklist?
// 5. Fix my delete button for forms (currently submitting) [done]
// 6. Priority colouring. [done]
// 7. Show only two details, Title and Due Date. [done]
// 8. Form Validation
// 9. Sort by dates
