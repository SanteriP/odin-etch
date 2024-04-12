const sketchpadContainer = document.querySelector("#sketchpad-container");

generateGrid(16,16);


// Functions
function generateGrid(rows,columns) {
    sketchpadContainer.style.width = `${10*rows}px`;
    sketchpadContainer.style.height = `${10*columns}px`;

    for(let i = 0; i < (rows*columns); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        square.addEventListener('mouseenter', () => {
            let randomRGB1 = Math.floor(Math.random() * 256);
            let randomRGB2 = Math.floor(Math.random() * 256);
            let randomRGB3 = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${randomRGB1},${randomRGB1},${randomRGB1})`;
        });

        sketchpadContainer.appendChild(square);
    };
}