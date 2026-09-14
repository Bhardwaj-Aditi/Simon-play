let gameseq=[];
let userseq=[];
let level=0;
let gamestart=false;
let h=document.querySelector("h2");
let btns=["yellow","green","blue","red"];
document.addEventListener("keypress", function() { //sabse phle ye banaya i-keypress par levelup ko call krega 
    if(gamestart == false){
    console.log("Game has started ");
    gamestart=true;
    levelup();
    }
});

function levelup(){    // i-random color generate hoga,ii-btnflash hoga, iii-isme gameseq update hoga 
    userseq=[];//for gameoutput
    level++;
    h.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()* 4);
    let randcolor=btns[randidx];
    gameseq.push(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
}

function btnflash(btn){          //for flashing any button,used a flash class in css
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
    }

function pressbtn(){ 
    let btn =this; //
    let usercolor=btn.getAttribute("id"); //aasigned ids in html tags just to get colors
    userseq.push(usercolor);//for userinput
    btnflash(btn);
    checkcolor(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn"); //using class selector,gives HTML collection
for(btn of allbtns){
    btn.addEventListener("click",pressbtn);// callback for pressbtn fucntion
    //i- check which button was pressed
    //ii- flash that button
    //iii- store that in userseq[]
}
function checkcolor(idx){
 if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
 else{
        h.innerHTML=`Game Over!<br> Score: <b>${level}<b><br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },175);
        reset();
    }
}

function reset(){
    gamestart=false;
    level=0;
    userseq=[];
    gameseq=[];
}
