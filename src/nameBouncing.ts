class NameBounce {
    container: HTMLDivElement;
    form: HTMLFormElement;
    nameField: HTMLFormElement;
    enteredName: HTMLInputElement;
    canvas: HTMLCanvasElement;
    button: HTMLButtonElement;
    nameToCanvas: CanvasRenderingContext2D;
    nameInput: string;

    constructor () {
        this.container = <HTMLDivElement> document.getElementById("container");
        this.form = <HTMLFormElement> document.querySelector("form")
        this.nameField = <HTMLFormElement> this.form.firstElementChild!;
        this.nameField.id = "name-field";        
        this.enteredName = <HTMLInputElement>this.nameField.querySelector("input");
        this.nameInput = this.enteredName.value;
        
        this.button = <HTMLButtonElement> document.querySelector("button");
        this.canvas = <HTMLCanvasElement> document.getElementById("bounce-field");
        this.nameToCanvas = <CanvasRenderingContext2D> this.canvas.getContext("2d")!;
        this.nameToCanvas.font = "35px Sans-serif";
      
        this.buttonHandler();  
    }

    private submitName (event: Event) {
        event.preventDefault();
        const userInput = this.enteredName.value;
        console.log (userInput)
        this.clearInputs();
    }

    private buttonHandler () {
        this.button.addEventListener ("submit", this.submitName);

        if (!this.enteredName.value) {
            throw new Error ("Invalid input. Please enter your name");
        } else {
            return (this.enteredName.value);
        }
        console.log()
    }

    private clearInputs () {
        this.enteredName.value = "";
    }

    

    private bounceText() {          
        let bouncingName = this.nameToCanvas.measureText(this.nameInput);
            
        const x = this.canvas.width;
        const y = this.canvas.height;

        const bouncNameWidth = bouncingName.width;
        const collideNameWidth = ;  
        this.nameToCanvas.beginPath();
        this.nameToCanvas()
        //ctx.fill();
        //ctx.closePath();
    
    }
}



const NewName = new NameBounce()

console.log(NewName)