function getName() {
    const name: string = (<HTMLInputElement>document.getElementById("input")).value;

    document.getElementById("bounceName")!.innerHTML = name;

    document.getElementById("bounceName")!.animate ([
        {transform: 'translate(0, 0)'},
        {transform: 'translate(640px, 440px)'},
        {transform: 'rotate(180deg)'},
        {transform: 'translate(0, 440px)'},
        {transform: 'rotate(-180deg)'},
        {transform: 'translate(640px, 0)'},
        {transform: 'rotate(-180deg)'},
        {transform: 'translate(640px, 440px)'},
        {transform: 'rotate(180deg)'},
        {transform: 'translate(640px, 0)'},
        {transform: 'rotate(180deg)'},
        {transform: 'translate(0, 440px)'},
        {transform: 'rotate(180deg)'}

    ], {
        duration:10500,
        iterations: Infinity
    });
    
  
}

