const container = document.querySelector(".container");
const GRID_SIZE_PX = 640;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size){
    container.innerHTML = ""; /* Clear the container before creating a new grid */
    const squareSize = GRID_SIZE_PX / size;

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
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