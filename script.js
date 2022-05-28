let topRow = document.querySelector('.top-row');
let leftCol = document.querySelector('.left-col');
let topleft = document.querySelector(".top-left-cell");

cellsContentDiv.addEventListener('scroll',function(e){
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;

    topRow.style.top = scrollFromTop+"px";
    leftCol.style.left = scrollFromLeft+"px";
    topleft.style.top = scrollFromTop+"px";
    topleft.style.left = scrollFromLeft+"px";
  //  console.log(topleft)
    
})


let db=[];

function createDb(){
    for(let i=0;i<100;i++){
        let row = [];
        for(let j=0;j<26;j++){
            let name = String.fromCharCode(65+j)+(i+1)+"";
            let value = "";
            let obj = {
                name:name,
                value:value
            }
           row.push(obj);
        }
        db.push(row);
    }
}


createDb();
console.log(db);