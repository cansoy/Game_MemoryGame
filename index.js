let arrayMemory=["A","B","C","D","A","B","C","D"];
let divRegion=document.querySelector("#main");
let chosen=[];
let result=document.querySelector("#result");

window.addEventListener("load",()=>{
    let newArrayMemory=arrayMemory.sort(()=>Math.random()-0.5);
    let a=1;
    for(a=1;a<9;a++){
        let div=document.createElement("div");
        divRegion.appendChild(div);
        div.setAttribute("class","icdiv");
        div.setAttribute("data-id",a);
        div.innerHTML=newArrayMemory[a-1];
        
        div.addEventListener("click",()=>{
        div.style.color ="black";
        chosen.push(div.innerHTML);
        if(chosen.length==8){
           gameOver(); 
                    }
            })
    }
        
        function showThreeSecond(){
            for(let b=1;b<9;b++){
            let divs=document.querySelectorAll("#main > .icdiv")[b-1];
                divs.style.color ="lightblue";
                }
            }
            setTimeout(showThreeSecond,3000);
            
})
function gameOver(){
    //find final uniqe array
    let newChosen=[...new Set(chosen)];
    newChosen=newChosen.join("");
    //chose odd indexes
    let oddChosen=[];
    chosen.forEach((arrayItem,arrayIndex)=>{
        if (arrayIndex%2!=0){
            oddChosen.push(arrayItem);
        }
    })
    oddChosen=oddChosen.join("");
    if(newChosen==oddChosen){
        result.innerHTML="You Are Really Cleaver !!!"
    }
    else{
      result.innerHTML="You Should Try Again !!!"  
    }
}


/*
window.addEventListener("DOMContentLoaded",()=>{
    for(let a=0;a<12;a++){
        let div=document.createElement("div");
        divBolgesi.appendChild(div);
        div.setAttribute("class","icdiv");
        div.setAttribute("data-id",a);
    }
})
*/
/*
btn.addEventListener("click",()=>{
    for(let a=1;a<9;a++){
        let divIc=document.createElement("div")
        divBolgesi.appendChild(divIc);
        divIc.setAttribute("class","icdiv"); 
        divIc.setAttribute("data-id",a);
        console.log(divIc.getAttribute("data-id"));
    }
})
*/


