let user_score;
let comp_score;
const choice= document.querySelectorAll(".c1");
const msg1 = document.getElementById("msg");
const s1 = document.getElementById("scoring1");
const s2 = document.getElementById("scoring2");
let score1= 0;
let score2 = 0;


const draw =() =>{
    console.log("Match Draw!");
    msg1.innerText="Match Draw!";
}
const show_winner = (user_win) =>{
    if(user_win){
        console.log("You Win!");
        msg1.innerText= "You Win!";
        score1++;
        s1.innerText = score1;
    }
    else{
        console.log("You Lose!");
        msg1.innerText="You Lose!";
        score2++;
        s2.innerText = score2;
    }

}
const comp_choice = () =>{
    let array = ["rock","paper","scissor"];
    let ans = Math.floor( Math.random()*3);
    return array[ans];
}
const play_game=(user_choice)=>{
    const c_choice1 = comp_choice();
    console.log(c_choice1);
    if(user_choice===c_choice1){
        draw();
    }
    else{
        user_win = true;
        if(user_choice==="rock"){
            if(comp_choice==="scissor"){
                user_win = true;
            }
            else{
                user_win=false;
            }
        }
        else if(user_choice==="paper"){
            if(comp_choice==="rock"){
                user_win=false;
            }
            else{
                user_win=true;
            }
        }
        else{
            if(comp_choice==="rock"){
                user_win=false;
            }
            else{
                user_win=true;
            }
        }
    }
    show_winner(user_win);
}

choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        console.log(user_choice);
        play_game(user_choice);
    })
})
