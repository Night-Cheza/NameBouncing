"use strict";
class NameBounce {
    constructor() {
        this.container = document.getElementById("container");
        this.form = document.querySelector("form");
        this.nameField = this.form.firstElementChild;
        this.nameField.id = "name-field";
        this.enteredName = this.nameField.querySelector("input");
        this.nameInput = this.enteredName.value;
        this.button = document.querySelector("button");
        this.canvas = document.getElementById("bounce-field");
        this.nameToCanvas = this.canvas.getContext("2d");
        this.nameToCanvas.font = "35px Sans-serif";
        this.buttonHandler();
        this.clearInputs();
        this.bounceText();
    }
    buttonHandler() {
        this.button.addEventListener("submit", () => { });
        if (!this.nameInput) {
            throw new Error("Invalid input. Please enter your name");
        }
        else {
            return (this.nameInput);
        }
    }
    clearInputs() {
        this.nameInput = "";
    }
    bounceText() {
        let bouncingName = this.nameToCanvas.measureText(this.nameInput);
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 30;
        //  const dx = 2;
        // const dy = -2;
        //const bouncNameWidth = bouncingName.width;
        //const collideNameWidth = ;  
        this.nameToCanvas.beginPath();
        this.nameToCanvas.moveTo(x, 0);
        this.nameToCanvas.lineTo(x, y);
        this.nameToCanvas.moveTo(x, 0);
        this.nameToCanvas.stroke();
        this.nameToCanvas.textAlign = "left";
        this.nameToCanvas.fillText('left-aligned', x, y);
        this.nameToCanvas.textAlign = "center";
        this.nameToCanvas.fillText('center-aligned', x / 2, y / 2);
        this.nameToCanvas.textAlign = "right";
        this.nameToCanvas.fillText('right-aligned', -x, -y);
        this.nameToCanvas.moveTo(x, 0);
        this.nameToCanvas.closePath();
    }
}
const NewName = new NameBounce();
console.log(NewName);
