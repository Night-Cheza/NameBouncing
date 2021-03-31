"use strict";
class NameBounce {
    constructor() {
        this.container = document.getElementById("container");
        this.form = document.querySelector("form");
        this.nameField = this.form.firstElementChild;
        this.nameField.id = "name-field";
        this.enteredName = this.nameField.querySelector("input");
        const nameInput = this.enteredName.value;
        this.button = document.querySelector("button");
        this.canvas = document.getElementById("bounce-field");
        const nameToCanvas = this.canvas.getContext("2d");
        nameToCanvas.font = "35px Sans-serif";
        let bouncingName = nameToCanvas.measureText(nameInput);
        const x = this.canvas.width;
        const y = this.canvas.height;
        this.buttonHandler();
    }
    submitName(event) {
        event.preventDefault();
        const userInput = this.enteredName.value;
        console.log(userInput);
        this.clearInputs();
    }
    buttonHandler() {
        this.button.addEventListener("submit", this.submitName);
        if (!this.enteredName.value) {
            throw new Error("Invalid input. Please enter your name");
        }
        else {
            return (this.enteredName.value);
        }
    }
    clearInputs() {
        this.enteredName.value = "";
    }
}
function bounceText() {
}
const NewName = new NameBounce();
console.log(NewName);
