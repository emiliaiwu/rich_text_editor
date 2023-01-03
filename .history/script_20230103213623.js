'use strict';


// ELEMENTS
let optionsButton = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("font-name");
let fontSizeRef = document.getElementById("font-size");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll('.align');
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


    // Create options for font name
    fontlist.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // Fontsize
    for (let i = 1; i <= 8; i++) {
         let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    // Default font size
    fontSizeRef.value = 5;


    // Main logic
    const modifyText = (command, defaultUI, value) => {
        document.execCommand(command, defaultUI, value);
    };


    // For basci operations which dont need parameters
    optionsButtons.f
}

// HIGHLIGHT CLICKED BUTTON
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener('click', () => {
            // needsRemoval = true means only one button should be highlighted
            
            if (needsRemoval) {
                let alreadyActive = false;

                // if currently clicked button is already active
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                // Remove highlight from other buttons
                highlighterRemover(className);

                if (!alreadyActive) {
                    // highlight clicked button
                    button.classList.add("active");
                } else {
                     button.classList.toggle('active');
                }
            }
        })
    })
}


const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    })
}

window.onload = initializer();