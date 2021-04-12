class NameBounce {
    container: HTMLDivElement;
    form: HTMLFormElement;
    nameField: HTMLFormElement;
    enteredName: HTMLInputElement;
    button: HTMLButtonElement;
    nameInput: string;
    textArea: HTMLTextAreaElement;
     
        constructor () {
        this.container = <HTMLDivElement> document.getElementById("container");
        this.form = <HTMLFormElement> document.querySelector("form")
        this.nameField = <HTMLFormElement> this.form.firstElementChild!;
        this.enteredName = <HTMLInputElement>this.nameField.querySelector("input");
        this.nameInput = "";
        this.button = <HTMLButtonElement> document.querySelector("button");
        this.textArea = <HTMLTextAreaElement> document.getElementById("bounce-field");
 
        this.buttonHandler(); 
       // this.clearInputs();
    }
    

    private buttonHandler () {
        this.form.addEventListener ("submit", (event) =>{ 
            this.nameInput = this.enteredName.value;
            event.preventDefault();

            if (!this.nameInput) {
                throw Error("Invalid input. Please enter your name");
            } else {
                console.log(this.nameInput);
            }            
        });

        
    }

   // private clearInputs () {
        //this.nameInput = "";
    //}
}
   
        
class AnimateText {  
    nameInput: string;
    textArea: HTMLTextAreaElement;

    constructor () {
        this.textArea = <HTMLTextAreaElement> document.getElementById("bounce-field");
        this.nameInput = "";
        this.textArea.innerHTML = this.nameInput
        
        const bouncingName = this.textArea.value;
    }
    
       
      





    //     <script type="text/javascript">
    //     function RemoveContent () {
    //         var srcObj = document.getElementById ("src");

    //         if (document.createRange) {     // all browsers, except IE before version 9
    //             var rangeObj = document.createRange ();
    //             rangeObj.selectNodeContents (srcObj);
    //             rangeObj.deleteContents ();
    //         }
    //         else {      // Internet Explorer before version 9
    //             var rangeObj = document.body.createTextRange ();
    //             rangeObj.moveToElementText (srcObj);
    //             rangeObj.select ();
    //             rangeObj.execCommand ('cut');
    //         }
    //     }
    // </script>
    
    
        
        
    
    
    


}



const NewName = new NameBounce();

//console.log(NewName.enteredName.value);
