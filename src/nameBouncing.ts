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

interface CanvasDrawPath {  //look in typescript lab
    beginPath (): void;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean

}

class NameBounce {
    container: HTMLDivElement;
    nameField: HTMLFormElement;
    enteredName: HTMLInputElement;
    canvas: HTMLCanvasElement;

    constructor () {
        this.container = <HTMLDivElement> document.getElementById("container");
        this.nameField = <HTMLFormElement> this.container.firstElementChild;
        this.nameField.id = "input";
        this.enteredName = <HTMLInputElement> this.nameField.getElementById("name")!;
        this.canvas = <HTMLCanvasElement> document.querySelector(".bounce-field");

        const bouncingName = this.canvas.getContext("2d");
        bouncingName!.fillText(this.enteredName.value, 50, 50);

        const x = this.canvas.width/2;
        const y = this.canvas.height-30;
       
        //this.drawText();  
        this.buttonHandler();  
        
    }

    private Input(): string {
        const resultName = this.enteredName.value

        if (!resultName) {
            throw new Error ("Invalid input. Please enter your name");
        } else {
            return (resultName);
        }
    }

    private clearInputs () {
        this.enteredName.value = "";
    }

    private submitName (event: Event) {
        event.preventDefault();
        const userInput = this.Input();
        console.log (this.Input())
        this.clearInputs();
    }

    private buttonHandler () {
        this.nameField.addEventListener ("submit", this.submitName);
    }

  //  private bouncingHandler() {
        
  //  }


   // private draw() {
    //    this.enteredName.value.beginPath()
   // }

   


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
} */
