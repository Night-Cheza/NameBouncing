"use strict";
/*interface CanvasPrinting {
    viewport: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
}



class NameBounce {
    //nameInput: HTMLInputElement
    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    btnEl: HTMLButtonElement;
    //viewport: HTMLCanvasElement;
    
        
    constructor () {
        
        this.btnEl = <HTMLButtonElement> document.querySelector("button");
        btn = this.btnEl.addEventListener("submit")
        //const name = nameInput.value;
        this.canvas = <HTMLCanvasElement> document.querySelector("#.bounce-field");
        this.x = this.canvas.height;
        this.y = this.canvas.width;
        const btn = document.querySelector("button");
        //btn!.addEventListener("submit", (e: Event) =>this.name);
        const ctx = this.canvas.getContext('2d')!;

        
    }

   // nameInput = <HTMLFormElement> document.querySelector("form")!;
       // nameInput.addEventListener("submit", event => {
          //  const name = <HTMLInputElement> document.getElementById("text").value
            
          //  const newName = new NameBounce ()

           // console.log(newName);
            
        })

    function takeAndMove (btn) {
    
    function () {

    }
    
}


const Bounce = new NameBounce ()

function () {
console.log(Bounce.name)
}


           /* ctx.beginPath();
            ctx.rect(20, 40, 50, 50);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
            const nameRadius = 25;

}



let n = new NameBounce ();


courseForm.addEventListener("submit", event =>{
    event.preventDefault(); //if I fill the form, there will not be http request - for now
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert ("Invalid imput. Please try again");
        return;
    }*/
class NameBounce {
    constructor() {
        this.container = document.getElementById("container");
        this.nameField = this.container.firstElementChild;
        this.nameField.id = "input";
        this.enteredName = this.nameField.getElementById("name");
        this.canvas = document.querySelector(".bounce-field");
        const bouncingName = this.canvas.getContext("2d");
        bouncingName.fillText(this.enteredName.value, 50, 50);
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 30;
        //this.drawText();  
        this.buttonHandler();
    }
    Input() {
        const resultName = this.enteredName.value;
        if (!resultName) {
            throw new Error("Invalid input. Please enter your name");
        }
        else {
            return (resultName);
        }
    }
    clearInputs() {
        this.enteredName.value = "";
    }
    submitName(event) {
        event.preventDefault();
        const userInput = this.Input();
        console.log(this.Input());
        this.clearInputs();
    }
    buttonHandler() {
        this.nameField.addEventListener("submit", this.submitName);
    }
}
const NameInput = new NameBounce();
/*let Name = <HTMLInputElement> document.getElementById("name-field")!
Name.addEventListener("submit", () =>
const nameEl = <HTMLInputElement> document.getElementById("name")
const enteredName = nameEl.value

const NewName = new NameBounce()
)

function drawText({ text = "", location: [x, y] = [0, 0], bold = false }) {
    addEventListener// Draw text
}
// Call drawText with an object literal
let NewName = { text: "someText", location:  [x = 0, y = 0], style: false};
drawText(nameEl); */ 
