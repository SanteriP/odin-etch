const generateButton = document.querySelector("#generate-button");
const content = document.querySelector("#content");

generateButton.addEventListener('click', () => {
    let squares = +prompt("Squares per side, max 100");
    generateGrid(squares,squares);
});


// Functions
function generateGrid(columns,rows) {
    const previousSketchpad = document.querySelector("#sketchpad-container");
    if (previousSketchpad) {
        content.removeChild(previousSketchpad);
    }

    const sketchpadContainer = document.createElement("div");
    sketchpadContainer.setAttribute("id","sketchpad-container");
    content.appendChild(sketchpadContainer);
    
    let sketchpadWidth = +window.getComputedStyle(sketchpadContainer).width.slice(0,-2);
    const pixelsPerColumn = sketchpadWidth/columns;
    sketchpadContainer.style.height = `${rows*pixelsPerColumn}px`;

    for(let i = 0; i < (rows*columns); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${sketchpadWidth/columns}px`;
        square.style.height = `${sketchpadWidth/columns}px`;
        square.style.flexBasis = `${sketchpadWidth/columns}px`;

        square.addEventListener('mouseenter', () => {
            let randomRGB1 = Math.floor(Math.random() * 256);
            let randomRGB2 = Math.floor(Math.random() * 256);
            let randomRGB3 = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${randomRGB1},${randomRGB1},${randomRGB1})`;
        });

        sketchpadContainer.appendChild(square);
    };
}