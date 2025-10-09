
const container = document.querySelector(".container");

for(i = 0; i < 16; i++ ){
    for(j = 0; j < 16; j++){
        const etchASketchDiv = document.createElement("div");
        container.appendChild(etchASketchDiv);
        etchASketchDiv.setAttribute("style", "border: solid; border-color: lightgrey; height: 50px; width: 50px; margin: 2px;");
        etchASketchDiv.textContent = `${i+j}`
    }
    
}