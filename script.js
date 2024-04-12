const generateButton = document.querySelector("#generate-button");
const content = document.querySelector("#content");

generateButton.addEventListener('click', () => {
    setTimeout(() => {
        generateButton.classList.add("buttonPressed");
    }, "1");
    setTimeout(() => {
        askGridSize();
        generateButton.classList.remove("buttonPressed");
    }, "280");
});

generateGrid(16,16);

// Functions
function askGridSize() {
    let squares = 0;
    while (squares < 2 || squares > 100) {
        squares = prompt("Squares per side, max 100");
        console.log(squares);

        if (squares === null) {
            return;
        }

        if (squares < 2) {
            alert("Number must be 2 or higher");
        }
        else if (squares > 100) {
            alert("Number must be 100 or lower");
        }
    }
    
    generateGrid(squares,squares);
};

function generateGrid(columns,rows) {
    const previousSketchpad = document.querySelector("#sketchpad-container");

    previousSketchpad.remove();

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
            square.style.backgroundColor = `rgb(${randomRGB1},${randomRGB2},${randomRGB3})`;
        });

        sketchpadContainer.appendChild(square);
    };
}