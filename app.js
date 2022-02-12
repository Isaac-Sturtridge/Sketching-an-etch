const container = document.getElementById('container')
const div = document.createElement('div')
const divSelector = document.querySelectorAll('div div')
const rows = document.getElementsByClassName("gridRow")
const cells = document.getElementsByClassName("cell")

function makeRows(rowNum) {
    for(let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";

    }
}

function makeColumns(cellNum) {
    for(i = 0; i < rows.length; i++) {
        for(j = 0; j < cellNum; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";
        }
    }
}

function createGrid() {
    makeRows(16)
    makeColumns(16)
}

window.addEventListener('DOMContentLoaded', createGrid())