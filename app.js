const container = document.getElementById('container')
const div = document.createElement('div')
const divSelector = document.querySelectorAll('div div')
const rows = document.getElementsByClassName("gridRow")
const cells = document.getElementsByClassName("cell")
const newBtn = document.getElementById('newBtn')
const rowsQuery = document.querySelectorAll('gridRow')
const cellsQuery = document.querySelectorAll('cell')

function makeRows(rowNum) {
    if(rowNum > 100) {
        return alert('Too Many Rows! Less than 100 please')
    }
    for(let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";

    }
}

function makeColumns(cellNum) {
    if(cellNum > rows.length) {
        return alert('Too Many Columns! Columns cannot be greater than rows at this time!')
    }
    for(i = 0; i < rows.length; i++) {
        for(j = 0; j < cellNum; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";
            cell.addEventListener('mouseover', function ( event ) {
                event.target.style.backgroundColor = "white";
                event.target.style.border = "2px solid yellow"
            })
            
        }
    }
}

newBtn.addEventListener("click", () => {
    clearGrid()
    createGrid(prompt("Enter row numbers:"), prompt("Enter column numbers: "))
})

function clearGrid() {
    container.innerHTML = ''
}



function createGrid(rowNum, columnNum) {
    makeRows(rowNum)
    makeColumns(columnNum)
}

window.addEventListener('DOMContentLoaded', createGrid())