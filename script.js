let topRow = document.querySelector('.top-row');
let leftCol = document.querySelector('.left-col');
let topleft = document.querySelector(".top-left-cell");
let cells = document.querySelectorAll('.cell');
let addressInput = document.querySelector('#address'); 
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellsContentDiv.addEventListener('scroll',function(e){
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;

    topRow.style.top = scrollFromTop+"px";
    leftCol.style.left = scrollFromLeft+"px";
    topleft.style.top = scrollFromTop+"px";
    topleft.style.left = scrollFromLeft+"px";
  //  console.log(topleft)
    
})

for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',function(e){
        let rowId = Number(e.target.getAttribute("rowid"));
        let colId = Number(e.target.getAttribute("colid"));
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";
        console.log(address);
        addressInput.value = address;
        let cellObject = db[rowId][colId];
        //update UI
        formulaInput.value = cellObject.formula;
    })

    cells[i].addEventListener("blur",function(e){
        lastSelectedCell = e.target;
        let cellValue = e.target.textContent;
        console.log(e.target);
         let {rowId,colId} = getRowIdColIdFromElement(e.target);
        let cellObject = db[rowId][colId];
        if(cellObject.value == cellValue){
            return;
        }
        cellObject.value = cellValue;
        console.log("After UPdate",cellObject);
    })
    
}


//Updating the formula
formulaInput.addEventListener("blur",function(e){
    let formula = e.target.value;
    if(formula){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        let computedValue = solveFormula(formula); // will implement in next commit
        //update db
        cellObject.value = computedValue;
        cellObject.formula = formula;
        //update ui
        lastSelectedCell.textContent = computedValue;
    }

})

