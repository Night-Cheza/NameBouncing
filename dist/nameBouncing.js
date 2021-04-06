"use strict";
class NameBounce {
    constructor() {
        this.container = document.getElementById("container");
        this.form = document.querySelector("form");
        this.nameField = this.form.firstElementChild;
        this.enteredName = this.nameField.querySelector("input");
        this.nameInput = "";
        this.button = document.querySelector("button");
        this.textArea = document.getElementById("bounce-field");
        this.buttonHandler();
        // this.clearInputs();
    }
    buttonHandler() {
        this.form.addEventListener("submit", (event) => {
            this.nameInput = this.enteredName.value;
            event.preventDefault();
            if (!this.nameInput) {
                throw Error("Invalid input. Please enter your name");
            }
            else {
                console.log(this.nameInput);
            }
        });
    }
}
class AnimateText {
    constructor() {
        this.textArea = document.getElementById("bounce-field");
        this.nameInput = "";
        const bouncingName = this.textArea.value;
    }
}
const NewName = new NameBounce();
//console.log(NewName.enteredName.value);
