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
        this.clearInputs();
        this.bounceText();
    }

    private buttonHandler () {
        this.button.addEventListener ("submit", () =>{});

        if (!this.nameInput) {
            throw new Error ("Invalid input. Please enter your name");
        } else {
            return (this.nameInput);
        }
    }

    private clearInputs () {
        this.nameInput = "";
    }
   

    private bounceText() {          
        let bouncingName = this.nameToCanvas.measureText(this.nameInput);
            
        const x = this.canvas.width/2;
        const y = this.canvas.height-30;
      //  const dx = 2;
       // const dy = -2;

        //const bouncNameWidth = bouncingName.width;
        //const collideNameWidth = ;  
        this.nameToCanvas.beginPath();
        this.nameToCanvas.moveTo(x,0);
        this.nameToCanvas.lineTo(x,y);
        this.nameToCanvas.moveTo(x,0);
        this.nameToCanvas.stroke();
        this.nameToCanvas.textAlign = "left";
        this.nameToCanvas.fillText('left-aligned', x, y);
        this.nameToCanvas.textAlign = "center";
        this.nameToCanvas.fillText('center-aligned', x/2, y/2)
        this.nameToCanvas.textAlign = "right"
        this.nameToCanvas.fillText('right-aligned', -x, -y)
        this.nameToCanvas.moveTo(x,0)
        this.nameToCanvas.closePath();
   
    }
}



const NewName = new NameBounce();

console.log(NewName);