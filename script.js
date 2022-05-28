let topRow = document.querySelector('.top-row');
let leftCol = document.querySelector('.left-col');
let topleft = document.querySelector(".top-left-cell");
let cells = document.querySelectorAll('.cell');
let addressInput = document.querySelector('#address'); 

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
    })
}

