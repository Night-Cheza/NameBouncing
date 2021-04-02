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
        this.AnimateText();
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
    // private clearInputs () {
    //this.nameInput = "";
    //}
    AnimateText() {
        this.nameInput = this.enteredName.value;
        this.textArea.value = this.nameInput;
        const bouncingName = this.textArea.value;
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
}
const NewName = new NameBounce();
//console.log(NewName.enteredName.value);
