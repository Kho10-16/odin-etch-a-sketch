const container = document.querySelector(".container");
const GRID_SIZE_PX = 640;

function createGrid(size){
    const squareSize = GRID_SIZE_PX / size;

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);