// function generateRandomNumber(min,max)
// {
//     return Math.floor(Math.random()*(max - min) + min);
// }

function handler(e,i){
    // e.target.innerText=generateRandomNumber(1,13);
    e.target.innerText=i+1
    setTimeout(function setBlank(){
        e.target.innerText=" ";
    },5000);
}

let root=document.querySelector('.container');


let boxOne=root.children[0];
let boxesOne=boxOne.querySelectorAll('li');

/*multiple event listeners*/

boxesOne.forEach(function(box,index){
    box.addEventListener('click',function(event)
    {
        handler(event,index);
    });
});


let boxTwo=root.children[1];
let boxesTwo=boxTwo.querySelectorAll('li');

boxesTwo.forEach((box,index)=>{
    box.setAttribute('data-sr',`${index+1}`);
});

console.log(boxesTwo);

/* event delegation*/
boxTwo.addEventListener('click',function(event){
    let text=event.target.dataset.sr;
    event.target.innerText=text;

    setTimeout(()=>{
        event.target.innerText="";
    },5000);
});



