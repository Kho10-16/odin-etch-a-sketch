const container = document.querySelector(".container");
const GRID_SIZE_PX = 640;

function createGrid(size){
    container.innerHTML = ""; /* Clear the container before creating a new grid */
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

const button = document.querySelector(".resize-btn");

button.addEventListener("click", () =>{
    const input = prompt("How many squares per side? (1-100)");

    if(input === null) return;

    const size = Number(input);

    if(!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
})