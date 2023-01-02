'use strict';


// ELEMENTS
let optionsButton = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("font-name");
let fontNameRef = document.getElementById("font-size");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll('.adv-option-button');
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// LIST OF FONTLIST
let fontlist = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];



// INITIAL SETTING
const initializer = () => {
    // function call for highlighting buttons
    // No highlights for link, unlink, lists, redo, undo, since they are one time operations
    highlighter(alignButtons, true);
    highlighter(formatButtons, true);
    highlighter(spacingButtons, true);
    highlighter(scriptButtons, true);
}

// HIGHLIGHT CLICKED BUTTON
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
    button.addEventListener('click', () => {
            
        })
    }
}