function createGrid() {
    const container = document.querySelector(".container");
    for(i = 0; i < 16; i++ ){
        for(j = 0; j < 16; j++){
            const etchASketchDiv = document.createElement("div");
            etchASketchDiv.className = "etch";
            container.appendChild(etchASketchDiv);
        } 
    }
}

function increaseGrey() {
    // Needs refactoring to just add flat int to rgb value
    const etchBoxes = document.querySelectorAll(".etch");
    etchBoxes.forEach(etchBox =>{
    etchBox.addEventListener("mousedown", () => {
        bgColor = window.getComputedStyle(etchBox).backgroundColor;
        
        console.log(bgColor)
        switch (bgColor) {
            case "rgb(255, 255, 255)": // white
                newColor = "lightgray";
                break;
            case "rgb(211, 211, 211)": // lightgray
                newColor = "silver";
                break;
            case "rgb(192, 192, 192)": // silver
                newColor = "darkgray";
                break;
            case "rgb(169, 169, 169)": // darkgray
                newColor = "black";
                break;
            case "rgb(0, 0, 0)":
                break;
            default:
                newColor = "pink";
        }

        console.log(`Setting color to ${newColor}`);
        etchBox.style.backgroundColor = newColor;
})});  
}


createGrid();
increaseGrey();

 



