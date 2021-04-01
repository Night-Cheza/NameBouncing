"use strict";
class NameBounce {
    constructor() {
        this.container = document.getElementById("container");
        this.form = document.querySelector("form");
        this.nameField = this.form.firstElementChild;
        this.enteredName = this.nameField.querySelector("input");
        //const nameInput = this.enteredName.value;
        this.button = document.querySelector("button");
        this.buttonHandler();
        // this.bounceText();
    }
    buttonHandler() {
        console.log("Hi!");
        this.form.addEventListener("submit", () => {
            const nameInput = this.enteredName.value;
            console.log("1 Hello!");
            if (!nameInput) {
                throw new Error("Invalid input. Please enter your name");
            }
            else {
                return (nameInput);
            }
        });
        console.log("Nya!");
        this.clearInputs();
    }
    clearInputs() {
        this.enteredName.value = "";
    }
    bounceText() {
        const canvas = document.getElementById("bounce-field");
        const nameToCanvas = canvas.getContext("2d");
        nameToCanvas.font = "20px Sans-serif";
        const convertedNameInput = this.enteredName.value;
        const x = canvas.width / 2;
        const y = canvas.height - 30;
        nameToCanvas.beginPath();
        nameToCanvas.moveTo(x, 0);
        nameToCanvas.moveTo(x, 0);
        nameToCanvas.stroke();
        nameToCanvas.textAlign = "left";
        nameToCanvas.fillText(this.enteredName.value, x, y);
        nameToCanvas.textAlign = "center";
        nameToCanvas.fillText(this.enteredName.value, x / 2, y / 2);
        nameToCanvas.textAlign = "right";
        nameToCanvas.fillText(this.enteredName.value, -x, -y);
        nameToCanvas.moveTo(x, 0);
        nameToCanvas.closePath();
    }
}
const NewName = new NameBounce();
console.log(NewName.enteredName.value);
