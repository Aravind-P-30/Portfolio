window.addEventListener("scroll",()=>{

let cards=document.querySelectorAll(".skill-card,.project-card");

cards.forEach(card=>{

let position=card.getBoundingClientRect().top;

let screen=window.innerHeight;

if(position < screen - 100){
card.style.opacity="1";
card.style.transform="translateY(0)";
}

});

});

document.querySelectorAll(".skill-card,.project-card").forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all 0.8s";
});
