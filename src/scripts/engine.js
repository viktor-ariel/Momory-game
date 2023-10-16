const emoji = [
    "🖤",
    "🖤",
    "🇧🇷",
    "🇧🇷",
    "🍉",
    "🍉",
    "🦛",
    "🦛",
    "💧",
    "💧",
    "🍀",
    "🍀",
    "🥷",
    "🥷",
    "🧿",
    "🧿"
];
let openCards =[];
let shuffleEmojis= emoji.sort(()=>(Math.random()>0.5 ? 2 : -1 ));
for(let i=0 ; i< emoji.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards == 2 ){
        setTimeout(checkMatch,500);
    }
}
function checkMatch(){

}