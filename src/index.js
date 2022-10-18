import {createHeader, createList, createButton, createOverLay, createPopUp} from "./interface";
import  "../src/styles/header.css";
import {buttonLogic, openModal, closeModal} from "./logic";
// import  "./src/logic.js";




createHeader();
createList();
createButton();
createOverLay();
createPopUp();
buttonLogic();

