let gamesequence = [];
let usersequence = [];
let color = ["red","yellow","green","purple"];
let gamestart = false;
let level = 0;
let h3 = document.querySelector(".mainhead");


document.addEventListener("keypress",()=>{
if(gamestart==false){
    gamestart=true;
    console.log(gamestart);
    levelup();
}});

function levelup(){
    usersequence = [];
    level++;
//let h3 = document.querySelector("h3");
h3.innerText = `level ${level}`;
console.log(h3.innertext);
let ran =Math.floor(Math.random()*3)+1;
let rancolor = color[ran];
let ranbtn =document.querySelector( `.${rancolor}`);
gameFlash(ranbtn);
gamesequence.push(rancolor);
console.log( "game",gamesequence);


}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
let allbtns = document.querySelectorAll(".box");
    for(input of allbtns){
       input.addEventListener("click",btnpress);
    }

function btnpress(){
    if(gamestart==false){
        h3.innerText = "please first press any key for start the game";
    }
    else{
    let input = this;
    
    userflash(input);

    let id  = input.getAttribute("id");
    usersequence.push(id);
    console.log("user",usersequence);
    check(usersequence.length-1);
    }
    
}
function userflash(inpu){
    inpu.classList.add("userflash");
    
    setTimeout(function(){
        inpu.classList.remove("userflash");
    },250)

}
function check(idx){
    
    if(gamesequence[idx]==usersequence[idx]){
        console.log("same level");
        if(gamesequence.length==usersequence.length){
           setTimeout( levelup,1000
        );
        }

    }else{
        h3.innerHTML = `"Game Over ! Your Score Was <b>${level}</b><br> Press any key to start"`;
        document.querySelector("body").style.backgroundColor ="red";

       
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },1000);
        
        reset();
    }
}
function reset(){
    gamestart = false;
    gamesequence=[];
    usersequence=[];
    level=0;



}