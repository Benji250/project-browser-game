const boy = document.getElementById("boy");
const enemy = document.getElementById("enemy");
const score = document.getElementById("score");

let currentScore = 0;

const jumpSound = new Audio('./images/character movements/Arrow+Swoosh+1.mp3')
jumpSound.volume=1;
const deathSound = new Audio('./images/character movements/Dart.mp3')
deathSound.volume=1;
const guySound = new Audio('./images/character movements/SCREAM3.mp3')
guySound.volume=0.5;

//Jump
function jump() {
    if (boy.classList !="jump");{
        boy.classList.add("jump");

        setTimeout(function (){
            boy.classList.remove("jump");
        }, 300);
    }
}
//Score & Death
let alive = setInterval(function(){
    
    let boyTop = parseInt(window.getComputedStyle(boy).getPropertyValue("top"));

    let enemyLeft = parseInt(
        window.getComputedStyle(enemy).getPropertyValue("left")
        );
        
        if (enemyLeft < 12){
           currentScore++
           score.innerText = currentScore
    
        }
    
    if (enemyLeft < 50 && enemyLeft > 0 && boyTop >= 390){
       currentScore = 0 
       resetScore(currentScore)
       guySound.play()
       deathSound.play() 
       alert("YOU DIED !!");
       
    }
}, 10);

document.addEventListener("keydown", function(event){
    jump()
    jumpSound.play()
    jumpBoy()
    console.log("jump")
});
//Code from Chris D
async function resetScore(currentScore){
    console.log("hello")
    currentScore = 0; 
    score.innerHTML=0

    return currentScore
}