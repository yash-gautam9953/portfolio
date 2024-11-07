let userScore=0;
let compScore=0;
let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#message");
let uscore=document.querySelector("#userScore");
console.log(uscore)
let cscore=document.querySelector("#compScore");

const compChoice = () =>{
     let options =["rock","paper","scissor"];
     const cC=Math.floor(Math.random()*3);
  return options[cC];
}
const draw = () =>{
    console.log("match is draw");
    msg.innerText="Match is draw ! play Again";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}

const result =(UserWin,yash,harsh) =>{
    if(UserWin){
        userScore++;
        uscore.innerText=userScore;
        console.log("You win");
        msg.innerText=`You Win! your ${yash} beats ${harsh}`;
   msg.style.backgroundColor="greenyellow";
    }else{
        compScore++;
        cscore.innerText=compScore;
        console.log("You lose");
        msg.innerText=`YouLose!${harsh} beats your ${yash}`;
        msg.style.backgroundColor="red";
    }

}

const playGame = (yash) =>{
    console.log("user choice is =",yash);
    let harsh=compChoice();
    console.log("computer choice =",harsh);
    let UserWin=true;
    if(yash===harsh){
        draw();
    }
    else if((yash==="rock" && harsh==="paper") || (yash==="scissor" && harsh==="rock") || (yash==="paper" && harsh==="scissor")){
       UserWin=false;
       result(UserWin,yash,harsh);
    }else{
        result(UserWin,yash,harsh);
    }
    
   
    
} 

choice.forEach((val) =>{
val.addEventListener("click", () => {
    const yash=val.getAttribute("id");
playGame(yash);

}) ;
});


