class NameBounce {
    container: HTMLDivElement;
    form: HTMLFormElement;
    nameField: HTMLFormElement;
    enteredName: HTMLInputElement;
    button: HTMLButtonElement;
    nameInput: string;
     
        constructor () {
        this.container = <HTMLDivElement> document.getElementById("container");
        this.form = <HTMLFormElement> document.querySelector("form")
        this.nameField = <HTMLFormElement> this.form.firstElementChild!;
        this.enteredName = <HTMLInputElement>this.nameField.querySelector("input");
        this.nameInput = "";
        this.button = <HTMLButtonElement> document.querySelector("button");
 
        this.buttonHandler(); 
       // this.bounceText();
    }
    

    private buttonHandler () {
        this.form.addEventListener ("submit", (event) =>{ 
            this.nameInput = this.enteredName.value;
            event.preventDefault();

            if (!this.nameInput) {
                throw new Error ("Invalid input. Please enter your name");
            } else {
                console.log(this.nameInput);
            }            
        });
    
        this.clearInputs();
    }

    private clearInputs () {
        this.enteredName.value = "";
    }
   

    private bounceText() {  
        const canvas = <HTMLCanvasElement> document.getElementById("bounce-field");
        const nameToCanvas = <CanvasRenderingContext2D> canvas.getContext("2d")!;
        nameToCanvas.font = "20px Sans-serif";     
        const convertedNameInput = this.enteredName.value

        const x = canvas.width/2;
        const y = canvas.height-30;
 
        nameToCanvas.beginPath();
        nameToCanvas.moveTo(x,0);
        nameToCanvas.moveTo(x,0);
        nameToCanvas.stroke();
        nameToCanvas.textAlign = "left";
        nameToCanvas.fillText(this.enteredName.value, x, y);
        nameToCanvas.textAlign = "center";
        nameToCanvas.fillText(this.enteredName.value, x/2, y/2)
        nameToCanvas.textAlign = "right"
        nameToCanvas.fillText(this.enteredName.value, -x, -y)
        nameToCanvas.moveTo(x,0)
        nameToCanvas.closePath();
   
    }

    /*Draw the text onto canvas:
function drawText(txt, x, y) {
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.font = font;
    ctx.fillText(txt, x - 4, y - 4);
}*/
}



const NewName = new NameBounce();

//console.log(NewName.enteredName.value);
