
document.addEventListener("DOMContentLoaded", function() {
    // the default values for the number of grids is 16
    let rows = 16;
    // taking the grid div for etching grids
    const grid = document.querySelector(".grid");
    // getting the height and width of the grid div
    let gridHeight = grid.offsetHeight;
    let gridWidth = grid.offsetWidth;
    console.log(gridHeight);
    console.log(gridWidth);
    // creating the default grid with 16x16 squares
    createGrid(rows, gridHeight, gridWidth)
    // the button for changing the number of grids
    const changeGridButton = document.querySelector("#changeGrid");
    changeGridButton.addEventListener("click", ChangeGrid);
})

// function for creating the grid
function createGrid(numberOfRows, gridHeight, gridWidth) {
    const grid = document.querySelector(".grid");
    // grid.innerHTML = ""; // clear existing grid first
    let squareHeight = (gridHeight / numberOfRows).toFixed(2);
    // creating all necessary grids
    for(let i = 0; i < numberOfRows; i++)
    {
        const newrow = document.createElement("div");
        newrow.style.width = gridWidth + "px";
        newrow.classList.add("row");
        for(let j = 0; j < numberOfRows; j++)
        {
            const newsquare = document.createElement("div");
            // the squares have the same height and width
            newsquare.style.height = squareHeight + "px";
            newsquare.style.width = squareHeight + "px";
            newsquare.classList.add("square");
            newrow.appendChild(newsquare);
        }
        grid.appendChild(newrow);
    }
}
function ChangeGrid() {
    let gridsNumber = parseInt(prompt("Choose the number of grids"));
    // verifying that the user prompted a value between 1 and 100
    if(gridsNumber >= 1 && gridsNumber <= 100) {
        // empty the current grid for creating a new one
        const grid = document.querySelector(".grid");
        grid.innerHTML = "";
        let gridHeight = grid.offsetHeight;
        let gridWidth = grid.offsetWidth;
        createGrid(gridsNumber, gridHeight, gridWidth);
    }
    else {
        alert("You need to enter a value between 1 and 100");
        ChangeGrid();
    }
}