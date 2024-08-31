// squarecolor declared globally to be accessible in the functions
let squareColor = "black";
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
    // track selecte color (the default would be black)
    const favcolor = document.querySelector("#favcolor");
    favcolor.addEventListener("change", function(e){
        squareColor = e.target.value;
    })
    // creating the default grid with 16x16 squares
    createGrid(rows, gridHeight, gridWidth)
    // the button for changing the number of grids
    const changeGridButton = document.querySelector("#changeGrid");
    changeGridButton.addEventListener("click", ChangeGrid);
    // rainbow button
    const rainbow = document.querySelector("#rainbow");
    // we check or uncheck the button
    rainbow.addEventListener("click", function() {
        if(rainbow.classList.contains("active")){
            rainbow.classList.remove("active");
        }
        else {
            rainbow.classList.add("active");
        }
    })
    // eraser button
    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", function(){
        if(eraser.classList.contains("active")){
            eraser.classList.remove("active");
        }
        else {
            eraser.classList.add("active");
        }
    })
    // clear button
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", function() {
        // selecting all the squares
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.style.backgroundColor = "white";
        });
    });

})

// function for creating the grid
function createGrid(numberOfRows, gridHeight, gridWidth) {
    const grid = document.querySelector(".grid");
    // grid.innerHTML = ""; // clear existing grid first
    let squareHeight = (gridHeight / numberOfRows).toFixed(2);
    // creating all necessary grids
    const rainbow = document.querySelector("#rainbow");
    const eraser = document.querySelector("#eraser");
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
            newsquare.addEventListener("mouseover", function() {
                // verify if rainbow button is active
                if (eraser.classList.contains("active")) {
                    newsquare.style.backgroundColor = "white";
                }
                else if (rainbow.classList.contains("active")) {
                    // we get 3 random values for the rgb values
                    let rgb1 = Math.round(Math.random() * 255);
                    let rgb2 = Math.round(Math.random() * 255);
                    let rgb3 = Math.round(Math.random() * 255);
                    newsquare.style.backgroundColor = 'rgb('+ rgb1 + ',' + rgb2 + ',' + rgb3 +')';
                }
                else {
                    newsquare.style.backgroundColor = squareColor;
                }
            })
            newrow.appendChild(newsquare);
        }
        grid.appendChild(newrow);
    }
}

// function for changing the grid
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