
document.addEventListener("DOMContentLoaded", function() {
    // the default values for the number of grids is 16
    let rows = 16;
    // taking the grid div for etching grids
    const grid = document.querySelector(".grid");
    // getting the height and width of the grid div
    gridHeight = grid.offsetHeight;
    gridWidth = grid.offsetWidth;
    console.log(gridHeight);
    console.log(gridWidth);
    let squareHeight = (gridHeight / rows).toFixed(2);
    // creating all necessary grids
    for(let i = 0; i < rows; i++)
    {
        const newrow = document.createElement("div");
        newrow.style.width = gridWidth;
        newrow.classList.add("row");
        for(let j = 0; j < rows; j++)
        {
            const newsquare = document.createElement("div");
            // the squares have the same height and width
            newsquare.style.height = squareHeight;
            newsquare.style.width = squareHeight;
            newsquare.classList.add("square");
            newrow.appendChild(newsquare);
        }
        grid.appendChild(newrow);
    }
})
function changeGrid() {
    // it will be made
}